import { useState } from "react";
import { register } from "../firebase/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    handle: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(form.email, form.password, form.firstName, form.firstName, form.handle);
      alert("Registered successfully!");
      navigate("/login"); // след успешна регистрация
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Register</h1>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          value={form.firstName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          value={form.lastName}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="handle"
          type="text"
          placeholder="Username"
          value={form.handle}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="password"
          type="password"
          placeholder="Password (min 6)"
          value={form.password}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="py-2 bg-green-500 text-white rounded hover:bg-green-600 transition mt-2"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
// import { useState } from "react";
// import { register } from "../firebase/authService";

// const Register = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     handle: "",
//     email: "",
//     password: "",
//   });


//   // 👉 handle change (много важно)
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   // 👉 register функция
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await register(form.email, form.password);
//       alert("Registered успешно!");
//     } catch (err) {
//       alert(err.message);
//     }

//   };

//   return (
//     <div>
//       <h1>Register</h1>

//       <form onSubmit={handleSubmit}>

//         <input
//           name="firstName"
//           type="text"
//           placeholder="First name"
//           value={form.firstName}
//           onChange={handleChange}
//         />

//         <input
//           name="lastName"
//           type="text"
//           placeholder="Last name"
//           value={form.lastName}
//           onChange={handleChange}
//         />

//         <input
//           name="handle"
//           type="text"
//           placeholder="Username"
//           value={form.handle}
//           onChange={handleChange}
//         />

//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Password (min 6)"
//           value={form.password}
//           onChange={handleChange}
//         />

//         <button type="submit">Register</button>

//       </form>
//     </div>
//   );
// };

// export default Register;