import React from 'react';

const todoList = [
  { id: 1, title: "complete assigment" },
  { id: 2, title: "go for a walk" },
  { id: 3, title: "go shopping" },
];
function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((task) => {
          return (
            <li key={task.id}>
              {task.title}
            </li>
          )
        })}
      </ul>
    </div>
  );
}
export default App;

