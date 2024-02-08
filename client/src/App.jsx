import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Account } from "./pages/Account";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/Login" Component={Login} />
        <Route path="/SignUp" Component={SignUp} />
        <Route path="/Account" Component={Account} />
      </Routes>
    </Router>
  );
}

export default App;
