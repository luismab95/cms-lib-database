import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  BeforeInsert,
} from "typeorm";
import { randomCharacters } from "../../shared/helpers/random.helper";

@Entity({ name: "action", schema: "security" })
export class Action {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column({
    name: "code",
    type: "varchar",
    unique: true,
    length: 8,
    nullable: false,
  })
  code!: string;

  @BeforeInsert()
  randonCode() {
    this.code = randomCharacters("COMBINED", 8).toUpperCase();
  }

  @Column({
    name: "description",
    type: "varchar",
    length: 255,
    nullable: false,
  })
  description!: string;

  @Column({
    name: "name",
    type: "varchar",
    length: 100,
    nullable: false,
  })
  name!: string;

  @Column({
    name: "status",
    type: "boolean",
    nullable: false,
    default: true,
  })
  status!: boolean;
}
