import React, {useState} from 'react';
import {Link, useOutletContext} from "react-router-dom";
import AddBlogPost from "../add-blog-post/AddBlogPost.jsx";

const Blog = () => {
    const { posts } = useOutletContext();
    return (
        <div>
            <h2>Blog</h2>
            <ul>
                {posts&&posts.map((post, index) => (
                    <li key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                    </li>
                ))}
            </ul>
            <Link to={'/add-blog-post'} className={'link'}>Add the new blog post</Link>
        </div>
    );
};

export default Blog;
