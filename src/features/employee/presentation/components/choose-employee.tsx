import { Checkbox } from "@/shared/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setEmployee } from "../../data/employee.slice";
import { EmployeeEntity } from "../../domain/employee.entity";

export const ChooseEmployee = memo((item: EmployeeEntity) => {
  const dispatch = useDispatch();
  const handleChecked = useCallback(
    (_: CheckedState) => {
      dispatch(setEmployee(item));
    },
    [item]
  );

  return (
    <Checkbox className="border-slate-400" onCheckedChange={handleChecked} />
  );
});
