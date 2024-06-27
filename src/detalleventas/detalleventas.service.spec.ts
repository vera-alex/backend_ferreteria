import { Test, TestingModule } from '@nestjs/testing';
import { DetalleventasService } from './detalleventas.service';

describe('DetalleventasService', () => {
  let service: DetalleventasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetalleventasService],
    }).compile();

    service = module.get<DetalleventasService>(DetalleventasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
