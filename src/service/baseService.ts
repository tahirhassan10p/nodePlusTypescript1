import baseServiceInterface from "./baseServiceInterface";
import baseEntity from "../entity/baseEntity";
import baseDTO from "../dto/baseDTO";
import {injectable} from "inversify";
import baseRepositoryInterface from "../repository/baseRepositoryInterface";

@injectable()
export default abstract class baseService<TKey, TEntity extends baseEntity<TKey>, TDTO extends baseDTO<TKey, TEntity>, TRepository extends baseRepositoryInterface<TKey, TEntity>>
    implements baseServiceInterface<TKey, TEntity, TDTO, TRepository> {
    protected repository: TRepository;

    protected constructor(repository: TRepository) {
        console.log("base service constructor");
        this.repository = repository;
    }

    public get(): Array<TDTO> {
        console.log("Base Service Get");
        this.repository.get();

        return new Array<TDTO>(); // TODO: change this to proper implementation
    }

    // public get(id:TKey):void{
    //
    // }

    public create(dto: TDTO): TDTO {
        console.log("Base Service Create");

        let obj: TEntity = this.repository.create(dto.convertToEntity({} as TEntity));
        dto.convertFromEntity(obj);

        return dto;
    }

    public update(dto: TDTO): TDTO {
        console.log("Base Service Update");

        let obj: TEntity = this.repository.update(dto.convertToEntity({} as TEntity));
        dto.convertFromEntity(obj);

        return dto;
    }

    public delete(id: TKey): boolean {
        console.log("Base Service Delete");

        return this.repository.delete(id);
    }
}