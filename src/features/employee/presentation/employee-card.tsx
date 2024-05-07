import React from "react";
import { EmployeeEntity } from "../domain/employee.entity";

export const EmployeeCard: React.FC<EmployeeEntity> = ({
  name,
  email,
  age,
  department,
  position,
}) => {
  return (
    <div className="border rounded-md p-4 box-border flex flex-col gap-3">
      <div className="flex flex-col">
        <span className="text-lg font-medium">{name}</span>
        <small className="text-slate-500 truncate">{email}</small>
      </div>
      <ul className="text-sm">
        <li>
          <strong className="font-medium">Age:</strong> {age}{" "}
        </li>
        <li>
          <strong className="font-medium">Department:</strong> {department}{" "}
        </li>
        <li>
          <strong className="font-medium">Position:</strong> {position}{" "}
        </li>
      </ul>
    </div>
  );
};
