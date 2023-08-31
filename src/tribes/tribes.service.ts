import { Injectable } from '@nestjs/common';
import { Tribe } from './entities/tribe.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoriesService } from 'src/repositories/repositories.service';
import {
  coverageIndicator,
  states,
  verificationState,
} from 'src/common/constants';
import { randomIntFromInterval } from 'src/common/helpers';

@Injectable()
export class TribesService {
  constructor(
    @InjectRepository(Tribe)
    private readonly tribeRepository: Repository<Tribe>,
    private readonly repositoriesService: RepositoriesService,
  ) {}

  async findOne(id: number) {
    //obtener metricas de tribu
    return this.getMetrics(id);
  }

  async getReport(id: number) {
    //obtener metricas de tribu
    return await this.getMetricsReport(id);
  }

  private async getMetrics(id: number) {
    try {
      const tribe = await this.tribeRepository.findOneBy({ id });
      if (!tribe) {
        return 'La tribu no se encuentra registrada';
      }
      const now = new Date();
      const actualYear = now.getFullYear();
      const repositories = tribe.repositories.filter(
        (x) => Number(x.create_time.getFullYear()) == actualYear,
      );

      if (!repositories && repositories.length <= 0) {
        return 'No se encontraron repositorios';
      }
      const statusVerification = this.repositoriesService.findAll();

      const qualityRepositories = repositories.filter(
        (x) => x.metric.coverage >= 75,
      ).length;
      console.log(qualityRepositories);
      if (qualityRepositories < 1) {
        return 'La Tribu no tiene repositorios que cumplan con la cobertura necesaria';
      }
      const repositoriesMetrics = repositories.map((x) => {
        return {
          id: x.id,
          name: x.name,
          tribe: tribe.name,
          organization: tribe.organization.name,
          coverage: x.metric.coverage + coverageIndicator,
          code_smells: x.metric.code_smells,
          bugs: x.metric.bugs,
          vulnerabilities: x.metric.vulnerabilities,
          hotspot: x.metric.hotspot,
          verificationState:
            verificationState[
              statusVerification.repositories[randomIntFromInterval(0, 2)].state
            ],
          state: states[x.state],
        };
      });

      return repositoriesMetrics;
    } catch (error) {
      console.log(error);
      return 'Ocurrió un error. Intente nuevamente o comuníquese con el departamento técnico';
    }
  }

  private async getMetricsReport(id: number) {
    const voidResult = [];

    try {
      const tribe = await this.tribeRepository.findOneBy({ id });
      if (!tribe) {
        return voidResult;
      }
      const now = new Date();
      const actualYear = now.getFullYear();
      const repositories = tribe.repositories.filter(
        (x) => Number(x.create_time.getFullYear()) == actualYear,
      );

      if (!repositories && repositories.length <= 0) {
        return voidResult;
      }
      const statusVerification = this.repositoriesService.findAll();

      const qualityRepositories = repositories.filter(
        (x) => x.metric.coverage >= 75,
      ).length;
      if (qualityRepositories < 1) {
        return voidResult;
      }
      const repositoriesMetrics = repositories.map((x) => {
        return {
          id: x.id,
          name: x.name,
          tribe: tribe.name,
          organization: tribe.organization.name,
          coverage: x.metric.coverage + coverageIndicator,
          code_smells: x.metric.code_smells,
          bugs: x.metric.bugs,
          vulnerabilities: x.metric.vulnerabilities,
          hotspot: x.metric.hotspot,
          verificationState:
            verificationState[
              statusVerification.repositories[randomIntFromInterval(0, 2)].state
            ],
          state: states[x.state],
        };
      });

      return repositoriesMetrics;
    } catch (error) {
      console.log(error);
      return voidResult;
    }
  }
}
