import baseRepositoryInterface from "./baseRepositoryInterface";
import baseEntity from "../entity/baseEntity";
import {injectable} from "inversify";
import {Repository, EntityRepository} from "typeorm"

@injectable()
@EntityRepository(baseEntity)
export default abstract class baseRepository<TKey, TEntity extends baseEntity<TKey>> extends Repository<TEntity>
    implements baseRepositoryInterface<TKey, TEntity> {

    protected constructor() {
        super();
    }

    public get(): Array<TEntity> {
        console.log("base repository get");

        return new Array<TEntity>();
    }

    // public get(id:TKey):void{
    // }

    public create(entity: TEntity): TEntity {
        console.log("base repository get");
        return this.connection.save(entity);
    }

    public update(entity: TEntity): TEntity {
        console.log("base repository update");
        return entity;
    }

    public delete(id: TKey): boolean {
        console.log("base repository delete");
        return true;
    }
}