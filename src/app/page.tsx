"use client";

import {
  AddEmployee,
  DeleteChooseEmployees,
  EmployeeList,
  SearchEmployee,
  SelectFilter,
  useEmployeeFilter,
} from "@/features/employee/presentation";
import { ScrollArea } from "@/shared/ui/scroll-area";

export default function Home() {
  const { filteredData } = useEmployeeFilter();

  return (
    <div className="container h-screen mx-auto space-y-5 p-5">
      <div className="flex gap-3 max-sm:flex-col">
        <AddEmployee />
        <DeleteChooseEmployees />
      </div>
      <SearchEmployee
        before={
          <SelectFilter className="shadow-none border-r-0 rounded-r-none" />
        }
      />
      <ScrollArea className="rounded-md h-[calc(100vh-200px)] overflow-auto border p-4">
        <EmployeeList employees={filteredData} />
      </ScrollArea>
    </div>
  );
}
