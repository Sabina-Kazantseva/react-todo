import React from 'react';
import style from './TodoListItem.module.css';

function TodoListItem({ task, onRemoveTodo }) {
    const handleRemove = () => {
        onRemoveTodo(task.id);
    };

    return (
        <li className={style.removeButton}>
            {task.title}
            <button type="button" onClick={handleRemove}>
                Remove
            </button>
        </li>
    );
}

export default TodoListItem;
