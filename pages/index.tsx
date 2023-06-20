import React from "react";
import { Container, Typography } from "@mui/material";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

const Home: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{ marginTop: "2rem" }}
      style={{
        background: "linear-gradient(45deg,#ffafbd,#ffc3a0)",
        minHeight: "90vh",
        paddingTop: "1%",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        <label style={{ color: "black", fontWeight: "900" }}>Todo</label>
        <label style={{ color: "blue", fontWeight: "900", marginLeft: "10px" }}>
          App
        </label>
      </Typography>
      <AddTodoForm />
      <h2>ToDo List</h2>
      <TodoList />
    </Container>
  );
};

export default Home;
