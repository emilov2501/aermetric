import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EmployeeEntity } from "../../domain/employee.entity";

interface EmployeeState {
  search: string;
  checked: Record<string, EmployeeEntity>;
}

const initialState: EmployeeState = {
  checked: {},
  search: "",
};

export const name = "employee";

export const employeeSlice = createSlice({
  name,
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
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

export const { setEmployee, setSearch } = employeeSlice.actions;
export default employeeSlice.reducer;
