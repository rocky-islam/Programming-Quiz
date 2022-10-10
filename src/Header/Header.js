import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/statistic'>Statistics</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
        </div>
    );
};

export default Header;