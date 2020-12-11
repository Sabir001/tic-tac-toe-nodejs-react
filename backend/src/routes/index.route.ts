import { Router } from 'express';
import IndexController from '../controllers/index.controller';
import Route from '../interfaces/routes.interface';

class IndexRoute implements Route {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
    this.router.get(`${this.path}reset`, this.indexController.reset);
    this.router.get(`${this.path}tick`, this.indexController.tick);
    this.router.get(`${this.path}game-state`, this.indexController.gameState);
    this.router.get(`${this.path}game-log`, this.indexController.gameLog);
  }
}

export default IndexRoute;
