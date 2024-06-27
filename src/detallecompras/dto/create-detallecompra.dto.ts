import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, MaxLength } from "class-validator";

export class CreateDetallecompraDto {

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo cantidad no debe ser vacío' })
  @IsNumber({}, { message: 'El campo cantidad debe ser de tipo numero' })
  @MaxLength(8, { message: 'El campo cantidad no debe ser mayor a 8 number' })
  readonly cantidad: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo precio venta no debe ser vacío' })
  @IsNumber({}, { message: 'El campo precio venta debe ser de tipo numero' })
  @MaxLength(8, { message: 'El campo precio venta no debe ser mayor a 8 number' })
  readonly precioVenta: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo precio compra no debe ser vacío' })
  @IsNumber({}, { message: 'El campo precio compra debe ser de tipo numero' })
  @MaxLength(8, { message: 'El campo precio compra no debe ser mayor a 8 number' })
  readonly precioCompra: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo subtotal no debe ser vacío' })
  @IsNumber({}, { message: 'El campo subtotal debe ser de tipo numero' })
  @MaxLength(8, { message: 'El campo subtotal no debe ser mayor a 8 number' })
  readonly subtotal: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idCompra debe estar definido' })
  @IsNumber({}, { message: 'El campo idCompra debe ser de tipo numérico' })
  readonly idCompra: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idProducto debe estar definido' })
  @IsNumber({}, { message: 'El campo idProducto debe ser de tipo numérico' })
  readonly idProducto: number;
}


