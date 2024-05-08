"use client";

import { useAppDispatch, useAppSelector } from "@/config/store";
import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";
import React, { ChangeEvent, ReactNode } from "react";
import { setSearch } from "../store/employee.slice";

interface SearchEmployeeProps {
  before?: ReactNode;
}

export const SearchEmployee: React.FC<SearchEmployeeProps> = ({ before }) => {
  const dispatch = useAppDispatch();
  const filterBy = useAppSelector((state) => state.employee.filter_by);

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="flex gap-0">
      {before}
      <Input
        className={cn(before && "shadow-none border-l-0 rounded-l-none ")}
        placeholder={`Search by ${filterBy}`}
        onChange={search}
      />
    </div>
  );
};
