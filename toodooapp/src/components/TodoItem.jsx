import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { updateTodo , toggleTodo } from "../firebase/todoService";

const TodoItem = ({ todo, deleteTodo, userId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  useEffect(() => {
  setNewTitle(todo.title || "");
}, [todo]);

  const handleSave = () => {
    if (newTitle.trim() === "") return; // не оставяй празен
    updateTodo(userId, todo.id, { title: newTitle });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 dark:bg-blue-500 p-3 rounded shadow">
     <input 
     type="checkbox"
     checked={todo.completed}
     onChange={() => toggleTodo(userId, todo.id, todo.completed)}
     />
     
      {isEditing ? (
        <div className="flex items-center gap-2 flex-1">
          <input
            className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Save
          </button>
          <button
            onClick={() => { setIsEditing(false); setNewTitle(todo.title); }}
            className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
         <span
            className={`flex-1 ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >{todo.title}</span>
          
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

// import PropTypes from "prop-types";
// import { useState } from "react";
// import { updateTodo } from "../firebase/todoService";

// const TodoItem = ({ todo, deleteTodo, userId }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newTitle, setNewTitle] = useState(todo.title);

//   const handleSave = () => {
//     updateTodo(userId, todo.id, { title: newTitle });
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <>
//           <input
//             value={newTitle}
//             onChange={(e) => setNewTitle(e.target.value)}
//           />
//           <button onClick={handleSave}>Se</button>
//         </>
//       ) : (
//         <>
//           <span>{todo.title}</span>
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//         </>
//       )}

//       <button onClick={() => deleteTodo(todo.id)}>Delete todo</button>
//     </div>
//   );
// };

// export default TodoItem;

// TodoItem.propTypes = {
//   todo: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,

//   deleteTodo: PropTypes.func.isRequired,
//   userId: PropTypes.string.isRequired,
// };
