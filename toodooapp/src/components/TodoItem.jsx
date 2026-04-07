
import PropTypes from 'prop-types';


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

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,

  deleteTodo: PropTypes.func.isRequired,
};