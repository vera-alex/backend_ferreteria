import { Producto } from 'src/productos/entities/producto.entity';
import { Venta } from 'src/ventas/entities/venta.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('detalleventas')
export class Detalleventa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float', { nullable: false })
  precio: number;

  @Column('int', { nullable: false })
  cantidad: number;

  @Column('float', { nullable: false })
  subtotal: number;

  @ManyToOne(() => Venta, venta => venta.detalleventas)
  @JoinColumn({ name: 'id_venta', referencedColumnName: 'id' })
  ventas: Venta;

  @ManyToOne(() => Producto, producto => producto.detalleventas)
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  productos: Producto;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
}
