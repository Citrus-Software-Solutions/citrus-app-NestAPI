import { Test } from '@nestjs/testing';
import { EmployeeController } from '../../../employee/infrastructure/employee.controller';
import { EmployeeService } from '../../../employee/application/employee.service';
import { ReadEmployeeDto } from '../../../employee/dtos/read-employee.dto';
import { Employee } from '../../../employee/domain/employee.model';
import { IEmployeeRepository } from '../../../employee/application/employee.repository.interface';
import { plainToClass } from 'class-transformer';
import { EmployeePersistenceAdapter } from 'src/employee/infrastructure/employee.persistence.adapter';
import { EmployeeRepository } from 'src/employee/application/employee.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntityRepository } from 'src/employee/infrastructure/employee.entity.repository';
import { SharedModule } from 'src/shared/shared.module';

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [
        EmployeeService,
        EmployeePersistenceAdapter,
        EmployeeRepository,
      ],
      imports: [
        TypeOrmModule.forFeature([EmployeeEntityRepository]),
        SharedModule,
      ],
    }).compile();

    employeeService = moduleRef.get<EmployeeService>(EmployeeService);
    employeeController = moduleRef.get<EmployeeController>(EmployeeController);
  });

  describe('getEmployee', () => {
    it('should return an array of Employee', async () => {
      let employeePersistenceAdapter: EmployeePersistenceAdapter;
      const _employeeRepository: EmployeeRepository = new EmployeeRepository(
        employeePersistenceAdapter,
      );
      const employee: Employee[] = await _employeeRepository.getEmployee();
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
