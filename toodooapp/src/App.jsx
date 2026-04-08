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

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
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
                  <Profile />
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
