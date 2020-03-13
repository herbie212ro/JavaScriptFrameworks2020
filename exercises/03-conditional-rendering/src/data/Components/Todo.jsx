import React from "react";

const Todo = ({ todos, showCompleted }) => {
  return todos.map((todo, index) => {
    if (showCompleted && todo.completed) {
      return <p>{todo.title}</p>;
    }
    if (!showCompleted && !todo.completed) {
      return <p>{todo.title}</p>;
    }
  });
};

export default Todo;
