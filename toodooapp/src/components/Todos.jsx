/* eslint-disable react/prop-types */
import PostForm from "./PostForm";
import TodoItem from "./TodoItem";

const Todos = ({title, setTitle, addTodo, user, deleteTodo, todos }) => {
    return (
        <div>
             {console.log(user.uid)}
            { <>
            <PostForm
                title={title}
                setTitle={setTitle}
                addTodo={() => addTodo(user.uid, title)}
               
                
                className="mb-6" /><div className="space-y-4">
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={(id) => deleteTodo(user.uid, id)}
                            userId={user.uid} />

                    ))}
                </div>
                </> }
        </div>
          
        
    )
}

export default Todos;