# my-harness — '디자인 하네스 만들기' 워크숍 준비 폴더

9/29(화) 21:00 4차 사이클 워크숍용 작업 폴더입니다.
서비스 예시는 이 저장소 이름(tictactoe1)에 맞춰 **틱택토 웹 게임**으로 채웠어요.
실제로 쓰실 서비스가 다르면 `prd.md`, `design.md`의 내용만 바꿔 넣으시면 됩니다.

| 파일 | 내용 |
|------|------|
| `CHECKLIST.md` | 최종 체크리스트 (클라우드에서 확인된 항목 / 내 PC에서 직접 할 항목) |
| `prd.md` | 내 서비스 PRD 5블록 |
| `design.md` | 디자인 규칙 6섹션 |
| `task-domain.md` | 실습할 내 업무 1개 선정 워크시트 |

## 한 번에 세팅하기 (내 PC)
- **Mac**: 터미널에 붙여넣기
  `curl -fsSL https://raw.githubusercontent.com/bogangster/tictactoe1/claude/tender-thompson-ijc1fy/my-harness/setup-mac.sh | bash`
- **Windows**: `setup-windows.ps1` 다운로드 → PowerShell에서 `powershell -ExecutionPolicy Bypass -File setup-windows.ps1`

Claude Code 설치 · Figma MCP 등록 · 바탕화면 `my-harness` 폴더 생성까지 자동으로 합니다.
남는 건 로그인/인증 클릭과 UI Bowl 가입뿐이에요.

## DDD 흐름 적용 (도메인 스토리 → 유저 스토리 → 스펙 → 코드)
| Phase | 산출물 | 게이트 |
|-------|--------|--------|
| 1 | `domain-story.md`, `glossary.md` | 스토리 1개당 5~12문장 · 모든 작업 대상이 용어집에 있음 |
| 2 | `user-stories.md` | 모든 스토리에 이유 · 도메인 스토리 번호 참조 |
| 3 | `spec.md` | 규칙 R1~R8마다 인수 조건 1개 이상 · 화면별 빈/오류/진행 상태 · 사람 승인 1회 |
| 4 | `src/`, `tests/` | 인수 조건 AC-1~10마다 테스트 1개 · `npm test` 전부 통과 |
