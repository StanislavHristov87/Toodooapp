import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { subscribeTodos, addTodo, deleteTodo } from './firebase/todoService';
import { onAuthStateChanged } from "firebase/auth";
import PostForm from './components/PostForm';
import TodoItem from './components/TodoItem';
import Login from './components/Login';
import { logout } from './firebase/authService';
import { auth } from './firebase/firebase';
import { useNavigate } from "react-router-dom";
import Register from './components/Register';

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(null);

// const navigate = useNavigate();

    useEffect(() => {
      if (user) {
        subscribeTodos(user.uid, setTodos);
      }
      
    }, [user]);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      })
      return () => unsubscribe();
    }, []);

    useEffect(() => {
      if (!user) {
        setTodos([]);
      }
    }, [user]);

  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>

    <Route 
    path='/' element=
    {user ? (
      <div>
        <h1>Welcome {user.email}</h1>
        <button onClick={logout}>Logout</button>
      
      <PostForm 
      title={title} 
      setTitle={setTitle} 
      addTodo={() => addTodo(user.uid, title) } />
    {todos.map(todo => (
        <TodoItem  
        key={todo.id} 
        todo={todo} 
        deleteTodo={(id) => deleteTodo(user.uid, id)}
        />
      ))}

      </div>
    ) : (
      <Login />

    )}
    
    />
  
     
       </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App;
