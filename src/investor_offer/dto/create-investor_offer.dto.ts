import { IsDefined, IsIn, IsOptional, IsString, IsUUID, Matches, MaxLength } from "class-validator";

export class CreateInvestorOfferDto {

    @IsDefined()
    @IsUUID()
    @IsDefined()
    idBusinesssOffer: string;

    @IsUUID()
    @IsDefined()
    idInvestorUser: string;

    @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/, {
        message: 'The meet date must be in YYYY-MM-DD HH:MM format.',
      }) 
    @IsDefined()
    meetDate: string;

    @IsString()
    @MaxLength(150)
    @IsOptional()
    videoConferenceLink: string;

    @IsString()
    @IsIn(["Active", "Inactive", "Closed"], { message: "The State parameter can only be: Active - Inactive - Closed"})
    state: string;

    @IsString()
    @MaxLength(150)
    @IsOptional()
    reply: string;

    @Matches(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'The end date must be in YYYYY-MM-DD format.',
    })
    @IsOptional()
    endDate: string;

}
