import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1>My Movie App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link> {}
      </nav>
    </header>
  );
}

export default Header;
