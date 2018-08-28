import baseControllerInterface from './baseControllerInterface'
import baseEntity from "../entity/baseEntity";
import baseDTO from "../dto/baseDTO";
import {injectable} from "inversify";
import baseRepositoryInterface from "../repository/baseRepositoryInterface";
import baseServiceInterface from "../service/baseServiceInterface";

@injectable()
export default abstract class baseController<TKey,
    TEntity extends baseEntity<TKey>,
    TDTO extends baseDTO<TKey, TEntity>,
    TRepository extends baseRepositoryInterface<TKey, TEntity>,
    TService extends baseServiceInterface<TKey, TEntity, TDTO, TRepository>>
    implements baseControllerInterface<TKey, TEntity, TDTO, TRepository, TService> {

    private service:TService;

    protected constructor(service:TService) {
        this.service = service;
    }

    public get(req:any, res:any):void {
        this.service.get();
        console.log("get controller");
        res.json("get controller")
    }

    public create(req:any, res:any):void {
        console.log("create controller");
    }

    public update(req:any, res:any):void {
        console.log("update controller");
    }

    public delete(req:any, res:any):void {
        console.log("delete controller");
    }
}