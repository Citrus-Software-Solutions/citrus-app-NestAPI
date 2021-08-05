import { Test } from '@nestjs/testing';
import { JobOffersController } from './job-offers.controller';
import { JobOfferService } from '../application/job-offers.service';
import { DataJobOfferDto } from '../dtos/data-joboffer.dto';

describe('JobOffersController', () => {
  let jobOffersController: JobOffersController;
  const jobOfferService = {
    updateJobOfferStatus: jest.fn(() => {
      'Status changed successfully';
    }),
    createOffer: jest
      .fn()
      .mockImplementation((dto: DataJobOfferDto, id: number) => ({
        ...dto,
      })),
    getById: jest.fn().mockImplementation((id: number) => ({
      id,
      title: 'Oferta 1',
      location: {
        street1: 'Calle 1',
        street2: null,
        city: 'Ciudad 1',
        state: 'State 1',
        _zip: 'ZIP1',
      },
      dead_line: '2021-07-26',
      schedules: [
        {
          dates: {
            fecha_ini: '2021-07-28T12:00:00.000Z',
            fecha_fin: '2021-07-28T19:00:00.000Z',
          },
        },
      ],
      skills: [
        {
          name: 'Skill 1',
          category: 1,
        },
      ],
      special_requirements: [
        {
          props: {
            value: 'Requerimiento 1',
          },
        },
      ],
      duration: 7,
      hourly_rate: 2,
      status: 0,
      employer: {
        id: 1,
        name: 'Citrus',
      },
    })),
  };
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [JobOffersController],
      providers: [JobOfferService],
    })
      .overrideProvider(JobOfferService)
      .useValue(jobOfferService)
      .compile();

    jobOffersController = await moduleRef.get<JobOffersController>(
      JobOffersController,
    );
  });

  describe('Create a Job Offer', () => {
    it('should return a JobOffer', async () => {
      const dto: DataJobOfferDto = {
        name: 'Development',
        description: 'Job Offer 1 ',
        availableVacans: 5,
        dateBegin: '05/08/2021',
        dateEnd: '07/08/2021',
        gender: 'string',
        salary: 1234,
      };

      expect(await jobOffersController.createJobOffer(dto, 1)).toEqual(dto);
      expect(jobOfferService.createOffer).toHaveBeenCalled();
    });
  });
  describe('Update Job Offer Status (unit)', () => {
    it('should return a status changed message successfully', async () => {
      const result = {};

      jest
        .spyOn(jobOfferService, 'updateJobOfferStatus')
        .mockImplementation(() => result);

      expect(await jobOffersController.updateJobOfferStatus(1)).toBe(result);
    });
  });
  describe('Get one Job Offer (unit)', () => {
    it('should return a job offer', async () => {
      const result = {};

      jest.spyOn(jobOfferService, 'getById').mockImplementation(() => result);

      expect(await jobOffersController.getById(1)).toBe(result);
    });
  });
});
