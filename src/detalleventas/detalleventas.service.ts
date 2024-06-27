import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetalleventaDto } from './dto/create-detalleventa.dto';
import { UpdateDetalleventaDto } from './dto/update-detalleventa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Detalleventa } from './entities/detalleventa.entity';
import { Repository } from 'typeorm';
import { Venta } from 'src/ventas/entities/venta.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Injectable()
export class DetalleventasService {
  constructor(@InjectRepository(Detalleventa) private ventasRepository: Repository<Detalleventa>) {}

  async create(createDetalleventaDto: CreateDetalleventaDto): Promise<Detalleventa> {
    const existe = await this.ventasRepository.findOneBy({
      ventas: { id: createDetalleventaDto.idVenta },
    });

    if (existe) {
      throw new ConflictException('La venta ya existe');
    }
    return this.ventasRepository.save({
      precio: createDetalleventaDto.precio,
      cantidad: createDetalleventaDto.cantidad,
      subtotal: createDetalleventaDto.subtotal,
      ventas: { id: createDetalleventaDto.idVenta },
      productos: { id: createDetalleventaDto.idProducto },
    });
  }

  async findAll(): Promise<Detalleventa[]> {
    return this.ventasRepository.find({ relations: ['ventas', 'productos'] });
  }

  async findOne(id: number): Promise<Detalleventa> {
    const venta = await this.ventasRepository.findOne({
      where: { id },
      relations: ['ventas', 'productos'],
    });
    if (!venta) {
      throw new NotFoundException(`El detalle de venta ${id} no existe`);
    }
    return venta;
  }

  async update(id: number, updateDetalleventaDto: UpdateDetalleventaDto): Promise<Detalleventa> {
    const venta = await this.findOne(id);
    const ventaUpdate = Object.assign(venta, updateDetalleventaDto);
    ventaUpdate.ventas = { id: updateDetalleventaDto.idVenta } as Venta;
    ventaUpdate.productos = { id: updateDetalleventaDto.idProducto } as Producto;
    return this.ventasRepository.save(ventaUpdate);
  }

  async remove(id: number) {
    const venta = await this.findOne(id);
    return this.ventasRepository.delete(venta.id);
  }
}
