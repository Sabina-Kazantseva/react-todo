import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'; // Import the AddTodoForm component
import React, { useState } from 'react';


function App() {
  const [newTodo, setNewTodo] = useState("");
  function handleAddTodo(todoTitle) {
    setNewTodo(todoTitle);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <AddTodoForm onAddTodo={handleAddTodo} />
      <p>New Todo: {newTodo}</p>
    </div>
  );
}
export default App;

