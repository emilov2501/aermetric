"use client";

import React from "react";
import { EmployeeEntity } from "../domain/employee.entity";
import { EmployeeCard } from "./employee-card";

interface Props {
  employees: EmployeeEntity[];
}

export const EmployeeList: React.FC<Props> = ({ employees }) => {
  return (
    <div>
      {employees.map((item) => (
        <EmployeeCard key={item.id} {...item} />
      ))}
    </div>
  );
};
