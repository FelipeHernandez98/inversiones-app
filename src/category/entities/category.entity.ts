import {
    Column,
    Entity,
    Index,
    PrimaryGeneratedColumn
  } from "typeorm";

@Entity("category", { schema: "inverschema" })
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("character varying", { name: "name", nullable: true, length: 20 })
    name: string;

    @Column("character varying", { name: "description", nullable: true, length: 100 })
    description: string;

}
