"use client";

import { useGetEmployeesQuery } from "@/features/employee/data/employee.api";
import { AddEmployee } from "@/features/employee/presentation/add-employee";
import { EmployeeList } from "@/features/employee/presentation/employee-list";

export default function Home() {
  const { data = [] } = useGetEmployeesQuery();

  return (
    <div className="container mx-auto space-y-5 p-5">
      <AddEmployee />
      <EmployeeList employees={data} />
    </div>
  );
}
