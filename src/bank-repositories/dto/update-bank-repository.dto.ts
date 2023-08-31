import { PartialType } from '@nestjs/swagger';
import { CreateBankRepositoryDto } from './create-bank-repository.dto';

export class UpdateBankRepositoryDto extends PartialType(CreateBankRepositoryDto) {}
