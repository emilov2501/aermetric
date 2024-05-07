"use client";

import React from "react";
import { EmployeeEntity } from "../domain/employee.entity";
import { EmployeeCard } from "./employee-card";

interface Props {
  employees: EmployeeEntity[];
}

export const EmployeeList: React.FC<Props> = ({ employees }) => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-5">
      {employees.map((item) => (
        <EmployeeCard key={item.id} {...item} />
      ))}
    </div>
  );
};
