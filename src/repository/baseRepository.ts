import baseRepositoryInterface from "./baseRepositoryInterface";
import baseEntity from "../Entity/baseEntity";
import {injectable} from "inversify";

@injectable()
export default abstract class baseRepository<TKey, TEntity extends baseEntity<TKey>>
    implements baseRepositoryInterface<TKey,TEntity> {

    protected constructor(){
    }

    public get():Array<TEntity>{
        console.log("base repository get");

        return new Array<TEntity>();
    }

    // public get(id:TKey):void{
    // }

    public create(entity:TEntity):TEntity{
        console.log("base repository get");
        return entity;
    }

    public update(entity:TEntity):TEntity{
        console.log("base repository update");
        return entity;
    }

    public delete(id:TKey):boolean{
        console.log("base repository delete");
        return true;
    }
}