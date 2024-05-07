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
import { EmployeeEntity } from "../domain/employee.entity";
import { EmployeeForm } from "./employee-form";

export const EditEmployee = (employee: EmployeeEntity) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Edit size={20} className="text-slate-400 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit {employee.name}</DialogTitle>
        </DialogHeader>
        <EmployeeForm
          onSubmit={(data) => console.log(data)}
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
