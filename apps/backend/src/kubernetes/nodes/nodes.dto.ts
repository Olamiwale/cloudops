import { IsBoolean, IsOptional } from 'class-validator';

export class DrainNodeDto {
  @IsOptional()
  @IsBoolean()
  ignoreDaemonSets?: boolean;

  @IsOptional()
  @IsBoolean()
  deleteEmptyDirData?: boolean;

  @IsOptional()
  @IsBoolean()
  force?: boolean;
}
