import express from 'express';
import mathRoute from './routes/mathRoute'
import baseRoute from "./routes/baseRoute";
import mathController from "./controllers/mathController";
import mathEntity from "./Entity/mathEntity";
import mathDTO from "./dto/mathDTO";
import mathRepository from "./repository/mathRepository";
import mathService from "./service/mathService";

class App {
  public express:any;
  public mathRoute:baseRoute<number, mathEntity, mathDTO, mathRepository, mathService, mathController>;

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();

    this.mathRoute = new mathRoute("tahir", router);
    this.mathRoute.setupRoutes();


    this.express.use('/', router)
  }
}

export default new App().express