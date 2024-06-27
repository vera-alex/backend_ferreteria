import { Test, TestingModule } from '@nestjs/testing';
import { DetallecomprasService } from './detallecompras.service';

describe('DetallecomprasService', () => {
  let service: DetallecomprasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallecomprasService],
    }).compile();

    service = module.get<DetallecomprasService>(DetallecomprasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
