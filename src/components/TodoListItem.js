import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types'; // Import PropTypes

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
// Define propTypes for TodoListItem
TodoListItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string,
    }).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};
export default TodoListItem;
