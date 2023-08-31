import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from '../src/organizations/entities/organization.entity';
import { getConnection } from 'typeorm';

export const helperOrganization = () => [
  TypeOrmModule.forRoot({
    type: 'better-sqlite3',
    database: ':memory:',
    dropSchema: true,
    entities: [Organization],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Organization]),
];

export const testDatasetSeed = async () => {
  const connection = getConnection();
  const entityManager = connection.createEntityManager();

  entityManager.insert<Organization>(Organization, {
    name: 'org1',
    status: 1,
  });
  entityManager.insert<Organization>(Organization, {
    name: 'org2',
    status: 1,
  });
  entityManager.insert<Organization>(Organization, {
    name: 'org3',
    status: 2,
  });
};
