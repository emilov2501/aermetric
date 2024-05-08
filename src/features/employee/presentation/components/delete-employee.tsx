"use client";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useDeleteEmployeeMutation } from "../../data/employee.api";
import { EmployeeEntity } from "../../domain/employee.entity";

export const DeleteEmployee = (item: EmployeeEntity) => {
  const [open, setOpen] = useState(false);
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const handleDelete = async () => {
    const employee = await deleteEmployee(item.id).unwrap();

    if (employee) {
      setOpen(false);
    }
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger>
        <Trash2
          size={20}
          strokeWidth={1}
          className="text-slate-400 cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Do you really want to delete this employee? This process cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button onClick={handleDelete} variant="destructive">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
