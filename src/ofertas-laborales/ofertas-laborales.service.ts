import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOfertaLaboralDto } from './dto/create-oferta-laboral.dto';
import { UpdateOfertasLaboraleDto } from './dto/update-oferta-laboral.dto';
import { OfertaLaboral } from './entities/oferta-laboral.entity';
import { EmpresasService } from 'src/empresas/empresas.service';

@Injectable()
export class OfertasLaboralesService {
  private ofertas: OfertaLaboral[] = [];

  constructor(private empresasService: EmpresasService) {}

  create(dto: CreateOfertaLaboralDto): OfertaLaboral {
    const empresa = this.empresasService.findOne(dto.empresaId);

    const oferta = new OfertaLaboral();
    oferta.id = this.ofertas.length;
    oferta.descripcion = dto.descripcion;
    oferta.cargo = dto.cargo;
    oferta.tipo = dto.tipo;
    oferta.region = dto.region;
    oferta.fechaCreacion = new Date();
    oferta.estado = 'abierta';
    oferta.empresa = empresa;
    oferta.postulaciones = [];
    this.ofertas.push(oferta);
    return oferta;
  }

  findAll(): OfertaLaboral[] {
    return this.ofertas;
  }

  findOne(id: number): OfertaLaboral {
    const oferta = this.ofertas.find((oferta) => oferta.id === id);
    if (!oferta) throw new NotFoundException('No se encontro la oferta');
    return oferta;
  }

  update(id: number, dto: UpdateOfertasLaboraleDto): OfertaLaboral {
    const oferta = this.findOne(id);
    oferta.estado = dto.estado;
    return oferta;
  }

  remove(id: number): void {
    this.ofertas = this.ofertas.filter((oferta) => oferta.id !== id);
  }
}
