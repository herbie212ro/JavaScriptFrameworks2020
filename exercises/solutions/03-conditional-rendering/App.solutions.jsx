import React from "react";
import { todos } from "../src/data/todos";
import Todo from "../src/components/todos";

function App() {
  return (
    <div className="App">
      <Todo todos={todos} showCompleted={false} />
    </div>
  );
}

export default App;
