import { ref, set, push, onValue, remove } from "firebase/database";
import { db } from "./firebase";

// ➕ add todo
export const addTodo = (title) => {
  const todosRef = ref(db, "todos");
  const newTodoRef = push(todosRef);

  set(newTodoRef, {
    title: title
  });
};

// 📥 get todos (realtime)
export const subscribeTodos = (callback) => {
  const todosRef = ref(db, "todos");

  onValue(todosRef, (snapshot) => {
    const data = snapshot.val();

    if (data) {
      const todosArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));

      callback(todosArray); // 👈 това заменя setTodos
    } else {
      callback([]);
    }
  });
};

// ❌ delete todo
export const deleteTodo = (id) => {
  const todoRef = ref(db, `todos/${id}`);
  remove(todoRef);
};

// export const userId = auth.currentUser.uid;
// ref(db, `todos/${userId}`)