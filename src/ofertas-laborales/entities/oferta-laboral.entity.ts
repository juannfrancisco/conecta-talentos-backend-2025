import { Empresa } from 'src/empresas/entities/empresa.entity';
import { Postulacion } from '../postulaciones/entities/postulacion.entity';

export class OfertaLaboral {
  id: number;
  fechaCreacion: Date;
  descripcion: string;
  cargo: string;
  region: string;
  tipo: string;
  estado: string;
  empresa: Empresa;
  postulaciones: Postulacion[];
}
