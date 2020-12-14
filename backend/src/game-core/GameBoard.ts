import { getGrid } from './GameGrid';

class GameBoard {
  protected grid: any;
  protected size: number;
  protected lastTurn: string = null;
  private message = "X's turn at first.";

  constructor(size = 3) {
    this.size = size;
    this.grid = getGrid(size);
  }

  public getBoardSize = (): number => this.size;

  public getBoardGrid = (): any[] => this.grid;

  public setPlayerMark = (x: number, y: number, player: any): void => {
    this.grid[y][x] = player;
    this.lastTurn = player;
  };

  public setMark = (x: number, y: number): boolean => {
    if (this.grid[y][x] === null) {
      this.grid[y][x] = this.getTurn();
      this.lastTurn = this.getTurn();
      return true;
    }
    return false;
  };

  public getFreeTurnsCount = (): number => {
    let count = 0;
    this.grid.forEach((row: any) => {
      count += row.filter((column: any) => column === null).length;
    });
    return count;
  };

  public isGameOver = (): boolean => {
    return this.getWinner() !== null || this.getFreeTurnsCount() === 0;
  };

  public getTurn = (): any => {
    return this.lastTurn !== 'X' || this.lastTurn === null ? 'X' : 'O';
  };

  public getWinner = (): any => {
    const horizontalWinner = this.getHorizontalWinner();
    if (horizontalWinner !== null) return horizontalWinner;
    const verticalWinner = this.getVerticalWinner();
    if (verticalWinner !== null) return verticalWinner;
    const crossWinner = this.getCrossLeftToRightWinner();
    if (crossWinner !== null) return crossWinner;
    const wDRL = this.getCrossRightToLeftWinner();
    if (wDRL !== null) return wDRL;
    return null;
  };

  private getChainWinner = (chain: any, minCountInARow: number): any => {
    let isSame = true;
    const marker = chain[0];
    let counter = 0;
    chain.forEach((cell: any) => {
      if (marker !== cell) isSame = false;
      else counter++;
    });
    return isSame && counter >= minCountInARow ? marker : null;
  };

  private getHorizontalWinner = (): any => {
    let winner = null;
    for (let y = 0; y < this.grid.length; y++) {
      const chain: any = [];
      for (let x = 0; x < this.grid.length; x++) {
        chain.push(this.grid[y][x]);
      }
      winner = this.getChainWinner(chain, this.grid.length);
      if (winner !== null) return winner;
    }
    return winner;
  };

  private getVerticalWinner = (): any => {
    let winner = null;
    for (let x = 0; x < this.grid.length; x++) {
      const chain: any = [];
      for (let y = 0; y < this.grid.length; y++) {
        chain.push(this.grid[y][x]);
      }
      winner = this.getChainWinner(chain, this.grid.length);
      if (winner !== null) return winner;
    }
    return winner;
  };

  private getCrossLeftToRightWinner = (): any => {
    const chain: any = [];
    for (let xy = 0; xy < this.grid.length; xy++) {
      chain.push(this.grid[xy][xy]);
    }
    return this.getChainWinner(chain, this.grid.length);
  };

  private getCrossRightToLeftWinner = (): any => {
    const chain: any = [];
    for (let xy = 0; xy < this.grid.length; xy++) {
      chain.push(this.grid[xy][this.grid.length - 1 - xy]);
    }
    return this.getChainWinner(chain, this.grid.length);
  };

  public setMessage = (message: string): string => {
    this.message = message;
    return message;
  };

  public getMessage = () => this.message;
}

export default GameBoard;
