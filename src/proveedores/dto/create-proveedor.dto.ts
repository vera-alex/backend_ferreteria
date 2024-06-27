import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProveedorDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nit no debe ser vacío' })
  @IsString({ message: 'El campo nit debe ser de tipo cadena' })
  @MaxLength(25, { message: 'El campo nit no debe ser mayor a 25 caracteres' })
  @MinLength(5,{ message: 'Elcampo nit no debe ser menor a 5 caracteres' })
  readonly nit: string;
  
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombre no debe ser mayor a 50 caracteres' })
  @MinLength(3, { message: 'El campo nombre no debe ser menor a 3 caracteres' })
  readonly razonSocial: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo direccion no debe ser vacío' })
  @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
  @MaxLength(70, { message: 'El campo direccion no debe ser mayor a 70 caracteres' })
  @MinLength(10, { message: 'El campo direccion no debe ser menor a 10 caracteres' })
  readonly direccion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo telefono no debe ser vacío' })
  @IsString({ message: 'El campo telefono debe ser de tipo cadena' })
  @MaxLength(15, { message: 'El campo telefono no debe ser mayor a 15 caracteres' })
  @MinLength(5, { message: 'El campo telefono no debe ser menor a 5 caracteres' })
  readonly telefono: string;

  @ApiProperty()
  @IsEmail({}, { message: 'El campo email debe tener el formato correcto' })
  @MaxLength(50, { message: 'El campo usario no debe ser mayor a 50 caracteres' })
  @MinLength(10, { message: 'El campo usario no debe ser menor a 10 caracteres' })
  readonly email: string;
}
