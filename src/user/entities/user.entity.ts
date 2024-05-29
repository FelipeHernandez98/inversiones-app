import {
    Column,
    Entity,
    Index
  } from "typeorm";
  
  @Index("email_unique", ["email"], { unique: true })
  @Index("user_pk", ["id"], { unique: true })
  @Entity("user", { schema: "inverschema" })
  export class User {
    @Column("uuid", { primary: true, name: "id" })
    id: string;
  
    @Column("character varying", { name: "name", length: 30 })
    name: string;
  
    @Column("character varying", { name: "lastname", length: 30 })
    lastname: string;
  
    @Column("character varying", { name: "email", unique: true, length: 40 })
    email: string;
  
    @Column("character varying", { name: "country", length: 20 })
    country: string;
  
    @Column("character varying", { name: "city", length: 20 })
    city: string;
  
    @Column("character varying", { name: "password", length: 100 })
    password: string;
  
    @Column("timestamp without time zone", { name: "registration_date" })
    registrationDate: Date;
  
    @Column("character varying", { name: "state", length: 10 })
    state: string;
  
    @Column("character varying", { name: "linkedin_user", nullable: true })
    linkedinUser: string | null;
  
    @Column("character varying", { name: "identification_number", length: 15 })
    identificationNumber: string;
  
    @Column("boolean", { name: "is_valid" })
    isValid: boolean;
  
    @Column("smallint", { name: "id_role" })
    idRole: number;
  }
  
