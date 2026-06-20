#!/usr/bin/env node
// 构建后验证脚本
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
let errors = [];

// 1. 检查关键文件存在
const criticalFiles = [
  'index.html',
  'faq/index.html',
  'products/index.html',
];

for (const file of criticalFiles) {
  const fullPath = path.join(distDir, file);
  if (!fs.existsSync(fullPath)) {
    errors.push(`❌ 缺失关键文件: ${file}`);
  }
}

// 2. 检查 index.html 中的常见问题
const indexPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const content = fs.readFileSync(indexPath, 'utf-8');

  // 检查 Hero 背景图是否存在且可见（不被完全遮挡）
  if (content.includes('best-sellers-bg.png')) {
    // 检查渐变透明度是否合理（不应该全部 90%+）
    const gradientMatch = content.match(/from-\[.*?\]\/\d+/);
    if (gradientMatch) {
      const opacity = parseInt(gradientMatch[0].split('/')[1]);
      if (opacity >= 90) {
        errors.push(`⚠️ Hero 渐变透明度 ${opacity}% 过高，可能遮挡背景图`);
      }
    }
  }

  // 检查 FAQ 分类是否正确渲染（简单检查）
  // 实际应该在浏览器中验证
}

// 3. 检查 FAQ 页面
const faqPath = path.join(distDir, 'faq', 'index.html');
if (fs.existsSync(faqPath)) {
  const content = fs.readFileSync(faqPath, 'utf-8');

  // 检查是否有 FAQ 内容
  if (!content.includes('details') || !content.includes('summary')) {
    errors.push(`⚠️ FAQ 页面可能没有正确渲染内容`);
  }
}

// 输出结果
if (errors.length > 0) {
  console.log('\n🔍 构建验证发现以下问题：\n');
  errors.forEach(e => console.log(e));
  console.log('\n请修复后再推送。\n');
  process.exit(1);
} else {
  console.log('\n✅ 构建验证通过\n');
  process.exit(0);
}
