import { NextFunction, Request, Response } from 'express';

import GameBoard from '../game-core/GameBoard';

class IndexController {
  private gameBoard: any = null;
  private gameLogs: string[] = [];
  private started = false;

  constructor() {
    this.gameBoard = new GameBoard(3);
  }

  public index = (req: Request, res: Response, next: NextFunction): void => {
    this.gameBoard.setMessage('Hello');
    try {
      res.status(200).json({ message: this.gameBoard.getMessage() });
    } catch (error) {
      next(error);
    }
  };

  public reset = (req: Request, res: Response, next: NextFunction): void => {
    this.gameBoard = new GameBoard(3);
    try {
      res.status(200).json({ message: 'Game resetted' });
    } catch (error) {
      next(error);
    }
  };

  public tick = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).json({ message: 'Tick added' });
    } catch (error) {
      next(error);
    }
  };

  public gameState = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).json({ message: 'Returning game state' });
    } catch (error) {
      next(error);
    }
  };

  public gameLog = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).json({ message: 'Returning game log' });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
