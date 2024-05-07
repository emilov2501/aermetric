"use client";

import { useAppDispatch, useAppSelector } from "@/config/store";
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

import { useCallback, useMemo, useState } from "react";
import { useDeleteEmployeeMutation } from "../data/employee.api";
import { setEmployee } from "../data/employee.slice";

export const DeleteChooseEmployees = () => {
  const [open, setOpen] = useState(false);
  const { checked } = useAppSelector((state) => state.employee);
  const dispatch = useAppDispatch();
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const items = useMemo(() => Object.values(checked), [checked]);

  const handleDelete = useCallback(() => {
    items.forEach((item) => {
      deleteEmployee(item.id);
      dispatch(setEmployee(item));
    });

    setOpen(false);
  }, [items]);

  const disabled = useMemo(() => {
    return items.every((item) => !checked[item.id]);
  }, [items]);

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger
        disabled={disabled}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 uppercase px-4 h-9 truncate"
      >
        Delete Employees
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Do you really want to delete theese records? This process cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button onClick={handleDelete} variant="destructive">
            Delete {items.length} items
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
