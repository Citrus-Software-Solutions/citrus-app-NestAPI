import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { JobOffersModule } from '../src/job-offers/job-offers.module';
import * as request from 'supertest';
import { EmployersPersisteceAdapter } from '../src/employers/infrastructure/employers.persistence.adapter';
import { JobOfferService } from '../src/job-offers/application/job-offers.service';
import { JobOfferPersistenceAdapter } from '../src/job-offers/infrastructure/job-offers.persistence.adapter';
import { AddressPersistenceAdapter } from '../src/shared/address/infraestructure/address.persistence.adapter';

describe('JobOfferController (e2e) ', () => {
  let app: INestApplication;
  const mockJobOffer = {
    id: 1,
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
  };

  const employerPersistence = {};
  const jobOfferPesistence = {
    find: jest.fn().mockResolvedValue(mockJobOffer),
  };
  const jobOfferService = {
    createJobOffer: jest
      .fn()
      .mockImplementation((id: number, jobOffer) => jobOfferPesistence.find),
    getByid: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [JobOffersModule],
    })
      .overrideProvider(JobOfferService)
      .useValue(jobOfferService)
      .overrideProvider(EmployersPersisteceAdapter)
      .useValue(employerPersistence)
      .overrideProvider(JobOfferPersistenceAdapter)
      .useValue(jobOfferPesistence)
      .overrideProvider(AddressPersistenceAdapter)
      .useValue(employerPersistence)

      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST create job-offers`, () => {
    return request(app.getHttpServer())
      .post('/job-offers/1')
      .expect(201)
      .expect(jobOfferService.createJobOffer(1, mockJobOffer));
  });
});
