import { Module } from '@nestjs/common';
import { BankRepositoriesService } from './bank-repositories.service';
import { BankRepositoriesController } from './bank-repositories.controller';

@Module({
  controllers: [BankRepositoriesController],
  providers: [BankRepositoriesService],
})
export class BankRepositoriesModule {}
