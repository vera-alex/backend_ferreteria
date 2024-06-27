import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEmpleadoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo ci no debe ser vacío' })
  @IsString({ message: 'El campo ci debe ser de tipo cadena' })
  @MaxLength(15, { message: 'El campo ci no debe ser mayor a 15 caracteres' })
  @MinLength(7, { message: 'El campo ci no debe ser menor a 7 caracteres' })
  readonly ci: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombres no debe ser vacío' })
  @IsString({ message: 'El campo nombres debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombres no debe ser mayor a 50 caracteres' })
  @MinLength(3, { message: 'El campo nombres no debe ser menor a 3 caracteres' })
  readonly nombres: string;

  @ApiProperty()
  @IsString({ message: 'El campo paterno debe ser de tipo cadena' })
  @MaxLength(20, { message: 'El campo paterno no debe ser mayor a 20 caracteres' })
  @MinLength(3, { message: 'El campo paterno no debe ser menor a 3 caracteres' })
  readonly paterno: string;

  @ApiProperty()
  @IsString({ message: 'El campo materno debe ser de tipo cadena' })
  @MaxLength(20, { message: 'El campo materno no debe ser mayor a 20 caracteres' })
  @MinLength(3, { message: 'El campo materno no debe ser menor a 3 caracteres' })
  readonly materno: string;

  @ApiProperty()
  @IsEmail({}, { message: 'El campo email debe tener el formato correcto' })
  @MaxLength(50, { message: 'El campo usario no debe ser mayor a 50 caracteres' })
  @MinLength(10, { message: 'El campo usario no debe ser menor a 10 caracteres' })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo direccion no debe ser vacío' })
  @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
  @MaxLength(70, { message: 'El campo direccion no debe ser mayor a 70 caracteres' })
  @MinLength(10, { message: 'El campo direccion no debe ser menor a 10 caracteres' })
  readonly direccion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo celular no debe ser vacío' })
  @IsString({ message: 'El campo celular debe ser de tipo cadena' })
  @MaxLength(15, { message: 'El campo celular no debe ser mayor a 15 caracteres' })
  @MinLength(8, { message: 'El campo celular no debe ser menor a 8 caracteres' })
  readonly celular: string;

  @ApiProperty({ example: '2024-02-13' })
  @IsNotEmpty({ message: 'El campo fechaContrato no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fechaContrato debe ser de tipo fecha' })
  readonly fechaContrato: Date;

  @ApiProperty()
  @IsDefined({ message: 'El campo idEmpleado debe estar definido' })
  @IsNumber({}, { message: 'El campo idEmpleado debe ser de tipo numérico' })
  readonly idUsuario: number;
}
