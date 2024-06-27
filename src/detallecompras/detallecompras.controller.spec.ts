import { Test, TestingModule } from '@nestjs/testing';
import { DetallecomprasController } from './detallecompras.controller';
import { DetallecomprasService } from './detallecompras.service';

describe('DetallecomprasController', () => {
  let controller: DetallecomprasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallecomprasController],
      providers: [DetallecomprasService],
    }).compile();

    controller = module.get<DetallecomprasController>(DetallecomprasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
