import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/Home"> Home </Link>
        <Link to="/Login"> Login </Link>
        <Link to="/SignUp"> SignUp </Link>
        <Link to="/Account"> Account </Link>
        <Link to="Upload"> Upload </Link>
      </div>
    </div>
  );
};
