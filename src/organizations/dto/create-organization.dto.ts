import { IsInt, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsInt()
  @IsPositive()
  status: number;
}
