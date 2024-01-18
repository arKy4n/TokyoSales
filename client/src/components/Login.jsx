import { useEffect, useState } from "react";

function Login({ togglePage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [combinedValue, setCombinedValue] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    alert(username + "_" + password);
    return false;
  }

  useEffect(() => {
    setCombinedValue(`${username}_${password}`);
  }, [username, password]);

  return (
    <div>
      <h1>Login Page</h1>
      <form action="" onSubmit={onSubmit}>
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
