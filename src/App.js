import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'; // Import the AddTodoForm component

function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <TodoList />
      {/* Use the AddTodoForm component below the heading */}
      <AddTodoForm />
    </div>
  );
}
export default App;

