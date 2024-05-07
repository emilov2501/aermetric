import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EmployeeEntity } from "../domain/employee.entity";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }), // Change '/api' to your API base URL
  endpoints: (builder) => ({
    getEmployees: builder.query<EmployeeEntity[], void>({
      query: () => "/employees", // Endpoint for fetching all employees
    }),
    getEmployee: builder.query<EmployeeEntity, number>({
      query: (id) => `/employees/${id}`, // Endpoint for fetching a single employee by ID
    }),
    createEmployee: builder.mutation<EmployeeEntity, EmployeeEntity>({
      query: (newEmployee) => ({
        url: "/employees",
        method: "POST",
        body: newEmployee,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data: createdEmployee } = await queryFulfilled;

          dispatch(
            employeeApi.util.updateQueryData(
              "getEmployees",
              undefined,
              (draft) => {
                draft?.push(createdEmployee);
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    deleteEmployee: builder.mutation<void, number>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "DELETE",
      }),
    }),
    updateEmployee: builder.mutation<
      void,
      { id: number; data: EmployeeEntity }
    >({
      query: ({ id, data }) => ({
        url: `/employees/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetEmployeesQuery,
  useGetEmployeeQuery,
  useCreateEmployeeMutation,
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
} = employeeApi;
