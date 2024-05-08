"use client";

import {
  AddEmployee,
  DeleteChooseEmployees,
  EmployeeList,
  SearchEmployee,
  useEmployeeFilter,
} from "@/features/employee/presentation";

export default function Home() {
  const { filteredData } = useEmployeeFilter();

  return (
    <div className="container mx-auto space-y-5 p-5">
      <div className="flex gap-3 max-sm:flex-col">
        <AddEmployee />
        <DeleteChooseEmployees />
      </div>
      <SearchEmployee />
      <EmployeeList employees={filteredData} />
    </div>
  );
}
