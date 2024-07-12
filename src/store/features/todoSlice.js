import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filteredData: [],
  search: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action) {
      state.todos.push(action.payload);
      state.filteredData = [...state.todos];
    },
    remove(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleChecked(state, action) {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
    updateTodo(state, action) {
      const todo = state.todos.find((item) => item.id === action.payload.id);

      if (todo) {
        todo.name = action.payload.name;
        todo.price = action.payload.price;
      }
    },
    search(state, action) {
      state.search = action.payload;
    },

    filter(state, action) {
      const { payload } = action;
      if (payload === "asc") {
        state.todos.sort((a, b) => a.price - b.price);
      } else if (payload === "des") {
        state.todos.sort((a, b) => b.price - a.price);
      } else if (payload === "reset") {
        console.log(state.todos);
        state.todos = [...state.filteredData];
      }
    },
  },
});

export const { add, remove, toggleChecked, updateTodo, search, filter } =
  todoSlice.actions;

export default todoSlice.reducer;
