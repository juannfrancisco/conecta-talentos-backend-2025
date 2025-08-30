import { ApiProperty } from '@nestjs/swagger';

export class UpdateOfertasLaboraleDto {
  @ApiProperty({ default: '' })
  estado: string;
}
