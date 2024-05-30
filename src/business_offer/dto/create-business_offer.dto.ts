import { IsDefined, IsNumber, IsOptional, IsPositive, IsString, IsUUID, Matches, Max, MaxLength } from "class-validator";

export class CreateBusinessOfferDto {
    
    @IsUUID()
    @IsDefined()
    idBusiness: string;

    @IsString()
    @MaxLength(10)
    @IsOptional()
    description: string;

    @IsString()
    @MaxLength(10)
    @IsOptional()
    offer: string;

    @IsString()
    @MaxLength(10)
    @IsOptional()
    value: string;

    @IsString()
    @MaxLength(10)
    @IsDefined()
    offerVideoLink: string;

    @IsString()
    @MaxLength(10)
    @IsOptional()
    state: string;

    @Matches(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'The date must be in YYYYY-MM-DD format.',
    })
    @IsOptional()
    endDate: string;

}
