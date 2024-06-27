import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateVentaDto {
  @ApiProperty()
  @IsNumber({}, { message: 'El campo total de venta debe ser numeral' })
  @MaxLength(7, { message: 'El campo total de venta no debe ser mayor a 7 caracteres' })
  @MinLength(1, { message: 'El campo total de venta no debe ser menor a 1 caracteres' })
  readonly totalVenta: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idUsuario debe estar definido' })
  @IsNumber({}, { message: 'El campo idUsuario debe ser de tipo numérico' })
  readonly idUsuario: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idCliente debe estar definido' })
  @IsNumber({}, { message: 'El campo idCliente debe ser de tipo numérico' })
  readonly idCliente: number;
}
