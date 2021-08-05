import { Test } from '@nestjs/testing';
import { EmployeeService } from '../application/employee.service';
import { EmployeeController } from './employee.controller';

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
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
  };
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [EmployeeService],
    })
      .overrideProvider(EmployeeService)
      .useValue(employeeService)
      .compile();

    employeeController = await moduleRef.get<EmployeeController>(
      EmployeeController,
    );
  });

  describe('Get all employees (unit)', () => {
    it('should return an array of employees', async () => {
      const result = [];

      jest
        .spyOn(employeeService, 'getEmployee')
        .mockImplementation(() => result);

      expect(await employeeController.getAllEmployee()).toBe(result);
    });
  });
});
