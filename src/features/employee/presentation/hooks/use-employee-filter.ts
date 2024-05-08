import { useAppSelector } from "@/config/store";
import { useGetEmployeesQuery } from "../../data/employee.api";

export const useEmployeeFilter = () => {
  const { search: query, filter_by } = useAppSelector(
    (state) => state.employee
  );

  const { data = [] } = useGetEmployeesQuery({
    filter: { [filter_by]: query },
  });

  return {
    filteredData: data,
  };
};
