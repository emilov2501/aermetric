"use client";

import { useAppDispatch } from "@/config/store";
import { Input } from "@/shared/ui/input";
import { ChangeEvent } from "react";
import { setSearch } from "../store/employee.slice";

export const SearchEmployee = () => {
  const dispatch = useAppDispatch();

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return <Input placeholder="Search" onChange={search} />;
};
