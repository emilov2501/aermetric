"use client";

import { useAppDispatch, useAppSelector } from "@/config/store";
import { Button } from "@/shared/ui/button";
import { useCallback, useMemo } from "react";
import { useDeleteEmployeeMutation } from "../data/employee.api";
import { setEmployee } from "../data/employee.slice";

export const DeleteChooseEmployees = () => {
  const { checked } = useAppSelector((state) => state.employee);
  const dispatch = useAppDispatch();
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const handleDelete = useCallback(() => {
    const items = Object.values(checked);
    items.forEach((item) => {
      deleteEmployee(item.id);
      dispatch(setEmployee(item));
    });
  }, [checked]);

  const disabled = useMemo(() => {
    const items = Object.values(checked);
    return items.every((item) => !checked[item.id]);
  }, [checked]);

  return (
    <Button
      variant="destructive"
      disabled={disabled}
      className="cursor-pointer"
      onClick={handleDelete}
    >
      <div className="flex gap-1 items-center uppercase"> Delete Employees</div>
    </Button>
  );
};
