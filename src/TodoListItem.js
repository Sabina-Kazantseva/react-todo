function TodoListItem(props) {
    console.log("word ====> ", props);
    return (

        <li>
            {props.task.title}
        </li>


    );
}

export default TodoListItem;















// function TodoListItem() {

// }

// export default TodoListItem