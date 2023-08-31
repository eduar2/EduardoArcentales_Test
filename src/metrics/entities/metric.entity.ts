import { Repository } from 'src/repositories/entities/repository.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Metric {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: false })
  repositoryId: number;

  @Column({ type: 'double', precision: 10, scale: 2, default: 0 })
  coverage: number;

  @Column({ type: 'int', default: 0 })
  bugs: number;

  @Column({ type: 'int', default: 0 })
  vulnerabilities: number;

  @Column({ type: 'int', default: 0 })
  hotspot: number;

  @Column({ type: 'int', default: 0 })
  code_smells: number;

  @OneToOne(() => Repository)
  @JoinColumn()
  repository: Repository;
}
