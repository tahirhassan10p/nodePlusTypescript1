import baseDTO from "../dto/baseDTO";
import baseEntity from "../Entity/baseEntity";
import baseRepositoryInterface from "../repository/baseRepositoryInterface";
import baseServiceInterface from "../service/baseServiceInterface";

export default interface baseControllerInterface<TKey, TEntity extends baseEntity<TKey>, TDTO extends baseDTO<TKey, TEntity>, TRepository extends baseRepositoryInterface<TKey,TEntity>,TService extends baseServiceInterface<TKey,TEntity, TDTO, TRepository>> {
    get(req:any, res:any):void;
    create(req:any, res:any):void;
    update(req:any, res:any):void;
    delete(req:any, res:any):void;
}