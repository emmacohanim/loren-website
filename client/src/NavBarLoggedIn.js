import React from "react";
import { Link } from "react-router-dom";

function NavBarLoggedIn({handleLogOutClick}) {
  return (
    <div>
      <nav id="nav-bar-logged-in">
        <Link className="link-logged-in" to="/log-out" onClick={handleLogOutClick}>Log Out</Link>
        <Link className="link-logged-in" to="/my-account">My Account</Link>
      </nav>
    </div>
  );
}
export default NavBarLoggedIn;
