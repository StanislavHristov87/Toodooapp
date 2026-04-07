import PropTypes from "prop-types";
import { useState } from "react";
import { updateTodo } from "../firebase/todoService";

const TodoItem = ({ todo, deleteTodo, userId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setMewTitle] = useState(todo.title);

  const handleSave = () => {
    updateTodo(userId, todo.id, { title: newTitle });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setMewTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.title}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
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
  userId: PropTypes.string.isRequired,
};
