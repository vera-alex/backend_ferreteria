import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateClienteDto {
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
  @IsNotEmpty({ message: 'El campo celular no debe ser vacío' })
  @IsString({ message: 'El campo celular debe ser de tipo cadena' })
  @MaxLength(15, { message: 'El campo celular no debe ser mayor a 15 caracteres' })
  @MinLength(8, { message: 'El campo celular no debe ser menor a 8 caracteres' })
  readonly celular: string;
}
