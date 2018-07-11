import baseDTO from "../dto/baseDTO";
import baseEntity from "../Entity/baseEntity";
import baseServiceInterface from "./baseServiceInterface";
import mathEntity from "../Entity/mathEntity";
import mathDTO from "../dto/mathDTO";

export default interface mathServiceInterface extends baseServiceInterface<number, mathEntity, mathDTO> {
}