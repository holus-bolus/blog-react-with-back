import React from 'react';
import {NavLink} from "react-router-dom";

const MainNavigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;