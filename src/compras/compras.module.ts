import { Module } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';
import { Compra } from './entities/compra.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Compra])],
  controllers: [ComprasController],
  providers: [ComprasService],
})
export class ComprasModule {}
