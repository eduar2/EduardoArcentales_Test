import { Test, TestingModule } from '@nestjs/testing';
import { TribesService } from './tribes.service';
import { Tribe } from './entities/tribe.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RepositoriesService } from 'src/repositories/repositories.service';

// const mockOrg: CreateOrganizationDto = {
//   name: 'Org1',
//   status: 1,
// };

describe('TribeService', () => {
  let service: TribesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TribesService,
        RepositoriesService,
        { provide: getRepositoryToken(Tribe), useValue: jest.fn() },
      ],
    }).compile();

    service = module.get<TribesService>(TribesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
