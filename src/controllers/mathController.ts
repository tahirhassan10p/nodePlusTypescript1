import baseController from './baseController'
import mathEntity from "../entity/mathEntity";
import mathDTO from "../dto/mathDTO";
import mathRepository from "../repository/mathRepository";
import mathService from "../service/mathService";
import mathControllerInterface from "./mathControllerInterface";
import {inject, injectable} from "inversify";
import mathServiceInterface from "../service/mathServiceInterface";
import TYPES from "../constants/identifiers";

@injectable()
export default class mathController
    extends baseController<number, mathEntity, mathDTO, mathRepository, mathService>
    implements mathControllerInterface
{
    constructor(@inject(TYPES.mathServiceInterface)service:mathServiceInterface) {
        super(service as mathService);
    }
}