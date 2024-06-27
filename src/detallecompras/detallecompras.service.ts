import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetallecompraDto } from './dto/create-detallecompra.dto';
import { UpdateDetallecompraDto } from './dto/update-detallecompra.dto';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Detallecompra } from './entities/detallecompra.entity';
import { Repository } from 'typeorm';

@ApiTags('detallecompras')
@Injectable()
export class DetallecomprasService {
  constructor(@InjectRepository(Detallecompra) private detallecomprasRepository: Repository<Detallecompra>) {}

  async create(createDetallecompraDto: CreateDetallecompraDto): Promise<Detallecompra> {
    const existe = await this.detallecomprasRepository.findOneBy({

      
    });

    if (existe) {
      throw new ConflictException('El Detallecompra ya existe');
    }

    return this.detallecomprasRepository.save({
      cantidad: createDetallecompraDto.cantidad,
      subtotal: createDetallecompraDto.subtotal,
      
    });
  }

  async findAll(): Promise<Detallecompra[]> {
    return this.detallecomprasRepository.find();
  }

  async findOne(id: number): Promise<Detallecompra> {
    const detallecompra = await this.detallecomprasRepository.findOneBy({ id });
    if (!detallecompra) {
      throw new NotFoundException(`El detallecompra ${id} no existe`);
    }
    return detallecompra;
  }

  async update(id: number, updateDetallecompraDto: UpdateDetallecompraDto): Promise<Detallecompra> {
    const detallecompra = await this.findOne(id);
    const detallecompraUpdate = Object.assign(detallecompra, updateDetallecompraDto);
    return this.detallecomprasRepository.save(detallecompraUpdate);
  }

  async remove(id: number) {
    const detallecompra = await this.findOne(id);
    return this.detallecomprasRepository.delete(detallecompra.id);
  }
}
