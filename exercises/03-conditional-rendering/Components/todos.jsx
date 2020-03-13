import React from "react";
​
function Todo(props) {
  const newTodos = props.todos.map(todo => {
    // console.log(props.showCompleted === todo.completed ? todo : null);
    console.log(props.showCompleted === todo.completed && todo);
  });
​
  return (
    <>
      {props.todos.map(todo => {
        return props.showCompleted === todo.completed ? (
          <p key={"todo-" + todo.id}>{todo.title}</p>
        ) : (
          undefined
        );
      })}
    </>
  );
}
​
export default Todo;