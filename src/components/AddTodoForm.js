import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import style from './AddTodoForm.module.css';
import PropTypes from 'prop-types'; // Import PropTypes

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("");

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle); //  Update todoTitle state
    }
    function handleAddTodo(event) {
        event.preventDefault();
        const newTodo = {
            title: todoTitle,
            id: Date.now(), // : Generate a unique id
        };
        onAddTodo(newTodo); //  Pass an object with title and id
        setTodoTitle(""); // Reset todoTitle state
    }


    // Add a multi-line return statement with JSX
    return (
        <form onSubmit={handleAddTodo} className={style.formContainer}>
            <div className={style.inputContainer}>
                <InputWithLabel
                    placeholder='enter a todo title...'
                    id="todoTitle"
                    value={todoTitle}
                    onInputChange={handleTitleChange}
                    type="text"
                    autoFocus
                >
                    Title
                </InputWithLabel>
            </div>

            <button type="submit" className={style.submitButton}>
                Add
            </button>
        </form>
    );
}
// Define propTypes for AddTodoForm
AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};


export default AddTodoForm;