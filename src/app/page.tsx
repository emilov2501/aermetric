"use client";

import { useGetEmployeesQuery } from "@/features/employee/data/employee.repository.impl";
import { EmployeeList } from "@/features/employee/presentation/employee-list";

export default function Home() {
  const { data = [] } = useGetEmployeesQuery();

  return (
    <div className="container mx-auto px-5">
      <EmployeeList employees={data} />
    </div>
  );
}
