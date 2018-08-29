import {Entity, Column} from "typeorm";
import baseEntity from './baseEntity'
@Entity()
export default class mathEntity extends baseEntity<number> {

  @Column({
      length: 100
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column("double")
  views: number;

  @Column()
  isPublished: boolean;
}