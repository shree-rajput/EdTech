import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex h-5 bg-amber-100 justify-between items-center w-full">
        <Link to="/register">Register</Link>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
}

export default Navbar;
