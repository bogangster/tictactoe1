# design.md — 틱택토

## 1. 개요
흰 바탕, 검정 글씨, 선명한 두 가지 포인트 컬러(X=코랄, O=블루)만 사용한다.
장식보다 **보드가 주인공**인 미니멀 화면. 모든 인터랙션은 한 손 엄지로 가능해야 한다.

## 2. 컬러
| 토큰 | 값 | 용도 |
|------|----|------|
| `primary` | `#141414` | 본문 텍스트, 기본 버튼 |
| `surface` | `#FFFFFF` | 배경 |
| `surface-muted` | `#F4F4F5` | 보드 칸 배경, 카드 |
| `border` | `#E4E4E7` | 보드 격자선, 구분선 |
| `text-secondary` | `#71717A` | 보조 텍스트 |
| `player-x` | `#FF5A5F` | X 마크 |
| `player-o` | `#2F6BFF` | O 마크 |
| `success` | `#16A34A` | 승리 줄 하이라이트 |

## 3. 타이포그래피
- 폰트: `Pretendard`, fallback `system-ui, sans-serif`
| 단계 | 크기 | 굵기 | 행간 |
|------|------|------|------|
| Display (결과 문구) | 32px | 800 | 1.2 |
| Title | 22px | 700 | 1.3 |
| Body | 16px | 400 | 1.5 |
| Caption | 13px | 500 | 1.4 |
| Board mark (X/O) | 56px | 800 | 1 |

## 4. 레이아웃·모양
- 간격 단위: **4px** (4 / 8 / 12 / 16 / 24 / 32)
- 페이지 좌우 여백 16px, 최대 폭 480px 중앙 정렬
- 모서리: 버튼·칸 12px, 카드·모달 16px
- 그림자: 모달에만 `0 8px 24px rgba(0,0,0,0.12)`. 그 외 그림자 없음

## 5. 컴포넌트
- **Button (primary)**: 높이 48px, 배경 `primary`, 글자 흰색 16px/600, radius 12px
- **Button (secondary)**: 높이 48px, 배경 `surface`, 테두리 1px `border`
- **Board cell**: 정사각형, 배경 `surface-muted`, 누르면 마크가 150ms scale-in
- **Turn indicator**: 보드 상단, 현재 플레이어 색 점 + "X 차례"
- **Result modal**: Display 문구 + primary "다시 하기" + secondary "홈으로"
- **Score card**: `surface-muted` 배경, 승/무/패 3열 숫자(Title)

## 6. Do / Don't
- ✅ Do: X와 O는 색 + 모양 두 가지로 구분 (색약 대응)
- ✅ Do: 터치 영역은 최소 44×44px
- ✅ Do: 승리 줄은 `success` 선으로 명확히 표시
- ❌ Don't: 포인트 컬러를 배경 전체에 깔지 않는다
- ❌ Don't: 보드 위에 텍스트/배너를 겹치지 않는다
- ❌ Don't: 그라데이션·과한 애니메이션(300ms 초과) 사용 금지
