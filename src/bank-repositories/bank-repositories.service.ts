import { Injectable } from '@nestjs/common';
import { CreateBankRepositoryDto } from './dto/create-bank-repository.dto';
import { UpdateBankRepositoryDto } from './dto/update-bank-repository.dto';

@Injectable()
export class BankRepositoriesService {
  create(createBankRepositoryDto: CreateBankRepositoryDto) {
    return 'This action adds a new bankRepository';
  }

  findAll() {
    const repositories = {
      repositories: [
        {
          id: 1,
          state: 604,
        },
        {
          id: 2,
          state: 605,
        },
        {
          id: 3,
          state: 606,
        },
      ],
    };

    return repositories;
  }

  findOne(id: number) {
    return `This action returns a #${id} bankRepository`;
  }

  update(id: number, updateBankRepositoryDto: UpdateBankRepositoryDto) {
    return `This action updates a #${id} bankRepository`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankRepository`;
  }
}
