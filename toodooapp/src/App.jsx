import { useState, useEffect } from 'react';
import './App.css'
import { subscribeTodos, addTodo, deleteTodo } from './firebase/todoService';
import { onAuthStateChanged } from "firebase/auth";

import PostForm from './components/PostForm';
import TodoItem from './components/TodoItem';
import Login from './components/Login';
import { logout } from './firebase/authService';
import { auth } from './firebase/firebase';

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [user, setUser] =useState(null);


    useEffect(() => {
      subscribeTodos(setTodos);
    }, []);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      })
      return () => unsubscribe();
    }, []);

  return (
    <>
    {user ? (
      <div>
        <h1>Welcome {user.email}</h1>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <Login />
    )}
     
      <PostForm title={title} setTitle={setTitle} addTodo={() => addTodo(title) } />

      {todos.map(todo => (
        <TodoItem  key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
      ))}
    
    </>
  )
}

export default App;
