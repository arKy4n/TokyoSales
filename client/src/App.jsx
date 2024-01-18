import { useEffect, useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const togglePage = () => {
    setIsLogin((prev) => !prev);
  };

  useEffect(() => {
    console.log("Component has re-rendered");
  }, []);

  return (
    <div>
      <h1>My Site</h1>
      {isLogin ? (
        <Login togglePage={togglePage} />
      ) : (
        <SignUp togglePage={togglePage} />
      )}
    </div>
  );
}

export default App;
