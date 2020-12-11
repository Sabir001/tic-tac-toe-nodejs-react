import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public reset = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).json({ message: 'Game is reset to initial state' });
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
