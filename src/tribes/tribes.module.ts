import { Module } from '@nestjs/common';
import { TribesService } from './tribes.service';
import { TribesController } from './tribes.controller';
import { Tribe } from './entities/tribe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoriesModule } from 'src/repositories/repositories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tribe]), RepositoriesModule],
  controllers: [TribesController],
  providers: [TribesService],
})
export class TribesModule {}
