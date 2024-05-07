import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EmployeeEntity } from "../domain/employee.entity";

interface EmployeeState {
  checked: Record<string, EmployeeEntity>;
}

const initialState: EmployeeState = {
  checked: {},
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployee(state, action: PayloadAction<EmployeeEntity>) {
      if (!state.checked[action.payload.id]) {
        state.checked[action.payload.id] = action.payload;
      } else {
        delete state.checked[action.payload.id];
      }
    },
  },
});

export const { setEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
