import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { EmployeeModule } from '../employee.module';
import { EmployeeService } from './employee.service';
import { EmployeeRepository } from './employee.repository';

describe('Cats', () => {
  let app: INestApplication;
  const employeeService = { getEmployee: () => ['test'] };
  const mockEmployeeRepository = {
    getEmployee() {
      return {
        test: 'success',
      };
    },
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [EmployeeModule],
      providers: [
        {
          provide: EmployeeRepository,
          useValue: {
            get: jest.fn(() => mockEmployeeRepository), // really it can be anything, but the closer to your actual logic the better
          },
        },
      ],
    })
      .overrideProvider(EmployeeService)
      .useValue(employeeService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET employees`, () => {
    return request(app.getHttpServer())
      .get('/employees')
      .expect(200)
      .expect(employeeService.getEmployee());
  });

  afterAll(async () => {
    await app.close();
  });
});
