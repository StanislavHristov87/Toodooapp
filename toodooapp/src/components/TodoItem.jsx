const TodoItem = ({ todo, deleteTodo }) => {

    return (
        <div>
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>
                Delete todo
            </button>
        </div>
    );
};

export default TodoItem;