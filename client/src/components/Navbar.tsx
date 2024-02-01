import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home/login">Login</Link>
        </li>
        <li>
          <Link to="/home/signUp">SignUp</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
