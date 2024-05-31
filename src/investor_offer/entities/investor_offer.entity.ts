import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("investor_offer_pk", ["id"], { unique: true })
@Entity("investor_offer", { schema: "inverschema" })
export class InvestorOffer {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column("timestamp without time zone", { name: "meet_date" })
  meetDate: Date;

  @Column("character varying", { name: "video_conference_link", length: 150 })
  videoConferenceLink: string;

  @Column("character varying", { name: "state", length: 10 })
  state: string;

  @Column("character varying", { name: "reply", nullable: true, length: 150 })
  reply: string | null;

  @Column("timestamp without time zone", { name: "registration_date" })
  registrationDate: Date;

  @Column("timestamp without time zone", { name: "end_date", nullable: true })
  endDate: Date | null;

  @Column("uuid", { name: "id_business_offer" })
  idBusinesssOffer: string;

  @Column("uuid", { name: "id_investor_user" })
  idInvestorUser: string;
}
