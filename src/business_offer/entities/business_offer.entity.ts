import {
    Column,
    Entity,
    Index,
    PrimaryGeneratedColumn
  } from "typeorm";
  
  @Index("bussines_offer_pk", ["id"], { unique: true })
  @Entity("business_offer", { schema: "inverschema" })
  export class BusinessOffer {

    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column("character varying", {
      name: "description",
      nullable: true,
      length: 250,
    })
    description: string | null;
  
    @Column("character varying", { name: "offer", nullable: true, length: 100 })
    offer: string | null;
  
    @Column("character varying", { name: "value", nullable: true, length: 50 })
    value: string | null;
  
    @Column("character varying", { name: "offer_video_link", length: 100 })
    offerVideoLink: string;
  
    @Column("timestamp without time zone", { name: "registration_date" })
    registrationDate: Date;
  
    @Column("character varying", { name: "state", length: 10 })
    state: string;
  
    @Column("timestamp without time zone", { name: "end_date", nullable: true })
    endDate: Date | null;
  
    @Column("uuid", { name: "id_business" })
    idBusiness: string;
  
  }