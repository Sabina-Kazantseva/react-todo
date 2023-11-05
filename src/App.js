import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'; // Import the AddTodoForm component
import React, { useState, useEffect } from 'react';

function useSemiPersistentState(key, initialState) {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem(key);
    return savedState ? JSON.parse(savedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
function App() {

  const [todoList, setTodoList] = useSemiPersistentState('savedTodoList', []);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }


  return (
    <>
      <div>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} />
      </div>
    </>
  );
}
export default App;

