"use client";

import { useGetEmployeesQuery } from "@/features/employee/data/employee.api";
import { AddEmployee } from "@/features/employee/presentation/add-employee";
import { DeleteChooseEmployees } from "@/features/employee/presentation/delete-choose-employees";
import { EmployeeList } from "@/features/employee/presentation/employee-list";

export default function Home() {
  const { data = [] } = useGetEmployeesQuery();

  return (
    <div className="container mx-auto space-y-5 p-5">
      <div className="flex gap-3">
        <AddEmployee />
        <DeleteChooseEmployees />
      </div>
      <EmployeeList employees={data} />
    </div>
  );
}
