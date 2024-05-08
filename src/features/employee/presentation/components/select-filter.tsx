import { useAppDispatch } from "@/config/store";
import { cn } from "@/shared/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import React, { HTMLProps } from "react";
import { EmployeeEntity } from "../../domain/employee.entity";
import { setFilterBy } from "../store/employee.slice";

interface SelectFilterProps extends HTMLProps<HTMLDivElement> {}

export const SelectFilter: React.FC<SelectFilterProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  return (
    <Select
      onValueChange={(value) =>
        dispatch(setFilterBy(value as keyof EmployeeEntity))
      }
    >
      <SelectTrigger className={cn("w-auto", className)}>
        <SelectValue placeholder="Name" />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

type Option = {
  value: keyof EmployeeEntity;
  label: string;
};

const options: Option[] = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "email",
    label: "Email",
  },
  {
    value: "age",
    label: "Age",
  },
  {
    value: "position",
    label: "Position",
  },
  {
    value: "department",
    label: "Department",
  },
];
