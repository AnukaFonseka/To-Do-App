import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ ...action.payload, id: Date.now(), completed: false });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, content } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.content = content;
      }
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
