import { ApiProperty } from '@nestjs/swagger';

export class CreateEstudianteDto {
  @ApiProperty({ default: 'Juan' })
  public nombre: string;

  @ApiProperty({ default: 'Maldonado' })
  public apellidos: string;

  @ApiProperty({ default: 36 })
  public edad: number;

  @ApiProperty({ default: 'juan@mail.com' })
  public email: string;

  @ApiProperty({ default: 'Ing. Informatico' })
  public profesion: string;

  fechaNacimiento: Date;
}
