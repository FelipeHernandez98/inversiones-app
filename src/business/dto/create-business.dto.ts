import { IsDefined, IsEmail, IsIn, IsNumber, IsOptional, IsPositive, IsString, IsUUID, Matches, Max, MaxLength, MinLength } from "class-validator";

export class CreateBusinessDto {

    @IsString()
    @MaxLength(15)
    @MinLength(5)
    @IsOptional()
    nit: string;

    @IsString()
    @MaxLength(15)
    @IsDefined()
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
    @MinLength(30)
    @IsDefined()
    description: string;
    
    @IsString()
    @IsIn(["Idea", "Created"], { message: "The Type parameter can only be: Idea - Created"})
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
    @IsIn(["Active", "Inactive"], { message: "The State parameter can only be: Active - Inactive"})
    state: string;

}
