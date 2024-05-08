"use client";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Edit } from "lucide-react";
import { useState } from "react";
import { useUpdateEmployeeMutation } from "../../data/employee.api";
import { EmployeeEntity } from "../../domain/employee.entity";
import { EmployeeForm, UseEmployeeForm } from "./employee-form";

export const EditEmployee = (employee: EmployeeEntity) => {
  const [open, setOpen] = useState(false);

  const [updateEmployee] = useUpdateEmployeeMutation();

  const onSubmit = async (data: UseEmployeeForm) => {
    const payload = await updateEmployee({
      data: {
        ...data,
        age: +data.age,
        id: employee.id,
      },
      id: employee.id,
    }).unwrap();

    if (payload) {
      setOpen(false);
    }
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger>
        <Edit size={20} className="text-slate-400 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit {employee.name}</DialogTitle>
        </DialogHeader>
        <EmployeeForm
          onSubmit={onSubmit}
          initialValues={{
            ...employee,
            age: employee.age.toString(),
          }}
        />
        <DialogFooter>
          <Button type="submit" form="employee-form">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
