"use client";

import React, { ReactNode } from "react";
import { EmployeeEntity } from "../domain/employee.entity";

interface EmployeeCardProps extends EmployeeEntity {
  after?: ReactNode;
  before?: ReactNode;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  email,
  age,
  department,
  position,
  after,
  before,
}) => {
  return (
    <div className="border rounded-md p-4 box-border flex flex-col gap-3">
      <div className="flex flex-col">
        <div className="flex items-start justify-between">
          <span className="text-lg font-medium">{name}</span>
          <div className="flex gap-3 items-center">
            {after}
            {before}
          </div>
        </div>
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
