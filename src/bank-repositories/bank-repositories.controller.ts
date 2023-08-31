import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BankRepositoriesService } from './bank-repositories.service';
import { CreateBankRepositoryDto } from './dto/create-bank-repository.dto';
import { UpdateBankRepositoryDto } from './dto/update-bank-repository.dto';

@Controller('bank-repositories')
export class BankRepositoriesController {
  constructor(private readonly bankRepositoriesService: BankRepositoriesService) {}

  @Post()
  create(@Body() createBankRepositoryDto: CreateBankRepositoryDto) {
    return this.bankRepositoriesService.create(createBankRepositoryDto);
  }

  @Get()
  findAll() {
    return this.bankRepositoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankRepositoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankRepositoryDto: UpdateBankRepositoryDto) {
    return this.bankRepositoriesService.update(+id, updateBankRepositoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankRepositoriesService.remove(+id);
  }
}
