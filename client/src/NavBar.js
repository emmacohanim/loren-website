import React from "react";
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <nav id="navbar">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/services">Services</Link>
                <Link className="link" to="/subscriptions">Purchase Subscription</Link>
                <Link className="link" to="/contact">Contact</Link>
            </nav>
        </>
    )
}
export default NavBar