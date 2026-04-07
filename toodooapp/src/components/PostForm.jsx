import PropTypes from "prop-types";

const PostForm = ({ title, setTitle, addTodo }) => {
  return (
    <form onSubmit={addTodo}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task"
      />

      <button type="submit" disabled={!title}>
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
