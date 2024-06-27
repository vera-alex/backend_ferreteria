import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedor } from './entities/proveedor.entity';
import { Repository } from 'typeorm';

@ApiTags('proveedores')
@Injectable()
export class ProveedoresService {
  constructor(@InjectRepository(Proveedor) private proveedorRepository: Repository<Proveedor>) {}

  async create(createProveedorDto: CreateProveedorDto): Promise<Proveedor> {
    const existe = await this.proveedorRepository.findOneBy({
      nit: createProveedorDto.nit.trim(),
      razonSocial: createProveedorDto.razonSocial.trim(),
    });

    if (existe) {
      throw new ConflictException('El proveedor ya existe');
    }

    return this.proveedorRepository.save({
      nit: createProveedorDto.nit.trim(),
      razonSocial: createProveedorDto.razonSocial.trim(),
      direccion: createProveedorDto.direccion.trim(),
      telefono: createProveedorDto.telefono.trim(),
      email: createProveedorDto.email.trim(),
    });
  }

  async findAll(): Promise<Proveedor[]> {
    return this.proveedorRepository.find();
  }

  async findOne(id: number): Promise<Proveedor> {
    const proveedor = await this.proveedorRepository.findOneBy({ id });
    if (!proveedor) {
      throw new NotFoundException(`El proveedor ${id} no existe`);
    }
    return proveedor;
  }

  async update(id: number, updateProveedorDto: UpdateProveedorDto): Promise<Proveedor> {
    const proveedor = await this.findOne(id);
    const proveedorUpdate = Object.assign(proveedor, updateProveedorDto);
    return this.proveedorRepository.save(proveedorUpdate);
  }

  async remove(id: number) {
    const proveedor = await this.findOne(id);
    return this.proveedorRepository.delete(proveedor.id);
  }
}
