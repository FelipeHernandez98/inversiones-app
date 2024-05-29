import { IsDefined, IsString, MaxLength } from "class-validator";

export class CreateCategoryDto {

    @IsString()
    @MaxLength(20)
    @IsDefined()
    name: string;

    @IsString()
    @MaxLength(100)
    @IsDefined()
    description: string;
}
