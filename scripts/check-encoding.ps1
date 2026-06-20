# check-encoding.ps1 - Scan source files for encoding issues (CJK mojibake from GBK)
# Usage: .\scripts\check-encoding.ps1
# Exit code 0 = clean, 1 = issues found

param(
  [string]$Dir = "src",
  [string[]]$Exclude = @("node_modules", ".astro", ".git")
)

$ErrorCount = 0

Get-ChildItem -Path $Dir -Recurse -Include "*.astro","*.js","*.ts","*.jsx","*.tsx" | ForEach-Object {
  $relPath = $_.FullName.Replace((Get-Location).Path + "\", "")
  $bytes = [System.IO.File]::ReadAllBytes($_.FullName)
  
  # Check for UTF-8 BOM
  if ($bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
    Write-Host "[BOM]  $relPath has UTF-8 BOM (should be removed)" -ForegroundColor Yellow
  }
  
  # Decode as UTF-8 and scan for CJK characters
  $content = [System.Text.Encoding]::UTF8.GetString($bytes)
  $cjkPattern = [System.Text.RegularExpressions.Regex]::new('[\u4e00-\u9fff]+')
  $matches = $cjkPattern.Matches($content)
  
  if ($matches.Count -gt 0) {
    $unique = ($matches.Value | Select-Object -Unique) -join " "
    Write-Host "[CJK]  $relPath : $unique" -ForegroundColor Red
    $ErrorCount++
  }
  
  # Check for common mojibake patterns
  $mojibakeChars = @("路", "鈫", "鈼")
  foreach ($char in $mojibakeChars) {
    if ($content.Contains($char)) {
      Write-Host "[MOJ]  $relPath contains mojibake char: $char" -ForegroundColor Red
      $ErrorCount++
    }
  }
}

if ($ErrorCount -eq 0) {
  Write-Host "OK - No encoding issues found" -ForegroundColor Green
  exit 0
} else {
  Write-Host "FAIL - $ErrorCount encoding issue(s) found" -ForegroundColor Red
  exit 1
}