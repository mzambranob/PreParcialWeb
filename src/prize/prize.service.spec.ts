import { Test, TestingModule } from '@nestjs/testing';
import { PrizeService } from './prize.service';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';

describe('PrizeService', () => {
  let service: PrizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [PrizeService],
    }).compile();

    service = module.get<PrizeService>(PrizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
