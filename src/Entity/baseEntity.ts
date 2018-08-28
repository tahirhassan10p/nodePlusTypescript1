import baseAuditInterface from "../dto/baseAuditInterface";
import {Table, PrimaryKey, Column, CreatedAt, UpdatedAt, DeletedAt, Model} from 'sequelize-typescript';

@Table
export default class baseEntity<TKey>
    extends Model<baseEntity<TKey>>
    implements baseAuditInterface<TKey> {

    @PrimaryKey
    Id: TKey;

    @Column
    CreatedBy: string;

    @CreatedAt
    CreatedOn: Date;

    @Column
    LastModifiedBy: string;

    @UpdatedAt
    LastModifiedOn: Date;

    @Column
    IsDeleted: boolean;

    @DeletedAt
    DeletedOn: Date;
}