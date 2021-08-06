import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
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
    getByEmployerId: jest
      .fn()
      .mockImplementation((id: number) => jobOfferPesistence.find),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AddressPersistenceAdapter],
    })
      .overrideProvider(JobOfferService)
      .useValue(jobOfferService)
      .overrideProvider(EmployersPersisteceAdapter)
      .useValue(employerPersistence)
      .overrideProvider(JobOfferPersistenceAdapter)
      .useValue(jobOfferPesistence)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET job-offers`, () => {
    return request(app.getHttpServer())
      .get('/job-offers/employers/1')
      .expect(200)
      .expect(jobOfferService.getByEmployerId(1));
  });
});
