import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/">Add Book</Link>
            <Link className='nav-link' to="/">Show Book</Link>
        </nav>
    );
};

export default Navbar;