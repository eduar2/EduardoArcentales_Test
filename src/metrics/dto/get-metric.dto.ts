import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class GETMetricDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  repositoryId?: number;
}
