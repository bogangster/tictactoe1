# 최종 체크리스트

## 환경 세팅 (필수) — 내 PC에서 직접 해야 하는 항목
- [ ] **Claude Code 설치 + 로그인 (Pro 이상)**
  - 설치: `npm install -g @anthropic-ai/claude-code` (또는 공식 설치 스크립트)
  - 터미널에서 `claude` 실행 → 로그인 → 정상 실행 확인
- [ ] **Figma MCP 연결 (Figma Pro 이상)**
  - `claude mcp add --transport http figma https://mcp.figma.com/mcp`
  - Claude Code 안에서 `/mcp` → figma 인증 → **connected** 확인
  - 참고: 계정 `ruby@iriscorp.co.kr`의 **iris crop. 팀이 Pro 플랜**(Full seat)이라 요건 충족 ✅
    (ruby's team은 starter라 Pro 기능이 필요하면 iris crop. 팀 파일로 작업하세요)
- [ ] **UI Bowl MCP 연결 (무료 가입)**
  - UI Bowl 사이트에서 가입 → 안내된 MCP 추가 명령 실행
  - `/mcp`에서 connected 확인
- [ ] **작업 폴더 1개**: 바탕화면에 `my-harness` 폴더 생성
  - 이 저장소의 `my-harness/` 폴더 내용을 그대로 복사해 두면 됩니다
- [ ] **GitHub 계정** 로그인 가능 상태 확인

## 문서 준비 (필수) — 초안 작성 완료
- [x] PRD 5블록 → `prd.md` (틱택토 예시 초안, 필요시 내 서비스로 교체)
- [x] design.md → `design.md` (6섹션 초안)

## 권장
- [x] 실습할 업무 1개 → `task-domain.md` (후보 작성, 최종 선택은 본인이 체크)
- [ ] (선택) 기존 QA/핸드오프 체크리스트, 지난 결과물 1~2개를 `my-harness/refs/`에 넣어두기

## 클라우드 세션에서 확인된 것
- Figma MCP: 인증 정상 (handle: ruby, Pro 플랜 1개 보유)
- UI Bowl MCP: 이 세션에는 연결되어 있지 않음 → 내 PC에서 직접 연결 필요
