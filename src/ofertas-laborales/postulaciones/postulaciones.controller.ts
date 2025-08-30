import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CrearPostulacionDTO } from './dto/crear-postulacion.dto';
import { PostulacionesService } from './postulaciones.service';

@Controller('ofertas/:ofertaId/postulaciones')
export class PostulacionesController {
  constructor(private service: PostulacionesService) {}

  @Post()
  create(
    @Param('ofertaId') ofertaId: string,
    @Body() dto: CrearPostulacionDTO,
  ) {
    return this.service.create(+ofertaId, dto);
  }

  @Get()
  findAll(@Param('ofertaId') ofertaId: string) {
    return this.service.findAll(+ofertaId);
  }

  @Get(':id')
  findOne(@Param('ofertaId') ofertaId: string, @Param('id') id: string) {
    return this.service.findOne(+ofertaId, +id);
  }

  @Patch(':id')
  update(
    @Param('ofertaId') ofertaId: string,
    @Param('id') id: string,
    @Body() dto: any,
  ) {
    return this.service.update(+ofertaId, +id, dto);
  }

  @Delete(':id')
  remove(@Param('ofertaId') ofertaId: string, @Param('id') id: string) {
    return this.service.remove(+ofertaId, +id);
  }
}
