import React from 'react';
import {Link} from "react-router-dom";

const NavTwo = () => {
    return (
        <ul className="mainmenu">
            <li><Link to="/work-experience">My Work Experience</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
        </ul>
    )
}
export default NavTwo;
