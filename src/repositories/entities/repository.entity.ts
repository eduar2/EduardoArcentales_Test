import { Metric } from 'src/metrics/entities/metric.entity';
import { Tribe } from 'src/tribes/entities/tribe.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Repository {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('char', { length: 1 })
  state: string;

  @Column('timestamp')
  create_time: Date;

  @Column('char', { length: 1 })
  status: string;

  @ManyToOne(() => Tribe, (tribe) => tribe.id)
  tribe: Tribe;

  @OneToOne(() => Metric, { eager: true })
  @JoinColumn()
  metric: Metric;
}
