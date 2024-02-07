import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">

          <Link to="/home">Home</Link>
          <Link to="/home/login">Login</Link>
          <Link to="/home/signUp">SignUp</Link>
    </div>
  );
};

export default Navbar;
