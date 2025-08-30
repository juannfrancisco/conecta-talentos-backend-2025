import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  private empresas: Empresa[] = [];

  constructor() {
    this.inicializar();
  }

  inicializar() {
    const empresa1 = new Empresa();
    empresa1.id = 1;
    empresa1.nombre = 'Globant';
    empresa1.sitioWeb = 'https://globant.com';
    empresa1.tipo = 'Tecnologia';
    this.empresas.push(empresa1);
  }

  create(createEmpresaDto: CreateEmpresaDto): Empresa {
    const buscarEmpresa = this.findByName(createEmpresaDto.nombre);
    if (buscarEmpresa)
      throw new BadRequestException(
        'Ya existe una empresa con el mismo nombre',
      );
    const empresa = new Empresa();
    empresa.id = this.empresas.length;
    empresa.nombre = createEmpresaDto.nombre;
    empresa.sitioWeb = createEmpresaDto.sitioWeb;
    empresa.tipo = createEmpresaDto.tipo;
    this.empresas.push(empresa);
    return empresa;
  }

  findAll() {
    return this.empresas;
  }

  findByName(name: string): Empresa | undefined {
    return this.empresas.find(
      (empresa) => empresa.nombre.toLowerCase() === name.toLowerCase(),
    );
  }

  findOne(id: number) {
    const empresa = this.empresas.find((empresa) => empresa.id === id);
    if (!empresa) throw new NotFoundException('Empresa no encontrada');
    return empresa;
  }

  remove(id: number): void {
    //this.empresas = this.empresas.filter((empresa) => empresa.id != id);

    for (let i = 0; i < this.empresas.length; i++) {
      if (this.empresas[i].id === id) {
        this.empresas.splice(i, 1);
      }
    }

    //this.empresas.forEach((empresa: Empresa, index: number) => {
    //  if (empresa.id === id) {
    //    this.empresas.splice(index, 1);
    //  }
    //});
  }
}
