import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { ApiTags } from '@nestjs/swagger';
import { Venta } from './entities/venta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@ApiTags('ventas')
@Injectable()
export class VentasService {
  constructor(@InjectRepository(Venta) private ventasRepository: Repository<Venta>) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const existe = await this.ventasRepository.findOneBy({
      clientes: { id: createVentaDto.idCliente},
    });

    if (existe) {
      throw new ConflictException('La venta ya existe');
    }
    //id, fecha_venta, hora_venta, total_venta, id_usuario, id_cliente, id_detalle_venta
    return this.ventasRepository.save({
      totalVenta: createVentaDto.totalVenta,
      usuarios: { id: createVentaDto.idUsuario },
      clientes: { id: createVentaDto.idCliente },
    });
  }

  async findAll(): Promise<Venta[]> {
    return this.ventasRepository.find({ relations: ['usuarios', 'clientes'] });
  }

  async findOne(id: number): Promise<Venta> {
    const venta = await this.ventasRepository.findOne({
      where: { id },
      relations: ['usuarios', 'clientes'],
    });
    if (!venta) {
      throw new NotFoundException(`La venta ${id} no existe`);
    }
    return venta;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.findOne(id);
    const ventaUpdate = Object.assign(venta, updateVentaDto);
    ventaUpdate.usuarios = { id: updateVentaDto.idUsuario } as Usuario;
    ventaUpdate.clientes = { id: updateVentaDto.idCliente } as Cliente;
    return this.ventasRepository.save(ventaUpdate);
  }

  async remove(id: number) {
    const venta = await this.findOne(id);
    return this.ventasRepository.delete(venta.id);
  }
}
