import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesService } from './repositories.service';
import { Repository } from './entities/repository.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

// const mockOrg: CreateRepositorieDto = {
//   name: 'Org1',
//   status: 1,
// };

describe('RepositoriesService', () => {
  let service: RepositoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RepositoriesService,
        { provide: getRepositoryToken(Repository), useValue: jest.fn() },
      ],
    }).compile();

    service = module.get<RepositoriesService>(RepositoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
