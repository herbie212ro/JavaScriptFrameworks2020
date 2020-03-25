import React from "react";
import { todos } from "./data/todos";
import Todo from "./data/Components/Todo";

// import something
// import another thing

function App() {
  console.log(todos);
  return (
    <div className="App">
      {<Todo todos={todos} showCompleted={false}></Todo>}
    </div>
  );
}

export default App;
