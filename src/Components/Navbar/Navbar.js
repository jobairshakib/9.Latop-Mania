import React from 'react';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    const { pathname } = useLocation();
    return (
        <nav>
            <div className='link-container'>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>HOME</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/reviews'>REVIEWS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/dashboard'>DASHBOARD</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blogs'>BLOGS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/about'>ABOUT</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;