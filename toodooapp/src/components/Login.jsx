import { useState } from "react";
import { login } from "../firebase/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(""); // reset error
    try {
      await login(email, password);
      navigate("/"); // след успешен login
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Login</h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Login
      </button>
    </div>
  );
};

export default Login;

// import { useState } from "react";
// import { login } from "../firebase/authService";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       await login(email, password);
//     } catch (err) {
//       console.error(err);
//     }
//     navigate("/");
//   };

//   return (
//     <div>
//       <h1>Login</h1>

//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
