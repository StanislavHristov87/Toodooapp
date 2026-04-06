import { useState } from "react";
import { login, register } from "../firebase/authService";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await login(email, password)
        } catch (err) {
            console.error(err);
        }
    };

    const handleRegister = async () => {
        try {
            await register(email, password);
        } catch (err) {
            console.error(err);
            
        }
    };

    
    return (
        <div>
            <h1>Login</h1>

            <input
            placeholder="Email"
            value={email}
            onChange={() => (setEmail(email.target.value))}
            />

            <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin} >Login</button>
            <button onClick={handleRegister} >Register</button>


        </div>
    );
};

export default Login;