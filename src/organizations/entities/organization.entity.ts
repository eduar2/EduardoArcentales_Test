import { Tribe } from 'src/tribes/entities/tribe.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Organization {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('int')
  status: number;

  @OneToMany(() => Tribe, (tribe) => tribe.organization)
  tribes: Tribe[];
}
