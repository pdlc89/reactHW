import React from "react";
import "./Navbar.css";


const Navbar = props => (
    <nav className="navbar">
        <div id="title">
            <h1><a href="/">Memory Game</a></h1>
        </div>
        <ul>
            <li>
                <h4>Click on every Image Once and ONLY ONCE to Win!</h4>
            </li>
            <li>
                Score: {props.count}/<b>10</b>
            </li>
        </ul>
    </nav>
);

export default Navbar;