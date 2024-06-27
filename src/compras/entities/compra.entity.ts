
import { Detallecompra } from 'src/detallecompras/entities/detallecompra.entity';
import { Proveedor } from 'src/proveedores/entities/proveedor.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('compras')
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.compras)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuarios: Usuario;

  @ManyToOne(() => Proveedor, proveedor => proveedor.compras)
  @JoinColumn({ name: 'id_proveedor', referencedColumnName: 'id' })
  proveedor: Proveedor;

  @OneToMany(() => Detallecompra, detallecompra => detallecompra.compra)
  detallecompra: Detallecompra[];
}
