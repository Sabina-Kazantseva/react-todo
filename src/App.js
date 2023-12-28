import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  // Using useState and useEffect directly for persistence
  const localStorageKey = 'savedTodoList';
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define the fetchData function
  const fetchData = async () => {
    // Declare an empty object variable named options
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
      }
    };
    // Create a new variable url
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    try {
      // Add a const response that awaits fetch.
      const response = await fetch(url, options);

      // Add a conditional statement that throws a new Error if response.ok is false.
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      // Declare a variable, data, that awaits a parsed version of response
      const data = await response.json();
      // Make a console statement that prints out the data variable
      console.log('Airtable API Response:', data);
      // Declare another variable, todos
      const todos = data.records.map(record => ({
        title: record.fields.title,
        id: record.id
      }));

      // Console.log the todos array
      // console.log('Transformed Todos:', todos);

      // Set the application's todoList by passing the todos to setTodoList
      setTodoList(todos);

      // Use setIsLoading to set isLoading to false
      setLoading(false);
    } catch (error) {
      // In the catch block, create a console statement that logs the error's message
      console.error('Fetch Error:', error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    // Define a Promise to mimic asynchronous data fetching
    const fetchData = new Promise((resolve, reject) => {
      // Simulate a loading delay with setTimeout
      setTimeout(() => {
        // Resolve the Promise with an object containing the data
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
          },
        }); // Update todoList default state here
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {loading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
            </div>
          }
        />
        <Route
          path="/new"
          element={
            <div>
              <h1>New Todo List</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;