import { Organization } from 'src/organizations/entities/organization.entity';
import { Repository } from 'src/repositories/entities/repository.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Tribe {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('int')
  status: number;

  @ManyToOne(() => Organization, (organization) => organization.id, {
    eager: true, // para que traiga las raza al hacer un findOne
  })
  organization: Organization;

  @OneToMany(() => Repository, (repository) => repository.tribe, {
    eager: true,
  })
  repositories: Repository[];
}
