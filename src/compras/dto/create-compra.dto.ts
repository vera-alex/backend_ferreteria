import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber } from 'class-validator';

export class CreateCompraDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo idUsuario debe estar definido' })
  @IsNumber({}, { message: 'El campo idUsuario debe ser de tipo numérico' })
  readonly idUsuario: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idProveedor debe estar definido' })
  @IsNumber({}, { message: 'El campo idProveedor debe ser de tipo numérico' })
  readonly idProveedor: number;
}
