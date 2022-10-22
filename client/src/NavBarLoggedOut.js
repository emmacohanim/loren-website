import React from "react";
import { Link } from "react-router-dom";

function NavBarLoggedOut() {
  return (
    <div>
      <nav id="nav-bar-logged-out">
        <Link className="link-logged-out" to="/log-in">Log In</Link>
        <Link className="link-logged-out" to="/sign-up">Sign Up</Link>
      </nav>
    </div>
  );
}
export default NavBarLoggedOut;
