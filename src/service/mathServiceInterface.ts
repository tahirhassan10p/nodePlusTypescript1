import baseServiceInterface from "./baseServiceInterface";
import mathEntity from "../entity/mathEntity";
import mathDTO from "../dto/mathDTO";
import mathRepositoryInterface from "../repository/mathRepositoryInterface"

export default interface mathServiceInterface extends baseServiceInterface<number, mathEntity, mathDTO, mathRepositoryInterface> {
}