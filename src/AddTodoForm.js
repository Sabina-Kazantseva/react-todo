import React, { useState } from 'react';

// import React from "react";
function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState(""); // Step 3: Create todoTitle state

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle); // Step 3: Update todoTitle state
    }
    function handleAddTodo(event) {
        event.preventDefault();
        const newTodo = {
            title: todoTitle,
            id: Date.now(), // Step 3: Generate a unique id
        };
        onAddTodo(newTodo); // Step 3: Pass an object with title and id
        setTodoTitle(""); // Step 3: Reset todoTitle state
    }


    // Add a multi-line return statement with JSX
    return (
        <form onSubmit={handleAddTodo}>


            <input type="text" name="title" placeholder="New Todo" value={todoTitle} onChange={handleTitleChange} />

            {/* Create a submit button element with text "Add" */}
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
