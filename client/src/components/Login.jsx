import { useEffect, useState } from "react";
import axios from "axios";

function Login({ togglePage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

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
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <p>
        Do not have an account? <button onClick={togglePage}>Sign Up</button>
      </p>
    </div>
  );
}

export default Login;
