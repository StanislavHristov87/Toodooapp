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