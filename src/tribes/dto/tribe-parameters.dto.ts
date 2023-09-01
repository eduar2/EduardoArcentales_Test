import { ApiProperty } from '@nestjs/swagger';
import { coverage, state, stateReport } from 'src/common/constants';

export class TribeParametersDTO {
  @ApiProperty({ default: 2023, required: false })
  year: number;

  @ApiProperty({ default: stateReport, required: false })
  state: string;

  @ApiProperty({ default: coverage, required: false, enum: state })
  coverage: number;
}
