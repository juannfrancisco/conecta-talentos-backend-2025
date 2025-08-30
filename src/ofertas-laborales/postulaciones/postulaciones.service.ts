import { Injectable, NotFoundException } from '@nestjs/common';
import { Postulacion } from './entities/postulacion.entity';
import { CrearPostulacionDTO } from './dto/crear-postulacion.dto';
import { OfertasLaboralesService } from '../ofertas-laborales.service';
import { EstudiantesService } from 'src/estudiantes/estudiantes.service';

@Injectable()
export class PostulacionesService {
  private postulaciones: Postulacion[] = [];

  constructor(
    private ofertaslaboralesService: OfertasLaboralesService,
    private estudianteService: EstudiantesService,
  ) {}

  create(ofertaLaboralId: number, dto: CrearPostulacionDTO) {
    const ofertaLaboral = this.ofertaslaboralesService.findOne(ofertaLaboralId);
    const estudiante = this.estudianteService.findOne(dto.estudianteId);
    const postulacion = new Postulacion();
    postulacion.id = this.postulaciones.length;
    postulacion.estudiante = estudiante;
    postulacion.fechaPostulacion = new Date();
    postulacion.estado = 'Pendiente';
    ofertaLaboral.postulaciones.push(postulacion);
    this.postulaciones.push(postulacion);
    return postulacion;
  }

  findAll(ofertaLaboralId: number) {
    const ofertaLaboral = this.ofertaslaboralesService.findOne(ofertaLaboralId);
    return ofertaLaboral.postulaciones;
  }

  findOne(ofertaId: number, id: number) {
    const ofertaLaboral = this.ofertaslaboralesService.findOne(ofertaId);
    const resultado = ofertaLaboral.postulaciones.find(
      (postulacion: Postulacion) => postulacion.id === id,
    );
    if (!resultado) {
      throw new NotFoundException('Postulación no encontrada');
    }
    return resultado;
  }

  update(ofertaId: number, id: number, dto: any) {
    const postulacion = this.findOne(ofertaId, id);
    Object.assign(postulacion, dto);
    return `This action updates a #${id} ofertasLaborale`;
  }

  remove(ofertaId: number, id: number) {
    const ofertaLaboral = this.ofertaslaboralesService.findOne(ofertaId);
    ofertaLaboral.postulaciones = ofertaLaboral.postulaciones.filter(
      (postulacion) => postulacion.id !== id,
    );
    this.postulaciones = this.postulaciones.filter(
      (postulacion) => postulacion.id !== id,
    );
  }
}
