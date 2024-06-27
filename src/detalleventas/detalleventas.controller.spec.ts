import { Test, TestingModule } from '@nestjs/testing';
import { DetalleventasController } from './detalleventas.controller';
import { DetalleventasService } from './detalleventas.service';

describe('DetalleventasController', () => {
  let controller: DetalleventasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleventasController],
      providers: [DetalleventasService],
    }).compile();

    controller = module.get<DetalleventasController>(DetalleventasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
