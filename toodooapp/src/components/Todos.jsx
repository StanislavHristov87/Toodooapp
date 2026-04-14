/* eslint-disable react/prop-types */
import { useState } from "react";
import PostForm from "./PostForm";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Todos = ({
  title,
  setTitle,
  addTodo,
  deleteTodo,
  todos,
  user,
  setUser,
}) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [setUser]);

  const filteredTodos = todos
    .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
    .filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    });

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search for task"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-11 p-2 border rounded w-full mb-4"
        />
      </div>
      <div className=" mt-5 mb-12 flex gap-2 mb-4">
  <button onClick={() => setFilter("all")} className="px-3 py-1 bg-green-500 rounded">
    All
  </button>

  <button onClick={() => setFilter("active")} className="px-3 py-1 bg-green-500 rounded">
    Active
  </button>

  <button onClick={() => setFilter("completed")} className="px-3 py-1 bg-green-500 rounded">
    Completed
  </button>
</div>

      {
        <>
          <PostForm
            title={title}
            setTitle={setTitle}
            addTodo={() => addTodo(user.uid, title)}
            className="mb-6"
          />
          <div className="space-y-4">
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={(id) => deleteTodo(user.uid, id)}
                userId={user.uid}
              />
            ))}
          </div>
        </>
      }
    </div>
  );
};

export default Todos;
