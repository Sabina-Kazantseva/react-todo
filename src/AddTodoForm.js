// import React from "react";
function AddTodoForm() {
    // Add a multi-line return statement with JSX
    return (
        <form>
            {/* Create a label element with text "Title" */}
            <label htmlFor="todoTitle">Title</label>

            {/* Create a text input element with id "todoTitle" */}
            <input type="text" id="todoTitle" />

            {/* Create a submit button element with text "Add" */}
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
