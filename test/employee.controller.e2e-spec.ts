import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { EmployeeModule } from '../src/employee/employee.module';
import { EmployeeService } from '../src/employee/application/employee.service';

describe('Get all employees ', () => {
  let app: INestApplication;
  const employeeService = { getEmployee: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [EmployeeModule],
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
