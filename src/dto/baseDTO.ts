import baseAuditInterface from "./baseAuditInterface";
import baseEntity from "../entity/baseEntity";

export default abstract class baseDTO<TKey, TEntity extends baseEntity<TKey>> implements baseAuditInterface<TKey>{
    Id:TKey;
    CreatedBy:string;
    CreatedOn:Date;
    LastModifiedBy:string;
    LastModifiedOn:Date;
    IsDeleted:boolean;

    constructor(){
    }

    public convertToEntity(entity:TEntity):TEntity{

        entity.Id = this.Id;
        entity.CreatedBy = this.CreatedBy;
        entity.CreatedOn = this.CreatedOn;
        entity.LastModifiedBy = this.LastModifiedBy;
        entity.LastModifiedOn = this.LastModifiedOn;
        entity.IsDeleted = this.IsDeleted;

        return entity;
    }

    public convertFromEntity(entity:TEntity):void{
        this.Id = entity.Id;
        this.CreatedBy = entity.CreatedBy;
        this.CreatedOn = entity.CreatedOn;
        this.LastModifiedBy = entity.LastModifiedBy;
        this.LastModifiedOn = entity.LastModifiedOn;
        this.IsDeleted = entity.IsDeleted;
    }
}