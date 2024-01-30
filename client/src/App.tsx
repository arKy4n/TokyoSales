import React from "react";
import Login from "./pages/LoginPage";
import HomePage from "./pages/HomiePage";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUpPage";
// App.js

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" Component={HomePage} />
        <Route path="/home/login" Component={Login} />
        <Route path="/home/signup" Component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;
