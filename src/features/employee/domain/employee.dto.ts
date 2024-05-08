import { EmployeeEntity } from "./employee.entity";

export interface FilterEmployeeDto {
  filter: Partial<EmployeeEntity>;
}
