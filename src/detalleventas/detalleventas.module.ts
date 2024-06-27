import { Module } from '@nestjs/common';
import { DetalleventasService } from './detalleventas.service';
import { DetalleventasController } from './detalleventas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Detalleventa } from './entities/detalleventa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Detalleventa])],
  controllers: [DetalleventasController],
  providers: [DetalleventasService],
})
export class DetalleventasModule {}
