import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Venta } from 'src/ventas/entities/venta.entity';
import { Compra } from 'src/compras/entities/compra.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 12, nullable: false })
  usuario: string;

  @Column('varchar', { length: 100, nullable: false })
  clave: string;

  @Column('varchar', { length: 15, nullable: false })
  rol: string;
  
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @OneToOne(() => Empleado, empleado => empleado.usuarios)
  empleados: Empleado[];

  @OneToMany(() => Venta, venta => venta.usuarios)
  ventas: Venta[];

  @OneToMany(() => Compra, compra => compra.usuarios)
  compras: Compra[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.clave = await bcrypt.hash(this.clave, salt);
  }

  async validatePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, this.clave);
  }
}
