import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action) {
      state.todos.push(action.payload);
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
  },
});

export const { add, remove, toggleChecked, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
