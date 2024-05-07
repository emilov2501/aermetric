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
import { useCreateEmployeeMutation } from "../data/employee.api";
import { EmployeeForm } from "./employee-form";

export const AddEmployee = () => {
  const add = useCreateEmployeeMutation();

  return (
    <Dialog>
      <DialogTrigger>
        <Button asChild variant="secondary">
          <div className="flex gap-1 items-center uppercase">Add employee</div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Craete a new employee</DialogTitle>
        </DialogHeader>
        <EmployeeForm onSubmit={(data) => console.log(data)} />
        <DialogFooter>
          <Button type="submit" form="employee-form">
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
