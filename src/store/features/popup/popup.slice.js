import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeePopUp: false,
  deletePopUp: false,
};
export const popUpSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openEmployeePopup: (state, action) => {
      state.employeePopUp = action.payload ?? true; // if we are editing the employee then we need the information on it and otherwise we simply open the pop up for creation of new employee
    },

    closeEmployeePopUP: (state, action) => {
      state.employeePopUp = false;
    },
    openDeletePopUp: (state, action) => {
      state.deletePopUp = action.payload ?? true;
    },
    closeDeletePopUp: (state, action) => {
      state.deletePopUp = false;
    },
  },
});

export const {
  openEmployeePopup,
  closeEmployeePopUP,
  closeDeletePopUp,
  openDeletePopUp,
} = popUpSlice.actions;

export default popUpSlice.reducer;
