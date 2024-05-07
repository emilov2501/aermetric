import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import get from "lodash.get";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type UseEmployeeForm = z.infer<typeof formSchema>;

interface EmployeeFormProps {
  onSubmit: (data: UseEmployeeForm) => void;
  initialValues?: UseEmployeeForm;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  const form = useForm<UseEmployeeForm>({
    resolver: zodResolver(formSchema),
    values: {
      name: get(initialValues, "name", ""),
      email: get(initialValues, "email", ""),
      age: get(initialValues, "age", ""),
      position: get(initialValues, "position", ""),
      department: get(initialValues, "department", ""),
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        id="employee-form"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Johh Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="30" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="Developer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department</FormLabel>
              <FormControl>
                <Input placeholder="Development" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  age: z.coerce.string().min(2),
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  department: z.string().min(2, {
    message: "Department must be at least 2 characters.",
  }),
});
