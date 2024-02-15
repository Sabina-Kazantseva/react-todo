import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import RemoveTodoIcon from './RemoveTodoIcon';
import styles from "./TodoListItem.module.css"

function TodoListItem({ task, onRemoveTodo }) {
    const handleRemove = () => {
        onRemoveTodo(task.id);
    };

    return (
        <li className={styles.listItem}>
            <p className={styles.listTitle}>{task.title}</p>
            <button aria-label="remove todo" type="button" onClick={handleRemove} className={styles.removeButton} >
                {/* <span>Remove</span> */}
                <RemoveTodoIcon className={styles.removeIcon} />
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
