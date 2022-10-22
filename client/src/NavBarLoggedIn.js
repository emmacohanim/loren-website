import React from "react";
import { Link } from "react-router-dom";

function NavBarLoggedIn() {
  return (
    <div>
      <nav id="nav-bar-logged-in">
        <Link className="link-logged-in" to="/my-account">My Account</Link>
        <Link className="link-logged-in" to="/log-out">Log Out</Link>
      </nav>
    </div>
  );
}
export default NavBarLoggedIn;
