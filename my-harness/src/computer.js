import { findWinningLine, other } from "./game.js";

const emptyCells = (board) => board.flatMap((mark, cell) => (mark ? [] : [cell]));

// 현재 차례 mark 입장의 점수: 이기면 +, 지면 -, 무승부 0
function minimax(board, mark) {
  const line = findWinningLine(board);
  if (line) return board[line[0]] === mark ? 1 : -1;
  const cells = emptyCells(board);
  if (cells.length === 0) return 0;
  let best = -Infinity;
  for (const cell of cells) {
    board[cell] = mark;
    best = Math.max(best, -minimax(board, other(mark)));
    board[cell] = null;
    if (best === 1) break;
  }
  return best;
}

export class Computer {
  constructor(difficulty = "hard", random = Math.random) {
    this.difficulty = difficulty;
    this.random = random;
  }

  chooseCell(game) {
    const cells = emptyCells(game.board);
    if (this.difficulty === "easy") return cells[Math.floor(this.random() * cells.length)];

    // R8: 어려움은 최선의 수만 둔다 (이길 수 있으면 이기고, 질 위기면 막음)
    const board = [...game.board];
    let bestCell = cells[0];
    let bestScore = -Infinity;
    for (const cell of cells) {
      board[cell] = game.turn;
      const score = findWinningLine(board) ? 2 : -minimax(board, other(game.turn));
      board[cell] = null;
      if (score > bestScore) [bestScore, bestCell] = [score, cell];
    }
    return bestCell;
  }
}
