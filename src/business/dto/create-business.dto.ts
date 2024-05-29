import { IsDefined, IsEmail, IsIn, IsNumber, IsOptional, IsPositive, IsString, IsUUID, Matches, Max, MaxLength } from "class-validator";

export class CreateBusinessDto {

    @IsString()
    @MaxLength(15)
    @IsOptional()
    nit: string;

    @IsString()
    @MaxLength(15)
    @IsOptional()
    country: string;
    
    @IsNumber()
    @IsPositive()
    @Max(100)
    idCategory: number;
    
    @IsString()
    @MaxLength(15)
    @IsDefined()
    name: string;

    @IsString()
    @MaxLength(250)
    @IsDefined()
    description: string;
    
    @IsString()
    @MaxLength(15)
    @IsDefined()
    @IsIn(["Idea", "Creada"])
    type: string;
    
    @IsUUID()
    @IsDefined()
    idRepresentative: string;

    @IsString()
    @MaxLength(150)
    @IsOptional()
    websiteLink: string;

    @IsString()
    @MaxLength(10)
    @IsOptional()
    phoneNumber: string;

    @Matches(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'The date must be in YYYYY-MM-DD format.',
    })
    @IsOptional()
    foundationDate: string;

    @IsString()
    @MaxLength(150)
    @IsOptional()
    corporativeVideoLink: string;
 
    @IsEmail()
    @MaxLength(30)
    @IsOptional()
    email: string;

    @IsString()
    @MaxLength(20)
    @IsOptional()
    instagramUser: string;
 
    @IsString()
    @MaxLength(80)
    @IsOptional()
    facebookLink: string;

    @IsString()
    @MaxLength(30)
    @IsOptional()
    linkedinUser: string;
  
    @IsString()
    @MaxLength(10)
    @IsOptional()
    state: string;


}
