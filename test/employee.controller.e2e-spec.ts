import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { EmployeeModule } from '../src/employee/employee.module';
import { EmployeeService } from '../src/employee/application/employee.service';

describe('EmployeeController  ', () => {
  let app: INestApplication;
  const employeeService = {
    getEmployee: jest.fn(() => {
      return [
        {
          id: 4,
          first_name: 'Pedro',
          middle_name: 'Antonio',
          last_name: 'Ramirez',
          phone_number: '(+58) 412 6672829',
          birth_date: '1983-07-21',
          address: {
            street1: 'Calle 2',
            street2: 'Calle alterna 2',
            city: 'Ciudad 1',
            state: 'State 1',
            _zip: 'ZIP11',
          },
          ssn: '345678223',
          education_level: 3,
          work_experiences: [
            {
              job_title: 'Job title 1',
              company_name: 'Company 3',
              category: 1,
            },
          ],
          skills: [
            {
              name: 'Skill 1',
              category: 1,
            },
          ],
          references: [
            {
              full_name: 'Person 3',
              job_title: 'Job Title 3',
              company_name: 'Company 3',
              phone_number: 2211271,
              email: 'email3@domain.com',
            },
          ],
          rating: 4.3,
          status: 2,
        },
      ];
    }),
    getEmployeeById: jest.fn().mockImplementation((id: number) => ({
      id,
      first_name: 'Pedro',
      middle_name: 'Antonio',
      last_name: 'Ramirez',
      phone_number: '(+58) 412 6672829',
      birth_date: '1983-07-21',
      address: {
        street1: 'Calle 2',
        street2: 'Calle alterna 2',
        city: 'Ciudad 1',
        state: 'State 1',
        _zip: 'ZIP11',
      },
      ssn: '345678223',
      education_level: 3,
      work_experiences: [
        {
          job_title: 'Job title 1',
          company_name: 'Company 3',
          category: 1,
        },
      ],
      skills: [
        {
          name: 'Skill 1',
          category: 1,
        },
      ],
      references: [
        {
          full_name: 'Person 3',
          job_title: 'Job Title 3',
          company_name: 'Company 3',
          phone_number: 2211271,
          email: 'email3@domain.com',
        },
      ],
      rating: 4.3,
      status: 2,
    })),
  };

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
  describe('Get all Employees (e2e)', () => {
    it(`/GET employees`, () => {
      return request(app.getHttpServer())
        .get('/employees')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(employeeService.getEmployee());
    });
    it(`/GET employees if endpoint path does not exist `, () => {
      return request(app.getHttpServer()).get('/all-employees/').expect(404);
    });
  });
  describe('Get Employee by id (e2e)', () => {
    it(`/GET employee`, () => {
      return request(app.getHttpServer())
        .get('/employees/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(employeeService.getEmployeeById(1));
    });
    it(`/GET employeee if endpoint path does not exist `, () => {
      return request(app.getHttpServer())
        .get('/employees/one-employe/1')
        .expect(404);
    });
    it(`/GET employeee if employeeId is a string `, () => {
      return request(app.getHttpServer()).get('/employees/all').expect(400);
    });
  });
});
