import {
    Column,
    Entity,
    Index,
    PrimaryGeneratedColumn
  } from "typeorm";
  
  @Index("_email_unique", ["email"], { unique: true })
  @Index("business_pk", ["id"], { unique: true })
  @Entity("business", { schema: "inverschema" })
  export class Business {

    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column("character varying", { name: "nit", nullable: true, length: 15 })
    nit: string | null;
  
    @Column("character varying", { name: "country", length: 15 })
    country: string;
  
    @Column("character varying", { name: "name", length: 30 })
    name: string;
  
    @Column("character varying", { name: "description", length: 250 })
    description: string;
  
    @Column("character varying", { name: "type", length: 12 })
    type: string;
  
    @Column("character varying", {
      name: "website_link",
      nullable: true,
      length: 150,
    })
    websiteLink: string | null;
  
    @Column("character varying", {
      name: "phone_number",
      nullable: true,
      length: 12,
    })
    phoneNumber: string | null;
  
    @Column("timestamp without time zone", {
      name: "foundation_date",
      nullable: true,
    })
    foundationDate: Date | null;
  
    @Column("character varying", {
      name: "corporative_video_link",
      nullable: true,
      length: 150,
    })
    corporativeVideoLink: string | null;
  
    @Column("character varying", {
      name: "email",
      nullable: true,
      unique: true,
      length: 30,
    })
    email: string | null;
  
    @Column("character varying", {
      name: "instagram_user",
      nullable: true,
      length: 20,
    })
    instagramUser: string | null;
  
    @Column("character varying", {
      name: "facebook_link",
      nullable: true,
      length: 80,
    })
    facebookLink: string | null;
  
    @Column("character varying", {
      name: "linkedin_user",
      nullable: true,
      length: 30,
    })
    linkedinUser: string | null;
  
    @Column("timestamp without time zone", { name: "registration_date" })
    registrationDate: Date;
  
    @Column("character varying", { name: "state", length: 10 })
    state: string;
  
    @Column("uuid", { name: "id_representative" })
    idRepresentative: string;
  
    @Column("smallint", { name: "id_category" })
    idCategory: number;
  
  }
  