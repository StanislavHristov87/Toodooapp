import { useState } from "react";
import { login } from "../firebase/authService";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate  =useNavigate();



    const handleLogin = async () => {



        try {
            await login(email, password)
        } catch (err) {
            console.error(err);
        }
        navigate('/');
    };

    
    return (
        <div>
            <h1>Login</h1>

            <input
            placeholder="Email"
            value={email}
            onChange={(e) => (setEmail(e.target.value))}
            />

            <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin} >Login</button>
            
       

        </div>
    );
};

export default Login;