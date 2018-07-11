import mathRepositoryInterface from "../repository/mathRepositoryInterface";
import mathServiceInterface from "../service/mathServiceInterface";
import mathControllerInterface from "../controllers/mathControllerInterface";

let TYPES = {
    mathRepositoryInterface: Symbol("mathRepositoryInterface"),
    mathServiceInterface: Symbol("mathServiceInterface"),
    mathControllerInterface: Symbol("mathControllerInterface"),
};

export default TYPES;