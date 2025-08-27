import { ApiProperty } from '@nestjs/swagger';

export class CreateOfertaLaboralDto {
  @ApiProperty({ default: '' })
  descripcion: string;

  @ApiProperty({ default: '' })
  cargo: string;

  @ApiProperty({ default: '' })
  region: string;

  @ApiProperty({ default: '' })
  tipo: string;

  @ApiProperty({ default: '' })
  empresaId: number;

}
