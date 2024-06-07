import { IsDefined, IsEmail, IsNumber, IsOptional, IsPositive, IsString, Matches, Max, MaxLength, Min, MinLength } from "class-validator";

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
    @IsDefined()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @MaxLength(20, { message: 'Password must be at most 20 characters long' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { 
    message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' 
    })
    password: string;

    @IsString()
    @MaxLength(10)
    @IsOptional()
    state: string;

    @IsString()
    @MaxLength(30)
    @MinLength(3)
    @IsOptional()
    linkedinUser: string;

    @IsString()
    @MaxLength(15)
    @IsDefined()
    identificationNumber: string;
  
    @IsNumber()
    @IsPositive()
    @Max(4)
    idRole: number;

    @IsString()
    @MaxLength(15)
    @IsOptional()
    phoneNumber: string;
}
