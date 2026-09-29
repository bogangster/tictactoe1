# 워크숍 준비 자동 세팅 (Windows). PowerShell에서:  powershell -ExecutionPolicy Bypass -File setup-windows.ps1
$ErrorActionPreference = "Stop"
$Repo   = "https://github.com/bogangster/tictactoe1.git"
$Branch = "claude/tender-thompson-ijc1fy"
$Dest   = Join-Path ([Environment]::GetFolderPath("Desktop")) "my-harness"

Write-Host "▶ 1/3 Claude Code 설치"
if (-not (Get-Command claude -ErrorAction SilentlyContinue)) {
  irm https://claude.ai/install.ps1 | iex
  $env:Path += ";$env:USERPROFILE\.local\bin"
}
claude --version

Write-Host "▶ 2/3 Figma MCP 등록"
try { claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp } catch { Write-Host "  (이미 등록됨)" }

Write-Host "▶ 3/3 바탕화면에 my-harness 폴더 만들기"
if (-not (Test-Path $Dest)) {
  $Tmp = Join-Path $env:TEMP ("harness-" + [guid]::NewGuid())
  git clone -q --depth 1 -b $Branch $Repo "$Tmp\repo"
  Copy-Item -Recurse "$Tmp\repo\my-harness" $Dest
  Remove-Item -Recurse -Force $Tmp
}
New-Item -ItemType Directory -Force (Join-Path $Dest "refs") | Out-Null
Write-Host ""
Write-Host "✅ 완료: $Dest"
Write-Host "남은 일: cd `"$Dest`"; claude  →  처음 로그인(Pro 계정)  →  /mcp 에서 figma 인증"
Write-Host "        UI Bowl은 사이트 가입 후 안내된 'claude mcp add ...' 명령을 붙여넣기"
