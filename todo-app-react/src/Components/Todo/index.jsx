import React from "react";
import AddTodo from "./AddTodo";
import SearchTodo from "./SearchTodo";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <AddTodo />
      <SearchTodo />
      <TodoItem />
      <TodoList />
    </>
  );
};

export default Todo;
