import { Test } from '@nestjs/testing';
import { JobOffersController } from '../../../job-offers/infrastructure/job-offers.controller';
import { JobOfferService } from '../../../job-offers/application/job-offers.service';
import { IJobOfferRepository } from '../../../job-offers/application/job-offers.repository.interface';

describe('EmployeeController', () => {
  let jobOffersController: JobOffersController;
  let _jobOfferRepository: IJobOfferRepository;
  let jobOfferService: JobOfferService = new JobOfferService(
    _jobOfferRepository,
  );

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [JobOffersController],
      providers: [JobOfferService],
    }).compile();

    jobOfferService = moduleRef.get<JobOfferService>(JobOfferService);
    jobOffersController =
      moduleRef.get<JobOffersController>(JobOffersController);
  });

  describe('updateJobOfferStatus', () => {
    it('should return an array of Employee', async () => {
      const result = 'Status changed successfully';

      /* jest
        .spyOn(JobOfferService, 'updateJobOfferStatus')
        .mockImplementation(() => 1);*/

      expect(await jobOffersController.updateJobOfferStatus(1)).toBe(result);
    });
  });
});
