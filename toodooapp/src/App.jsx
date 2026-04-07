import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { subscribeTodos, addTodo, deleteTodo } from "./firebase/todoService";
import { onAuthStateChanged } from "firebase/auth";
import PostForm from "./components/PostForm";
import TodoItem from "./components/TodoItem";
import Login from "./components/Login";
import { logout } from "./firebase/authService";
import { auth } from "./firebase/firebase";
import Register from "./components/Register";

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
      setUser(currentUser);
    });
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              user ? (
                 <div className="max-w-2xl mx-auto p-4">
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-bold text-gray-800">Welcome {user.email}</h1>
    <button 
      onClick={logout} 
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
  </div>

  <PostForm
    title={title}
    setTitle={setTitle}
    addTodo={() => addTodo(user.uid, title)}
    className="mb-6"
  />

  <div className="space-y-4">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        deleteTodo={(id) => deleteTodo(user.uid, id)}
        userId={user.uid}
      />
    ))}
  </div>
</div>

              ) : (
                <Login />
                
              )
              
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
