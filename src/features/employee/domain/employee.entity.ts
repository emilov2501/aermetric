export type EmployeeID = number;

export interface EmployeeEntity {
  id: EmployeeID;
  email: string;
  name: string;
  age: number;
  position: string;
  department: string;
}
