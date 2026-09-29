#!/usr/bin/env bash
# 워크숍 준비 자동 세팅 (macOS). 터미널에서:  bash setup-mac.sh
set -e
REPO="https://github.com/bogangster/tictactoe1.git"
BRANCH="claude/tender-thompson-ijc1fy"
DEST="$HOME/Desktop/my-harness"

echo "▶ 1/3 Claude Code 설치"
if ! command -v claude >/dev/null 2>&1; then
  curl -fsSL https://claude.ai/install.sh | bash
  export PATH="$HOME/.local/bin:$PATH"
fi
claude --version

echo "▶ 2/3 Figma MCP 등록"
claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp 2>/dev/null || echo "  (이미 등록됨)"

echo "▶ 3/3 바탕화면에 my-harness 폴더 만들기"
if [ ! -d "$DEST" ]; then
  TMP=$(mktemp -d)
  git clone -q --depth 1 -b "$BRANCH" "$REPO" "$TMP/repo"
  cp -R "$TMP/repo/my-harness" "$DEST"
  rm -rf "$TMP"
fi
mkdir -p "$DEST/refs"
echo
echo "✅ 완료: $DEST"
echo "남은 일: cd \"$DEST\" && claude  →  처음 로그인(Pro 계정)  →  /mcp 에서 figma 인증"
echo "        UI Bowl은 사이트 가입 후 안내된 'claude mcp add ...' 명령을 붙여넣기"
