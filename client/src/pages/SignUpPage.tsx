import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  function handleLogin(event){
    event.preventDefault();
    axios
      .put("http://localhost:5000/user/signUp", { username, password,name, address})
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <body className="body-container">
      <h1>Login</h1>
      <div className="item-container">
        <label className="form-label">Email address</label>

        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="item-container">
        <label className="form-label">Password</label>

        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="item-container">
        <label className="form-label">Name</label>

        <input
          type="text"
          name="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="item-container">
        <label className="form-label">Address</label>

        <input
          type="text"
          name="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Submit
      </button>
    </body>
  );
}

export default SignUp;
