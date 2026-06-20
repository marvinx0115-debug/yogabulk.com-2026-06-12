// check-encoding.cjs - Scan source files for encoding issues
// Run: node scripts/check-encoding.cjs
// Exit code 0 = clean, 1 = issues found

const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "src");
let errorCount = 0;

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === ".astro") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(astro|js|ts|jsx|tsx)$/.test(entry.name)) {
      scanFile(fullPath);
    }
  }
}

function scanFile(filePath) {
  const bytes = fs.readFileSync(filePath);
  const content = bytes.toString("utf8");
  const relPath = path.relative(path.join(__dirname, ".."), filePath);
  
  if (bytes[0] === 0xEF && bytes[1] === 0xBB && bytes[2] === 0xBF) {
    console.log("[BOM]  " + relPath + " has UTF-8 BOM");
    errorCount++;
  }
  
  const cjkPattern = /[\u4e00-\u9fff]+/g;
  let match;
  const found = new Set();
  while ((match = cjkPattern.exec(content)) !== null) {
    found.add(match[0]);
  }
  if (found.size > 0) {
    console.log("[CJK]  " + relPath + " : " + [...found].join(" "));
    errorCount++;
  }
  
  const mojibake = ["路", "鈫", "鈼", "馃摝", "馃搵", "馃殮"];
  for (const char of mojibake) {
    if (content.includes(char)) {
      console.log("[MOJ]  " + relPath + " contains mojibake: " + char);
      errorCount++;
    }
  }
}

scanDir(srcDir);

if (errorCount === 0) {
  console.log("OK - No encoding issues found");
  process.exit(0);
} else {
  console.log("FAIL - " + errorCount + " issue(s) found");
  process.exit(1);
}