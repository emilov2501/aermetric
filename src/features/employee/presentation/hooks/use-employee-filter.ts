import { useAppSelector } from "@/config/store";
import { useGetEmployeesQuery } from "../../data/employee.api";

export const useEmployeeFilter = () => {
  const query = useAppSelector((state) => state.employee.search);

  const { data = [] } = useGetEmployeesQuery({
    filter: { name: query },
  });

  return {
    filteredData: data,
  };
};
