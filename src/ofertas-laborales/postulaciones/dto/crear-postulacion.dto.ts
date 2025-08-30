import { ApiProperty } from '@nestjs/swagger';

export class CrearPostulacionDTO {
  @ApiProperty({ description: 'ID del estudiante que postula', default: 1 })
  estudianteId: number;

  @ApiProperty({
    description: 'Estado de la postulación',
    default: 'Pendiente',
  })
  estado: string;
}
