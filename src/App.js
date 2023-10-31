import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'; // Import the AddTodoForm component
import React, { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([]);
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}
export default App;

