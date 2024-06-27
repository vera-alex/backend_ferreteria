import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoriaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(25, { message: 'El campo nombre no debe ser mayor a 25 caracteres' })
  @MinLength(5, { message: 'El campo nombre no debe ser menor a 5 caracteres' })
  readonly nombre: string;
}
