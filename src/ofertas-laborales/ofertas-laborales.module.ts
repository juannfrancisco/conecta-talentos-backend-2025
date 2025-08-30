import { Module } from '@nestjs/common';
import { OfertasLaboralesService } from './ofertas-laborales.service';
import { OfertasLaboralesController } from './ofertas-laborales.controller';
import { EmpresasModule } from 'src/empresas/empresas.module';
import { PostulacionesController } from './postulaciones/postulaciones.controller';
import { PostulacionesService } from './postulaciones/postulaciones.service';
import { EstudiantesModule } from 'src/estudiantes/estudiantes.module';

@Module({
  controllers: [OfertasLaboralesController, PostulacionesController],
  providers: [OfertasLaboralesService, PostulacionesService],
  imports: [EmpresasModule, EstudiantesModule],
})
export class OfertasLaboralesModule {}
