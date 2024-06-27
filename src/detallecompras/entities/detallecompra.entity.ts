import { Compra } from "src/compras/entities/compra.entity";
import { Producto } from "src/productos/entities/producto.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('detallecompra')
export class Detallecompra {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false })
  cantidad: number;

  @Column('float', { nullable: false })
  precioVenta: number;

  @Column('float', { nullable: false })
  precioCompra: number;

  @Column('float', { nullable: false })
  subtotal: number;

  @ManyToOne(() => Compra, compra => compra.detallecompra)
  @JoinColumn({ name: 'id_compra', referencedColumnName: 'id' })
  compra: Compra;

  @ManyToOne(() => Producto, producto => producto.detallecompra)
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  productos: Producto;
}
