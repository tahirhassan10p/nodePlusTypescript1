import baseRoute from './baseRoute'
import mathController from '../controllers/mathController'
import mathEntity from "../entity/mathEntity";
import mathDTO from "../dto/mathDTO";
import mathRepository from "../repository/mathRepository";
import mathService from "../service/mathService";
import container from "./../helper/ioCResolver";
import TYPES from "../constants/identifiers";

export default class mathRoute extends baseRoute<number, mathEntity, mathDTO, mathRepository, mathService, mathController> {
    constructor(prefix: string, router: any) {

        var controller = container.get<mathController>(TYPES.mathControllerInterface);
        super(controller, prefix, router);
    }
}