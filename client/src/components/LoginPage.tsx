import React, { useState } from "react";
import axios from 'axios';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async ()=>{

        alert(username + "_" + password);
    
        axios
          .post("http://localhost:5000/login", { username, password })
          .then((res) => {
            console.log(res.status);
            console.log(res.data);
          })
          .catch((err) => console.log(err));

    }

    return (
        <body className="body-container">
            <h1>Login</h1>
            <div className='item-container'>
            <label className="form-label">Email address</label>

            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='item-container'>
            <label className="form-label">Password</label>

            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button type="button" className="btn btn-primary" onClick={() => {handleLogin}}>Submit</button>

            <p>{username}</p>
            <p>{password}</p>
        </body>
    );
}

export default Login;