import baseAuditInterface from "../dto/baseAuditInterface";
import { PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm';

export default class baseEntity<TKey>
    extends BaseEntity
    implements baseAuditInterface<TKey> {

    @PrimaryColumn()
    Id: TKey;

    @Column()
    CreatedBy: string;

    @CreateDateColumn()
    CreatedOn: Date;

    @Column()
    LastModifiedBy: string;

    @UpdateDateColumn()
    LastModifiedOn: Date;

    @Column()
    IsDeleted: boolean;

    @Column()
    DeletedOn: Date;
}