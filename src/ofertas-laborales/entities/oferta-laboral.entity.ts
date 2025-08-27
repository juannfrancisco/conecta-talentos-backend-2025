import { Empresa } from 'src/empresas/entities/empresa.entity';

export class OfertaLaboral {
  id: number;
  fechaCreacion: Date;
  descripcion: string;
  cargo: string;
  region: string;
  tipo: string;
  estado: string;
  empresa: Empresa;
  postulaciones: string[];
}
