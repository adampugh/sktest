import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';


const Navbar = () => (
    <nav className="navbar">
        <Link to="/">
            <img src={Logo} alt="logo" />
        </Link>
    </nav>
);

export default Navbar;