import baseControllerInterface from "./baseControllerInterface";
import mathEntity from "../Entity/mathEntity";
import mathDTO from "../dto/mathDTO";
import mathRepository from "../repository/mathRepository";
import mathService from "../service/mathService";

export default interface mathControllerInterface extends baseControllerInterface<number, mathEntity, mathDTO, mathRepository, mathService> {
}