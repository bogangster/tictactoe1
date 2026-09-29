// 용어집(glossary.md)의 단어를 그대로 코드 이름으로 씁니다. 규칙 ID는 spec.md 참고.

export class DomainError extends Error {}

export const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

export const other = (mark) => (mark === "X" ? "O" : "X");

export function findWinningLine(board) {
  return LINES.find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]) ?? null;
}

export class Game {
  constructor() {
    this.board = Array(9).fill(null);
    this.turn = "X"; // R1
    this.result = null;
    this.winningLine = null;
  }

  placeMark(cell) {
    if (this.result) throw new DomainError("이미 끝난 게임이에요"); // R6
    if (this.board[cell]) throw new DomainError("빈 칸에만 둘 수 있어요"); // R2
    this.board[cell] = this.turn;

    this.winningLine = findWinningLine(this.board);
    if (this.winningLine) this.result = this.turn; // R4
    else if (this.board.every(Boolean)) this.result = "draw"; // R5
    else this.turn = other(this.turn); // R3
  }
}

export class Score {
  constructor() {
    this.X = 0;
    this.O = 0;
    this.draw = 0;
  }

  record(game) {
    if (!game.result) throw new DomainError("끝나지 않은 게임은 기록할 수 없어요");
    this[game.result] += 1; // R7
  }
}
