import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-purple-600 text-white md:pl-24 md:pr-24 p-4 shadow flex flex-row mx-auto flex-wrap">
            <Link to="/">
                <div className="flex">
                    <span role="img" aria-label="magnifying-glass" className="m-1">🔍</span>
                    <h2 className="font-semibold md:text-2xl text-lg ml-22">ProjectHunt</h2>
                </div>
            </Link>
            <div className="ml-auto md:text-lg text-sm font-medium flex flex-wrap items-center  justify-center">
                <Link to='/showcase'><span className="m-2">Showcase</span></Link>
                <Link to='/login'><span className="m-2 border-2 p-1 rounded hover:bg-purple-500">Login</span></Link>
            </div>

        </header>
    );
}

export default Navbar;