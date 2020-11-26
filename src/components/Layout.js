import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
    return (
        <div className="bg-gray-50">
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout;