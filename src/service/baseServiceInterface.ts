import baseDTO from '../dto/baseDTO'
import baseEntity from "../Entity/baseEntity";
import baseRepositoryInterface from "../repository/baseRepositoryInterface";

export default interface baseServiceInterface<TKey, TEntity extends baseEntity<TKey>, TDTO extends baseDTO<TKey, TEntity>, TRepository extends baseRepositoryInterface<TKey,TEntity>> {
    get():void;
    // get(id:TKey):void;
    create(dto:TDTO):TDTO;
    update(dto:TDTO):TDTO;
    delete(id:TKey):boolean;
}