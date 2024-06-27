import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('empleados')
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 15, nullable: false })
  ci: string;

  @Column('varchar', { length: 50, nullable: false })
  nombres: string;

  @Column('varchar', { length: 20, nullable: true })
  paterno: string;

  @Column('varchar', { length: 20, nullable: true })
  materno: string;

  @Column('varchar', { length: 50, nullable: true })
  email: string;

  @Column('varchar', { length: 70, nullable: false })
  direccion: string;

  @Column('varchar', { length: 15, nullable: false })
  celular: string;

  @CreateDateColumn({ name: 'fecha_contrato', nullable: false })
  fechaContrato: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @OneToOne(() => Usuario, usuario => usuario.empleados)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuarios: Usuario;
}
