import { ApiProperty } from '@nestjs/swagger';

export class CreateEstudianteDto {
  @ApiProperty({ default: 'Juan Francisco' })
  public nombre: string;

  @ApiProperty({ default: 'Maldonado León' })
  public apellidos: string;

  @ApiProperty({ default: 36 })
  public edad: number;

  @ApiProperty({ default: 'juan@mail.com' })
  public email: string;

  @ApiProperty({ default: 'Ing. Informatico' })
  public profesion: string;

  @ApiProperty({ default: '1990-01-01' })
  public fechaNacimiento: string;
}
