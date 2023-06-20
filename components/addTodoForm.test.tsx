import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import AddTodoForm from "./AddTodoForm";
describe("AddTodoForm", () => {
  const mockStore = configureStore([]);
  test("renders the form correctly", async () => {
    const initialState = {
      todos: {
        todos: [],
      },
    };
    const mockFetchAlbums = jest.fn();
    const store = mockStore(initialState);
    store.dispatch = mockFetchAlbums;

    render(
      <Provider store={store}>
        <AddTodoForm />
      </Provider>
    );

    const inputElement = screen.getByRole("textbox", { name: "New Todo" });
    expect(inputElement).toBeInTheDocument();

    const addButtonElement = screen.getByRole("button");
    expect(addButtonElement).toBeInTheDocument();
    expect(addButtonElement).toBeDisabled();
  });
});
