import "reflect-metadata"
import {Container} from "inversify"
import mathRepositoryInterface from "../repository/mathRepositoryInterface";
import TYPES from "../constants/identifiers";
import mathRepository from "../repository/mathRepository";
import mathServiceInterface from "../service/mathServiceInterface";
import mathService from "../service/mathService";
import mathControllerInterface from "../controllers/mathControllerInterface";
import mathController from "../controllers/mathController";

var container = new Container();
container.bind<mathRepositoryInterface>(TYPES.mathRepositoryInterface).to(mathRepository);
container.bind<mathServiceInterface>(TYPES.mathServiceInterface).to(mathService);
container.bind<mathControllerInterface>(TYPES.mathControllerInterface).to(mathController);

export default container;