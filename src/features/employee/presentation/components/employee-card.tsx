"use client";

import React, { ReactNode } from "react";
import { EmployeeEntity } from "../../domain/employee.entity";

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
    <div className="border rounded-md p-4 box-border flex justify-between overflow-hidden gap-2">
      <div className="flex flex-col gap-3 w-[75%] truncate">
        <div className="flex flex-col">
          <span className="text-lg font-medium truncate">{name}</span>
          <small className="text-slate-500 truncate">{email}</small>
        </div>
        <ul className="text-sm">
          <li className="truncate">
            <strong className="font-medium">Age:</strong> {age}
          </li>
          <li className="truncate">
            <strong className="font-medium">Department:</strong>
            <span className="truncate">{department}</span>
          </li>
          <li className="truncate">
            <strong className="font-medium">Position:</strong>
            <span>{position}</span>
          </li>
        </ul>
      </div>
      <div className="h-full grow ">
        <div className="flex flex-col justify-between items-end h-full">
          {after}
          {before}
        </div>
      </div>
    </div>
  );
};
