import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import todoReducer, {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  Todo,
} from "./todoSlice";
import { RootState } from "./index";

describe("Todo Slice", () => {
  test("addTodo", () => {
    const initialState = {
      todos: [],
    };
    const newTodo: Todo = { id: 1, title: "New Todo", completed: false };
    const action = addTodo(newTodo);
    const nextState = todoReducer(initialState, action);

    expect(nextState.todos).toHaveLength(1);
    expect(nextState.todos[0]).toEqual(newTodo);
  });

  test(" toggleTodo- checkbox", () => {
    const initialState = {
      todos: [
        { id: 1, title: "Todo 1", completed: false },
        { id: 2, title: "Todo 2", completed: true },
      ],
    };
    const action = toggleTodo({ id: 1, title: "Todo 1", completed: false });
    const nextState = todoReducer(initialState, action);

    expect(nextState.todos[0].completed).toBe(true);
  });

  test(" deleteTodo", () => {
    const initialState = {
      todos: [
        { id: 1, title: "Todo 1", completed: false },
        { id: 2, title: "Todo 2", completed: true },
      ],
    };
    const action = deleteTodo(1);
    const nextState = todoReducer(initialState, action);

    expect(nextState.todos).toHaveLength(1);
    expect(nextState.todos[0].id).toBe(2);
  });

  test("editTodo", () => {
    const initialState = {
      todos: [
        { id: 1, title: "Todo 1", completed: false },
        { id: 2, title: "Todo 2", completed: true },
      ],
    };
    const editedTodo: Todo = {
      id: 1,
      title: "Updated Todo 1",
      completed: false,
    };
    const action = editTodo(editedTodo);
    const nextState = todoReducer(initialState, action);

    expect(nextState.todos[0]).toEqual(editedTodo);
  });
});
