import { ref, set, push, onValue, remove, update } from "firebase/database";
import { db } from "./firebase";

// ➕ add todo
export const addTodo = (userUid, title) => {
  const todosRef = ref(db, `todos/${userUid}`);
  const newTodoRef = push(todosRef, { title });

  set(newTodoRef, {
    title: title,
    completed: false
  });
};

export const updateTodo = (userId, id, data) => {
    const todoRef = ref(db, `todos/${userId}/${id}`);
    return update(todoRef, data);
};

// 📥 get todos (realtime)
export const subscribeTodos = (userId, callback) => {
  const todosRef = ref(db, `todos/${userId}`);

  onValue(todosRef, (snapshot) => {
    const data = snapshot.val();

    if (data) {
      const todosArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      console.log(typeof callback);
      
      callback(todosArray); // 👈 това заменя setTodos
    } else {
      callback([]);
    }
  });
};

export const toggleTodo = (userId, id, completed) => {
  const todoRef = ref(db, `todos/${userId}/${id}`);
  return update(todoRef, {
    completed: !completed
  });
};

// ❌ delete todo
export const deleteTodo = (userId, id) => {
    console.log(userId, id);
  const todoRef = ref(db, `todos/${userId}/${id}`);
  console.log(userId, id);
  remove(todoRef);
};


//  export const userId = auth.currentUser.uid;
//  ref(db, `todos/${userId}`)