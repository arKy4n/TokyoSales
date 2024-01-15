import React from "react";
import { useState } from "react";

import './App.css'

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username, password) {
            onLogin({ username, password });
        } else {
            alert('Please enter both username and password.')
        }
    };

    return (
        <div className="container">
            <h2>Manage your Account</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="inputContainer">
                    <p>User Name</p>
                    <input type="text" />
                </div>
                <div className="inputContainer">
                    <p>Password</p>
                    <input type="password" />
                </div>
                <div></div>
            </form>
        </div>
    );
};

export default Login;