import { NextFunction, Request, Response } from 'express';

import GameBoard from '../game-core/GameBoard';
import { getResponseData } from '../utils/util';

class IndexController {
  private gameBoard: any = null;
  private gameLogs: string[] = [];

  constructor() {
    this.gameBoard = new GameBoard(3);
  }

  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const response = getResponseData('Have fun with tic tac toe', this.gameBoard, this.gameLogs);
      this.gameLogs.push(response.message);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  public reset = (req: Request, res: Response, next: NextFunction): void => {
    this.gameBoard = new GameBoard(3);
    this.gameLogs = [];
    try {
      res.status(200).json(getResponseData(`${this.gameBoard.getTurn()} starts the game!`, this.gameBoard, this.gameLogs));
    } catch (error) {
      next(error);
    }
  };

  public tick = (req: Request, res: Response, next: NextFunction): void => {
    try {
      if (this.gameBoard.setMark(parseInt(req.query.x), parseInt(req.query.y))) {
        const response = getResponseData(
          `Index used  { x => ${req.query.x};  y => ${req.query.y} }. Now it's turn for "${this.gameBoard.getTurn()}"`,
          this.gameBoard,
          this.gameLogs,
        );
        this.gameBoard.setMessage(response.message.toString());
        this.gameLogs.push(response.message.toString());
        res.json(response);
      } else {
        const response = getResponseData(
          `Cell is already occupied. Now it's still turn for ${this.gameBoard.getTurn()}`,
          this.gameBoard,
          this.gameLogs,
        );
        this.gameBoard.setMessage(response.message.toString());
        this.gameLogs.push(response.message.toString());
        res.json(response);
      }
    } catch (error) {
      next(error);
    }
  };

  public gameState = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).json({
        message: this.gameBoard.getMessage(),
        gameOver: this.gameBoard.isGameOver(),
        gridData: this.gameBoard.getBoardGrid(),
      });
    } catch (error) {
      next(error);
    }
  };

  public gameLog = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.json({
        log: this.gameLogs,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
