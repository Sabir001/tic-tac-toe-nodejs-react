import * as assert from 'assert';
import { default as Board } from '../game-core/GameBoard';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Index', () => {
  describe('Tic tac toe game', () => {
    it('board constructor size is being used properly', () => {
      const board = new Board(6);
      assert.strictEqual(board.getBoardSize(), 6, 'Generated board returned 6');
    });

    it('X can win vertically', () => {
      const board = new Board();
      board.setPlayerMark(1, 0, 'X');
      board.setPlayerMark(1, 1, 'X');
      board.setPlayerMark(1, 2, 'X');
      console.log(board.getBoardGrid());
      assert.strictEqual(board.getWinner(), 'X', 'X won');
    });

    it('Y can win horizontally', () => {
      const board = new Board();
      board.setPlayerMark(0, 0, 'Y');
      board.setPlayerMark(1, 0, 'Y');
      board.setPlayerMark(2, 0, 'Y');
      console.log(board.getBoardGrid());
      assert.strictEqual(board.getWinner(), 'Y', 'Y won');
    });

    it('X can win diagonally (Left to right)', () => {
      const board = new Board();
      board.setPlayerMark(0, 0, 'X');
      board.setPlayerMark(1, 1, 'X');
      board.setPlayerMark(2, 2, 'X');
      console.log(board.getBoardGrid());
      assert.strictEqual(board.getWinner(), 'X', 'X won diagonally');
    });

    it('Y can win diagonally (Right to left)', () => {
      const board = new Board();
      board.setPlayerMark(2, 0, 'y');
      board.setPlayerMark(1, 1, 'y');
      board.setPlayerMark(0, 2, 'y');
      console.log(board.getBoardGrid());
      assert.strictEqual(board.getWinner(), 'y', 'Y won diagonally');
    });

    it('draw', () => {
      const board = new Board();
      board.setPlayerMark(0, 0, 'X');
      board.setPlayerMark(0, 1, 'O');
      board.setPlayerMark(0, 2, 'X');
      board.setPlayerMark(1, 1, 'O');
      board.setPlayerMark(1, 2, 'X');
      board.setPlayerMark(1, 0, 'O');
      board.setPlayerMark(2, 1, 'X');
      board.setPlayerMark(2, 2, 'O');
      board.setPlayerMark(2, 0, 'X');
      console.log(board.getBoardGrid());
      assert.strictEqual(board.getWinner(), null, 'Draw');
    });
  });
});
