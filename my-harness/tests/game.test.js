import { test } from "node:test";
import assert from "node:assert/strict";
import { Game, Score } from "../src/game.js";
import { Computer } from "../src/computer.js";

const play = (...cells) => {
  const game = new Game();
  cells.forEach((cell) => game.placeMark(cell));
  return game;
};

test("AC-1 새 게임의 차례는 X다", () => {
  assert.equal(new Game().turn, "X");
});

test("AC-2 찬 칸에는 둘 수 없고 차례는 그대로다", () => {
  const game = play(0);
  assert.throws(() => game.placeMark(0), /빈 칸에만 둘 수 있어요/);
  assert.equal(game.turn, "O");
});

test("AC-3 수를 두면 차례가 넘어간다", () => {
  assert.equal(play(4).turn, "O");
});

test("AC-4 한 줄을 채우면 그 마크가 이긴다", () => {
  const game = play(0, 3, 1, 4, 2);
  assert.equal(game.result, "X");
  assert.deepEqual(game.winningLine, [0, 1, 2]);
});

test("AC-5 승리 줄 없이 보드가 차면 무승부다", () => {
  const game = play(0, 1, 2, 4, 3, 5, 7, 6, 8);
  assert.equal(game.result, "draw");
  assert.equal(game.winningLine, null);
});

test("AC-6 결과가 난 게임에는 둘 수 없다", () => {
  const game = play(0, 3, 1, 4, 2);
  assert.throws(() => game.placeMark(8), /이미 끝난 게임이에요/);
});

test("AC-7 결과가 나면 스코어가 정확히 1 오른다", () => {
  const score = new Score();
  score.record(play(0, 3, 1, 4, 2));
  assert.deepEqual({ ...score }, { X: 1, O: 0, draw: 0 });
});

test("AC-8 어려움 컴퓨터는 이길 수 있으면 이긴다", () => {
  // X:0,1,8  O:3,4 → O 차례, 5에 두면 O 승리 (2로 막는 것보다 우선)
  const game = play(0, 3, 1, 4, 8);
  assert.equal(new Computer("hard").chooseCell(game), 5);
});

test("AC-9 어려움 컴퓨터는 질 위기면 막는다", () => {
  const game = play(0, 4, 1); // X가 2에 두면 이김
  assert.equal(new Computer("hard").chooseCell(game), 2);
});

test("AC-10 어려움 컴퓨터(O)는 어떤 경우에도 지지 않는다", () => {
  const computer = new Computer("hard");
  const explore = (game) => {
    if (game.result) return assert.notEqual(game.result, "X");
    if (game.turn === "O") {
      game.placeMark(computer.chooseCell(game));
      return explore(game);
    }
    game.board.forEach((mark, cell) => {
      if (mark) return;
      const next = Object.assign(new Game(), structuredClone(game));
      next.placeMark(cell);
      explore(next);
    });
  };
  explore(new Game());
});
