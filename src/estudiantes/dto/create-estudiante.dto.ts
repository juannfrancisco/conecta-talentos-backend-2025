import { ApiProperty } from '@nestjs/swagger';

export class CreateEstudianteDto {

  @ApiProperty({ default: 'Gabriel' })
  public nombre: string;

  @ApiProperty({ default: 'Jones' })
  public apellidos: string;

  @ApiProperty({ default: 36 })
  public edad: number;

  @ApiProperty({ default: 'juan@mail.com' })
  public email: string;

  @ApiProperty({ default: 'Ing. Informatico' })
  public profesion: string;

  fechaNacimiento: Date;
}
