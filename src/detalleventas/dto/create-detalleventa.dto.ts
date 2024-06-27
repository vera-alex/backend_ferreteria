import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, MaxLength } from 'class-validator';

export class CreateDetalleventaDto {
  @IsNotEmpty({ message: 'El campo precio no debe ser vacío' })
  @IsNumber({}, { message: 'El campo precio debe ser de tipo numero' })
  @MaxLength(10, { message: 'El campo precio no debe ser mayor a 10 number' })
  readonly precio: number;

  @IsNotEmpty({ message: 'El campo cantidad no debe ser vacío' })
  @IsNumber({}, { message: 'El campo cantidad debe ser de tipo numero' })
  @MaxLength(3, { message: 'El campo cantidad no debe ser mayor a 3 number' })
  readonly cantidad: number;

  @IsNotEmpty({ message: 'El campo subtotal no debe ser vacío' })
  @IsNumber({}, { message: 'El campo subtotal debe ser de tipo numero' })
  @MaxLength(4, { message: 'El campo subtotal no debe ser mayor a 4 number' })
  readonly subtotal: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idVenta debe estar definido' })
  @IsNumber({}, { message: 'El campo idVenta debe ser de tipo numérico' })
  readonly idVenta: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idProducto debe estar definido' })
  @IsNumber({}, { message: 'El campo idProducto debe ser de tipo numérico' })
  readonly idProducto: number;
}
