import { useGetEmployeesQuery } from "../../data/employee.api";

export const useEmployeeFilter = () => {
  const { data = [] } = useGetEmployeesQuery();

  return {
    filteredData: data,
  };
};
