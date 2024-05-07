import { useAppDispatch, useAppSelector } from "@/config/store";
import { Button } from "@/shared/ui/button";
import { useCallback } from "react";
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

  return (
    <Button
      asChild
      variant="destructive"
      className="cursor-pointer"
      onClick={handleDelete}
    >
      <div className="flex gap-1 items-center uppercase"> Delete Employees</div>
    </Button>
  );
};
