import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Detalleventa } from 'src/detalleventas/entities/detalleventa.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  totalVenta: number;

  @ManyToOne(() => Usuario, usuario => usuario.ventas)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuarios: Usuario;

  @ManyToOne(() => Cliente, cliente => cliente.ventas)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  clientes: Cliente;

  @OneToMany(() => Detalleventa, detalleventa => detalleventa.ventas)
  detalleventas: Detalleventa[];
}
