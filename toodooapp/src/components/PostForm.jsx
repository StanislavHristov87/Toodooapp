// import PropTypes from "prop-types";

// const PostForm = ({ title, setTitle, addTodo }) => {
//   return (
//     <form onSubmit={addTodo}>
//       <input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Add a task"
//       />

//       <button type="submit" disabled={!title}>
//         Add todo
//       </button>
//     </form>
//   );
// };

// export default PostForm;

// PostForm.propTypes = {
//   title: PropTypes.string.isRequired,
//   setTitle: PropTypes.func.isRequired,
//   addTodo: PropTypes.func.isRequired,
// };
import PropTypes from "prop-types";

const PostForm = ({ title, setTitle, addTodo }) => {
  return (
    <form onSubmit={addTodo}>
      <input
      className="px-5 py-2 text-white rounded hover:bg-blue-600 transition shadow"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task"
      />

      <button 
      className="px-5 py-2 bg-blue-500 mt-6 mb-16 ml-6 rounded hover:bg-blue-600 transition shadow"
       type="submit" 
       disabled={!title}>
        Add todo
      </button>
    </form>

  );
};

export default PostForm;

PostForm.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};
