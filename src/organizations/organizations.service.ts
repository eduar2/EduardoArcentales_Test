import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    return await this.organizationRepository.save({
      ...createOrganizationDto,
    });
  }

  async findAll() {
    return `This action returns all organizations`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  async remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
