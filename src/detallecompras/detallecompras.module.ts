import { Module } from '@nestjs/common';
import { DetallecomprasService } from './detallecompras.service';
import { DetallecomprasController } from './detallecompras.controller';
import { Detallecompra } from './entities/detallecompra.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Detallecompra])],
  controllers: [DetallecomprasController],
  providers: [DetallecomprasService],
})
export class DetallecomprasModule {}
