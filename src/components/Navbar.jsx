import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-700 text-white p-4">
      <Link to="/">Hem</Link>
      <Link to="/favorites" className="ml-4">
        Favoriter
      </Link>
    </nav>
  );
}

export default Navbar;
