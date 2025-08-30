import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';

export class Postulacion {
  id: number;
  fechaPostulacion: Date;
  estudiante: Estudiante;
  estado: string;
}
