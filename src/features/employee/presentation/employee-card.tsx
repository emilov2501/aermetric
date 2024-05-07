import React from "react";
import { EmployeeEntity } from "../domain/employee.entity";

export const EmployeeCard: React.FC<EmployeeEntity> = ({ name, email }) => {
  return (
    <div className="border rounded-md p-4 box-border">
      <div className="flex flex-col">
        <span className="text-lg font-medium">{name}</span>
        <small className="text-slate-500">{email}</small>
      </div>
    </div>
  );
};
