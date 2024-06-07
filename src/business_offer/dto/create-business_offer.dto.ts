import { IsDefined, IsIn, IsNumber, IsOptional, IsPositive, IsString, IsUUID, Matches, Max, MaxLength } from "class-validator";

export class CreateBusinessOfferDto {
    
    @IsUUID()
    @IsDefined()
    idBusiness: string;

    @IsString()
    @MaxLength(250)
    @IsOptional()
    description: string;

    @IsString()
    @MaxLength(100)
    @IsOptional()
    offer: string;

    @IsString()
    @MaxLength(50)
    @IsOptional()
    value: string;

    @IsString()
    @MaxLength(100)
    @IsDefined()
    offerVideoLink: string;

    @IsString()
    @IsIn(["Active", "Inactive", "Closed"], { message: "The State parameter can only be: Active - Inactive - Closed"})
    state: string;

    @Matches(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'The date must be in YYYYY-MM-DD format.',
    })
    @IsOptional()
    endDate: string;

}
