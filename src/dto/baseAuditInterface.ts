import baseDTOInterface from "./baseDTOInterface";

export default interface baseAuditInterface<TKey> extends baseDTOInterface<TKey> {
    CreatedBy:string;
    CreatedOn:Date;
    LastModifiedBy:string;
    LastModifiedOn:Date;
    IsDeleted:boolean;
}