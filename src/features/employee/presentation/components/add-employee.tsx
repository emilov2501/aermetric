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
import { useState } from "react";
import uuid from "uuid-int";
import { useCreateEmployeeMutation } from "../../data/employee.api";
import { EmployeeForm, UseEmployeeForm } from "./employee-form";

const generator = uuid(0);

export const AddEmployee = () => {
  const [open, setOpen] = useState(false);

  const [createEmployee] = useCreateEmployeeMutation();

  const onSubmit = async (data: UseEmployeeForm) => {
    const payload = await createEmployee({
      ...data,
      age: +data.age,
      id: +generator.uuid(),
    }).unwrap();

    if (payload) {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button asChild variant="secondary" className="max-sm:w-full">
          <div className="flex gap-1 items-center uppercase truncate">
            Add employee
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new employee</DialogTitle>
        </DialogHeader>
        <EmployeeForm onSubmit={onSubmit} />
        <DialogFooter>
          <Button type="submit" form="employee-form">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
