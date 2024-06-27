import { Compra } from 'src/compras/entities/compra.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('proveedores')
export class Proveedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 25, nullable: false })
  nit: string

  @Column('varchar', { length: 50, nullable: false, name: 'razon_social' })
  razonSocial: string;

  @Column('varchar', { length: 70, nullable: false })
  direccion: string;

  @Column('varchar', { length: 15, nullable: false })
  telefono: string;

  @Column('varchar', { length: 50, nullable: true })
  email: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @OneToMany(() => Compra, compra => compra.proveedor)
  compras: Compra[];
}
