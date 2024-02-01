import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Style
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(username + "_" + password);

    axios
      .post("http://localhost:5000/user/login", { username, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>

      <p>
        Do not have an account?{" "}
        <button>
          <Link to="/SignUp"> SignUp </Link>
        </button>
      </p>
    </>
  );
}

export default Login;
