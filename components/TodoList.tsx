import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleTodo, deleteTodo, editTodo } from "../store/todoSlice";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
//import EditIcon from "@mui/icons-material/";
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  const dispatch = useDispatch();

  // const handleToggle = (todo: Todo) => {
  //   dispatch(toggleTodo(todo));
  // };
  const handleTodoToggle = (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      dispatch(toggleTodo({ ...todo, completed: !todo.completed }));
    }
  };
  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (todo: Todo, newTitle: string) => {
    dispatch(editTodo({ ...todo, title: newTitle }));
  };

  return (
    <List>
      {todos.length > 0 ? (
        todos?.map((todo: any, index: any) => (
          <ListItem key={todo.id}>
            <ListItemIcon>
              <Checkbox
                checked={todo.completed}
                onChange={() => handleTodoToggle(todo.id)}
                color="primary"
                data-testid={`checkbox-${index + 1}`}
              />
            </ListItemIcon>
            <ListItemText>
              <TextField
                value={todo.title}
                //onChange={(e) => handleEdit(todo, e.target.value)}
                fullWidth
                disabled={todo.completed ? true : false}
                data-testid="todo-item"
                multiline
              />
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={() => handleDelete(todo.id)}
                data-testid={`todo-item-${index + 1}-delete`}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      ) : (
        <h2>No Task Found...</h2>
      )}
    </List>
  );
};

export default TodoList;
