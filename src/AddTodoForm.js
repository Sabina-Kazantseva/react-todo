// import React from "react";
function AddTodoForm(props) {
    function handleAddTodo(event) {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log("Todo Title ====>", todoTitle);
        event.target.reset();
        props.onAddTodo(todoTitle);
    }

    // Add a multi-line return statement with JSX
    return (
        <form onSubmit={handleAddTodo}>


            <input type="text" name="title" placeholder="New Todo" />

            {/* Create a submit button element with text "Add" */}
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
