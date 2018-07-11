import baseAuditInterface from "../dto/baseAuditInterface";

export default class baseEntity<TKey> implements baseAuditInterface<TKey> {
    Id:TKey;
    CreatedBy:string;
    CreatedOn:Date;
    LastModifiedBy:string;
    LastModifiedOn:Date;
    IsDeleted:boolean;
}