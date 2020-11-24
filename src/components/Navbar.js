import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar">
            <h2>ProjectHunt</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to='/showcase'>Showcase</Link>
                <Link to='/login'>Login</Link>
            </div>

        </header>
    );
}

export default Navbar;