import { useState } from "react";
import { register } from "../firebase/authService";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    handle: "",
    email: "",
    password: "",
  });


  // 👉 handle change (много важно)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 👉 register функция
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(form.email, form.password);
      alert("Registered успешно!");
    } catch (err) {
      alert(err.message);
    }

  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="firstName"
          type="text"
          placeholder="First name"
          value={form.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          value={form.lastName}
          onChange={handleChange}
        />

        <input
          name="handle"
          type="text"
          placeholder="Username"
          value={form.handle}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password (min 6)"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Register</button>

      </form>
    </div>
  );
};

export default Register;