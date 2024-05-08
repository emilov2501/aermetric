"use client";

import { useGetEmployeesQuery } from "@/features/employee/data/employee.api";
import {
  AddEmployee,
  DeleteChooseEmployees,
  EmployeeList,
} from "@/features/employee/presentation";

export default function Home() {
  const { data = [] } = useGetEmployeesQuery();

  return (
    <div className="container mx-auto space-y-5 p-5">
      <div className="flex gap-3 max-sm:flex-col">
        <AddEmployee />
        <DeleteChooseEmployees />
      </div>
      <EmployeeList employees={data} />
    </div>
  );
}
