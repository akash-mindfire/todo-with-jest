import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, Todo } from "../store/todoSlice";
import { TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddTodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        title: title.trim(),
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", color: "white" }}>
        <TextField
          label="New Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          autoFocus
          autoComplete="off"
          style={{ fontWeight: "600" }}
        />
        <IconButton
          type="submit"
          disabled={title.trim() === ""}
          style={{ cursor: "pointer" }}
        >
          <AddIcon style={{ color: "black", fontWeight: "800" }} />
        </IconButton>
      </div>
    </form>
  );
};

export default AddTodoForm;
