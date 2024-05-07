import React from "react";
import { EmployeeEntity } from "../domain/employee.entity";

export const EmployeeCard: React.FC<EmployeeEntity> = ({ name, email }) => {
  return (
    <div className="">
      <div className="flex flex-col">
        <span className="text-lg">{name}</span>
        <small>{email}</small>
      </div>
    </div>
  );
};
