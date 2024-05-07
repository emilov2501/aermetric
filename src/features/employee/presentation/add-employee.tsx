import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Plus } from "lucide-react";
import { useCreateEmployeeMutation } from "../data/employee.api";

export const AddEmployee = () => {
  const add = useCreateEmployeeMutation();

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <div className="flex gap-1 items-center uppercase">
            <Plus size={18} />
            Add Employee
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
