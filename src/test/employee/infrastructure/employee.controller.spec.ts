import { Test } from '@nestjs/testing';
import { EmployeeController } from '../../../employee/infrastructure/employee.controller';
import { EmployeeService } from '../../../employee/application/employee.service';
import { ReadEmployeeDto } from '../../../employee/dtos/read-employee.dto';
import { Employee } from '../../../employee/domain/employee.model';
import { IEmployeeRepository } from '../../../employee/application/employee.repository.interface';
import { plainToClass } from 'class-transformer';

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
  let employeeService: EmployeeService;
  let _employeeRepository: IEmployeeRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [EmployeeService],
    }).compile();

    employeeService = moduleRef.get<EmployeeService>(EmployeeService);
    employeeController = moduleRef.get<EmployeeController>(EmployeeController);
  });

  describe('getEmployee', () => {
    it('should return an array of Employee', async () => {
      const employee: Employee[] = await this._employeeRepository.getEmployee();
      const result: ReadEmployeeDto[] = await employee.map((emp: Employee) =>
        plainToClass(ReadEmployeeDto, emp),
      );

      jest
        .spyOn(employeeService, 'getEmployee')
        .mockImplementation(() => result);

      expect(await employeeController.getAllEmployee()).toBe(result);
    });
  });
});
