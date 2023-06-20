import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import store from "./index";
import { addTodo, toggleTodo, deleteTodo } from "./todoSlice";

describe("Redux Store", () => {
  test("should have correct initial state", () => {
    const initialState = store.getState();

    expect(initialState.todo.todos).toEqual([]);
  });

  test("addTodo task", () => {
    const todo = { id: 1, title: "Todo 1", completed: false };

    store.dispatch(addTodo(todo));

    const newState = store.getState();

    expect(newState.todo.todos).toHaveLength(1);
    expect(newState.todo.todos[0]).toEqual(todo);
  });

  test("toggleTodo action-checkbox", () => {
    const initialState = {
      todo: {
        todos: [{ id: 1, title: "Todo 1", completed: false }],
      },
    };
    const store = configureStore({
      reducer: { todo: todoReducer },
      preloadedState: initialState,
    });

    store.dispatch(toggleTodo({ id: 1, title: "Todo 1", completed: true }));

    const newState = store.getState();

    expect(newState.todo.todos[0].completed).toBe(true);
  });

  test("deleteTodo", () => {
    const initialState = {
      todo: {
        todos: [{ id: 1, title: "Todo 1", completed: false }],
      },
    };
    const store = configureStore({
      reducer: { todo: todoReducer },
      preloadedState: initialState,
    });

    const todoId = 1;

    store.dispatch(deleteTodo(todoId));

    const newState = store.getState();

    expect(newState.todo.todos).toHaveLength(0);
  });
});
