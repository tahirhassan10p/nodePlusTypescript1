import baseService from "./baseService";
import mathEntity from "../entity/mathEntity";
import mathDTO from "../dto/mathDTO";
import mathRepository from "../repository/mathRepository";
import mathRepositoryInterface from "../repository/mathRepositoryInterface";
import mathServiceInterface from "./mathServiceInterface";
import {inject, injectable} from "inversify";
import TYPES from "../constants/identifiers";

@injectable()
export default class mathService
    extends baseService<number, mathEntity, mathDTO, mathRepository>
    implements mathServiceInterface {
    constructor(@inject(TYPES.mathRepositoryInterface)repository: mathRepositoryInterface) {
        console.log("math service constructor");
        super(repository);
    }
}