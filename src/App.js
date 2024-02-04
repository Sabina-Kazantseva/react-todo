import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TodoContainer />
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