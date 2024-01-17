import { useState, useEffect, useRef } from 'react';
import InputWithLabel from './InputWithLabel';
import style from './AddTodoForm.module.css';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState("");
    const inputRef = useRef(null);

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

export default AddTodoForm;