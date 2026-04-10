import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { subscribeTodos, addTodo, deleteTodo } from "./firebase/todoService";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./components/Login";
import { logout } from "./firebase/authService";
import { auth } from "./firebase/firebase";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  // const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      subscribeTodos(user.uid, setTodos);
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setTodos([]);
    }
  }, [user]);

  

  if (loading) {
  return <p className="text-center py-8">Loading...</p>;
}

  return (
    <>
    
      <BrowserRouter>

      <Navbar user={user} logout={logout} />
     
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={<Profile user={user} logout={logout} />}
          />
          
          <Route
            path="/todos"
            element={
              <Todos
                todos={todos}
                setTodos={setTodos}
                title={title}
                setTitle={setTitle}
                addTodo={addTodo}
                deleteTodo={deleteTodo}
                user={user}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/"
            element={
              user ? (
                
                <div className="max-w-2xl mx-auto p-4">
                  
                 {!user ? <p>Loading... </p> : <Profile user={user} logout={logout} />}
                </div>
              ) : (
                <Login />
              )
            }
          />
        </Routes>
        <Footer />
        
      </BrowserRouter>
    </>
  );
}

export default App;