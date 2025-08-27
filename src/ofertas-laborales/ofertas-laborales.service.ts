import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOfertaLaboralDto } from './dto/create-oferta-laboral.dto';
import { UpdateOfertasLaboraleDto } from './dto/update-oferta-laboral.dto';
import { OfertaLaboral } from './entities/oferta-laboral.entity';
import { EmpresasService } from 'src/empresas/empresas.service';

@Injectable()
export class OfertasLaboralesService {
  private ofertas: OfertaLaboral[] = [];

  constructor(private empresasService: EmpresasService) {}

  create(dto: CreateOfertaLaboralDto) {
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
    this.ofertas.push(oferta);
    return oferta;
  }

  findAll() {
    return this.ofertas;
  }

  findOne(id: number) {
    const oferta = this.ofertas.find((oferta) => oferta.id === id);
    if (!oferta) throw new NotFoundException('No se encontro la oferta');
    return oferta;
  }

  update(id: number, dto: UpdateOfertasLaboraleDto) {
    return `This action updates a #${id} ofertasLaborale`;
  }

  remove(id: number) {
    return `This action removes a #${id} ofertasLaborale`;
  }
}
