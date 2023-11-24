import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  // Using useState and useEffect directly for persistence
  const localStorageKey = 'savedTodoList';
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define a Promise to mimic asynchronous data fetching
    const fetchData = new Promise((resolve, reject) => {
      // Simulate a loading delay with setTimeout
      setTimeout(() => {
        // Resolve the Promise with an object containing the data
        resolve({ data: { todoList: [] } }); // Update todoList default state here
      }, 2000); // 2 seconds delay
    });

    // Use the Promise to set the state when the data is resolved
    fetchData
      .then((result) => {
        setTodoList(result.data.todoList);
        setLoading(false); // Set loading to false regardless of success or failure
      })
      .catch((error) => {
        console.error("error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency list to run the effect only once
  useEffect(() => {
    // Update localStorage only when the asynchronous fetch is complete
    if (!loading) {
      localStorage.setItem(localStorageKey, JSON.stringify(todoList));
    }
  }, [loading, todoList, localStorageKey]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {loading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}

      {/*<TodoList todoList={todoList} onRemoveTodo={removeTodo} /> */}

    </div>
  );
}

export default App;
