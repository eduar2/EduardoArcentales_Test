import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private readonly orgRepository: Repository<Organization>,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    return await this.orgRepository.save({
      ...createOrganizationDto,
    });
  }

  async findAll() {
    return await this.orgRepository.find();
  }

  async update(id: number, updateOrgDto: UpdateOrganizationDto) {
    await this.findOrganization(id);
    return await this.orgRepository.update(id, {
      ...updateOrgDto,
    });
  }

  async remove(id: number) {
    await this.findOrganization(id);
    return await this.orgRepository.delete({ id }); // se le pasa el id
  }

  async findOrganization(id: number) {
    const org = await this.orgRepository.findOneBy({ id });
    if (!org) {
      throw new BadRequestException('Organization not found');
    }
    return org;
  }
}
