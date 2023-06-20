import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";
import { deleteTodo, toggleTodo } from "../store/todoSlice";

const mockStore = configureMockStore([]);
let store = mockStore();
describe("TodoList", () => {
  beforeEach(() => {
    const initialState = {
      todo: {
        todos: [
          { id: 1, title: "Todo 1", completed: false },
          { id: 2, title: "Todo 2", completed: true },
        ],
      },
    };
    store = mockStore(initialState);
  });
  it("should toggle todo", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    const checkbox = within(getByTestId("checkbox-1")).getByRole("checkbox");
    // const checkbox = getByTestId(`checkbox-1`)
    console.log(checkbox);
    fireEvent.click(checkbox);
    const actions = store.getActions();
    console.log(actions);

    expect(store.getActions()).toEqual([
      toggleTodo({
        id: 1,
        title: "Todo 1",
        completed: true,
      }),
    ]);
  });

  test("renders list of todos", async () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    const todoItems = screen.getAllByTestId("todo-item");
    await screen.findByText("Todo 1");
    expect(screen.getByText("Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
    expect(todoItems).toHaveLength(2);
  });
  test("delete todo item", () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    const deleteButton = screen.getByTestId("todo-item-1-delete");
    fireEvent.click(deleteButton);
    expect(store.getActions()[0]).toEqual(deleteTodo(1));
  });
});
