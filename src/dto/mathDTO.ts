import baseDTO from "./baseDTO";
import mathEntity from "../entity/mathEntity";

export default class mathDTO extends baseDTO<number, mathEntity> {
    constructor(){
        super();
    }
}