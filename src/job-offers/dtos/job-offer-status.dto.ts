import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { JobOfferStatus } from '../domain/job-offer-status.enum';

@Exclude()
export class JobOfferStatusDTO {
  @Expose()
  @IsEnum(JobOfferStatus)
  @ApiProperty({
    description: 'The status of a job offer',
    minimum: 0,
    maximum: 6,
    default: 0,
  })
  status: number;
}
