/* eslint-disable react/prop-types */
import { useState } from "react";
import PostForm from "./PostForm";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Todos = ({title, setTitle, addTodo, deleteTodo, todos, user, setUser }) => {

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, ( currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [setUser]);

    if (loading) return <p>Loading...</p>
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