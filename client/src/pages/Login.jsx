import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../provider/authProvider";

// Style
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setToken } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();

    alert(username + "_" + password);

    axios
      .post("http://localhost:5000/user/login", { username, password })
      .then((res) => {
        const { success, message, token } = res.data;
        // console.log(token);
        setToken(token);
        navigate("/Account");
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
        <input type="submit" value="Login" />
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
