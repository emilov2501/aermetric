"use client";

import React from "react";
import { EmployeeEntity } from "../../domain/employee.entity";
import { ChooseEmployee } from "./choose-employee";
import { DeleteEmployee } from "./delete-employee";
import { EditEmployee } from "./edit-employee";
import { EmployeeCard } from "./employee-card";

interface Props {
  employees: EmployeeEntity[];
}

export const EmployeeList: React.FC<Props> = ({ employees }) => {
  if (employees.length === 0) {
    return (
      <p className="text-muted-foreground text-center">
        Oops, employees not found!
      </p>
    );
  }

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-5">
      {employees.map((item) => (
        <EmployeeCard
          key={item.id}
          before={<ChooseEmployee {...item} />}
          after={
            <div className="flex gap-2 items-center">
              <EditEmployee {...item} />
              <DeleteEmployee {...item} />
            </div>
          }
          {...item}
        />
      ))}
    </div>
  );
};
