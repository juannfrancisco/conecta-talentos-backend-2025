import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudiantesService {
  private estudiantes: Estudiante[] = [];

  create(createEstudianteDto: CreateEstudianteDto): Estudiante {
    const resultado = this.estudiantes.find(
      (estudiante) => estudiante.email === createEstudianteDto.email,
    );
    if (resultado) {
      throw new BadRequestException(
        `Ya existe un estudiante con el correo ${createEstudianteDto.email}`,
      );
    }
    const estudiante = new Estudiante();
    estudiante.id = this.estudiantes.length + 1;
    estudiante.nombre = createEstudianteDto.nombre;
    estudiante.profesion = createEstudianteDto.profesion;
    estudiante.edad = createEstudianteDto.edad;
    estudiante.email = createEstudianteDto.email;
    this.estudiantes.push(estudiante);
    return estudiante;
  }

  findAll(): Estudiante[] {
    return this.estudiantes;
  }

  findOne(id: number): Estudiante {
    const resultado = this.estudiantes.find(
      (estudiante) => estudiante.id === id,
    );
    if (!resultado)
      throw new NotFoundException(`Estudiante no encontrado con el id ${id}`);

    return resultado;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto): Estudiante {
    const estudiante = this.findOne(id);
    estudiante.nombre = updateEstudianteDto.nombre;
    estudiante.apellidos = updateEstudianteDto.apellidos;
    estudiante.edad = updateEstudianteDto.edad;
    estudiante.profesion = updateEstudianteDto.profesion;
    return estudiante;
  }

  remove(id: number): void {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id === id) {
        this.estudiantes.splice(i, 1);
      }
    }
  }
}
