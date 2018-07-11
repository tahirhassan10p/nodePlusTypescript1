import baseRepository from "./baseRepository";
import mathEntity from "../Entity/mathEntity";
import mathRepositoryInterface from "./mathRepositoryInterface";
import {injectable} from "inversify";

@injectable()
export default class mathRepository
    extends baseRepository<number, mathEntity>
    implements mathRepositoryInterface
    {
    constructor(){
        super();
    }
}