import { IsDefined, IsOptional, IsString, IsUUID, Matches, MaxLength } from "class-validator";

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
    @MaxLength(10)
    @IsOptional()
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
