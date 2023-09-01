import { Controller, Get, Param, Header } from '@nestjs/common';
import { TribesService } from './tribes.service';
import * as fs from 'fs';

@Controller('tribes')
export class TribesController {
  constructor(private readonly tribesService: TribesService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tribesService.findOne(+id);
  }

  @Get(':id/report')
  @Header('Content-Type', 'application/csv')
  @Header('Content-Disposition', 'attachment; filename="metrics.csv"')
  async getReport(@Param('id') id: string) {
    const metrics = await this.tribesService.getReport(+id);

    let csvData =
      [
        'id',
        'name',
        'tribe',
        'organization',
        'coverage',
        'code_smells',
        'bugs',
        'vulnerabilites',
        'hotspot',
        'verificationState',
        'state',
      ].join(',') + '\r\n';
    fs.appendFileSync('./metrics.csv', csvData);

    metrics.forEach((metric) => {
      const record: string =
        [
          metric.id,
          metric.name,
          metric.tribe,
          metric.organization,
          metric.coverage,
          metric.code_smells,
          metric.bugs,
          metric.vulnerabilities,
          metric.hotspot,
          metric.verificationState,
          metric.state,
        ].join(',') + '\r\n';
      csvData += record;
      fs.appendFileSync('./metrics.csv', record);
    });
    fs.unlinkSync('./metrics.csv');
    return csvData;
  }
}
