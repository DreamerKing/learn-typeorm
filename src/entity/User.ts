import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Tweet } from "./Tweet";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar", length: 20 })
  firstName: string;

  @Column({ type: "varchar", length: 20 })
  lastName: string;

  @Column()
  age: number;

  @Column({ type: "tinyint", default: 0 })
  role: number;

  @OneToMany(() => Tweet, (tweet) => tweet.user)
  tweets: Promise<Tweet[]>;
}
