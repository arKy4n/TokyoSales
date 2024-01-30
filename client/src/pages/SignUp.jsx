function SignUp() {
  return (
    <>
      <h1>Create a new Account</h1>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="usename" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <input type="submit" value="Submit" />
      <p>
        Already have an account?
        <button>Login</button>
      </p>
    </>
  );
}

export default SignUp;
