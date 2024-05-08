import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EmployeeEntity } from "../../domain/employee.entity";

interface EmployeeState {
  search: string;
  filter_by: keyof EmployeeEntity;
  checked: Record<string, EmployeeEntity>;
}

const initialState: EmployeeState = {
  checked: {},
  search: "",
  filter_by: "name",
};

export const name = "employee";

export const employeeSlice = createSlice({
  name,
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setFilterBy(state, action: PayloadAction<keyof EmployeeEntity>) {
      state.filter_by = action.payload;
    },
    setEmployee(state, action: PayloadAction<EmployeeEntity>) {
      if (!state.checked[action.payload.id]) {
        state.checked[action.payload.id] = action.payload;
      } else {
        delete state.checked[action.payload.id];
      }
    },
  },
});

export const { setEmployee, setSearch, setFilterBy } = employeeSlice.actions;
export default employeeSlice.reducer;
