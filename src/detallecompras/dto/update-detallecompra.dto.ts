import { PartialType } from '@nestjs/swagger';
import { CreateDetallecompraDto } from './create-detallecompra.dto';

export class UpdateDetallecompraDto extends PartialType(CreateDetallecompraDto) {}
