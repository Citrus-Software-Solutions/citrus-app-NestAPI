import { Name } from '../../domain/name.model';
import { Employee } from '../../../employee/domain/employee.model';
import { EmployeeEntity } from '../../../employee/entities/employee.entity';
import { DataMapper } from '../data-mapper.interface';

export class EmployeeDataMapper
  implements DataMapper<Employee, EmployeeEntity>
{
  public toDomain(entity: EmployeeEntity): Employee {
    const employee = new Employee(
      entity.id,
      Name.create(entity.name),
      Name.create(entity.last_name),
      Name.create(entity.second_lastname),
      entity.gender,
      entity.birth_date,
      Name.create(entity.second_name),
    );
    return employee;
  }

  public toDalEntity(employee: Employee): EmployeeEntity {
    const employeeEntity = new EmployeeEntity();
    employeeEntity.id = employee.id;
    employeeEntity.name = employee.name.props.value;
    employeeEntity.last_name = employee.lastName.props.value;
    employeeEntity.second_lastname = employee.secondLastName.props.value;
    employeeEntity.gender = employee.gender;
    employeeEntity.birth_date = employee.birthDate;
    if (employee.secondName) {
      console.log(employee.secondName);
      employeeEntity.second_name = employee.secondName.props.value;
    } else employeeEntity.second_name = undefined;
    return employeeEntity;
  }
}
