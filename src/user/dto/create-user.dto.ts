import { IsDefined, IsEmail, IsNumber, IsOptional, IsPositive, IsString, Max, MaxLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MaxLength(30)
    @IsDefined()
    name: string;

    @IsString()
    @MaxLength(30)
    @IsDefined()
    lastname: string;

    @IsEmail()
    @IsDefined()
    email: string;

    @IsString()
    @MaxLength(15)
    @IsDefined()
    country: string;

    @IsString()
    @MaxLength(15)
    @IsDefined()
    city: string;

    @IsString()
    @MaxLength(20)
    @IsDefined()
    password: string;

    @IsString()
    @MaxLength(10)
    @IsOptional()
    state: string;

    @IsString()
    @MaxLength(30)
    @IsOptional()
    linkedinUser: string;

    @IsString()
    @MaxLength(10)
    @IsDefined()
    identificationNumber: string;
  
    @IsNumber()
    @IsPositive()
    @Max(5)
    idRole: number;

    @IsString()
    @MaxLength(15)
    @IsOptional()
    phoneNumber: string;
}
