import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Detallecompra } from 'src/detallecompras/entities/detallecompra.entity';
import { Detalleventa } from 'src/detalleventas/entities/detalleventa.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 10, nullable: false })
  codigo: string;

  @Column('varchar', { length: 50, nullable: false })
  nombre: string;

  @Column('varchar', { length: 20, nullable: true })
  marca: string;

  @Column('varchar', { length: 20, nullable: false })
  unidadMedida: string;

  @Column('float', { nullable: false })
  precio: number;

  @Column('int', { nullable: false })
  stock: number;

  @ManyToOne(() => Categoria, categoria => categoria.productos)
  @JoinColumn({ name: 'id_categoria', referencedColumnName: 'id' })
  categorias: Categoria;

  @OneToMany(() => Detalleventa, detalleventa => detalleventa.productos)
  detalleventas: Detalleventa[];

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @OneToMany(() => Detallecompra, detallecompra => detallecompra.productos)
  detallecompra: Detallecompra[];
}
