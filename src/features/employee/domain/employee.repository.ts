import { EmployeeEntity } from "./employee.entity";

export interface EmployeeRepository {
  getEmployees(): EmployeeEntity[];
  getEmployee(): EmployeeEntity;
  createEmployee(): void;
  deleteEmployee(): void;
  updateEmployee(): void;
}
