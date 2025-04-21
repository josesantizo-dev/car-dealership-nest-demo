import { IsOptional, IsString } from 'class-validator';

export class PartialUpdateCarDto {
  @IsString()
  @IsOptional()
  readonly brand?: string;
  @IsString()
  @IsOptional()
  readonly model?: string;
}
