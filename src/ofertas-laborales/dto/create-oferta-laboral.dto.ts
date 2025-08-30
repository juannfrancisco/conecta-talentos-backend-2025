import { ApiProperty } from '@nestjs/swagger';

export class CreateOfertaLaboralDto {
  @ApiProperty({ default: 'Descripción de la oferta laboral' })
  descripcion: string;

  @ApiProperty({ default: 'Desarrollador Backend' })
  cargo: string;

  @ApiProperty({ default: 'Metropolitana' })
  region: string;

  @ApiProperty({ default: 'Remoto' })
  tipo: string;

  @ApiProperty({ default: 1 })
  empresaId: number;

}
