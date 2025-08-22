import { ApiProperty } from '@nestjs/swagger';

export class UpdateEstudianteDto {
  @ApiProperty({ default: 'Juan' })
  public nombre: string;

  @ApiProperty({ default: 'Maldonado' })
  public apellidos: string;

  @ApiProperty({ default: 36 })
  public edad: number;

  @ApiProperty({ default: 'Ing. Informatico' })
  public profesion: string;
}
