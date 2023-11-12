import React from 'react';

function TodoListItem({ task, onRemoveTodo }) {
    const handleRemove = () => {
        onRemoveTodo(task.id);
    };

    return (

        <li>
            {task.title}
            <button type="button" onClick={handleRemove}>
                Remove
            </button>

        </li>


    );
}

export default TodoListItem;















// function TodoListItem() {

// }

// export default TodoListItem