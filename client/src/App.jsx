import React from "react";
import { useState } from "react";

import Login from './Login';
import SignUp from './SignUp';

const App = () => {
  const handleLogin = (credentials) => {
    console.log('Logging in with: ', credentials);
  };

  return (
    <div className="container">
      <h1>My App</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default App;