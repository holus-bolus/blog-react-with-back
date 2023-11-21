
import React from 'react';
import MainNavigation from "../components/MainNavigation.jsx";
import { Outlet } from "react-router-dom";

const Root = ({ posts, onAddBlogPost }) => {
    return (
        <div>
            <MainNavigation/>
            <main>
                <Outlet context={{ posts, onAddBlogPost }} />
            </main>
        </div>
    );
};

export default Root;
