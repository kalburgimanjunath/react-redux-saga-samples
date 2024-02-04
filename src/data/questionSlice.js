import { createSlice } from "@reduxjs/toolkit";
import { QUESTIONS } from "./questions";
const questionSlice = createSlice({
  name: "questions",
  initialState: [],
  reducers: {
    addQuestions: (state, action) => {
      return [...state, action.payload];
    },
    removeQuestions: (state, action) => {
      return (state = [...state, action.payload]);
    },
    loadQuestions: (state) => {
      return [...state, ...QUESTIONS];
    },
  },
});
export const { addQuestions, removeQuestions, loadQuestions } =
  questionSlice.actions;
export default questionSlice.reducer;
