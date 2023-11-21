import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";

const AddBlogPost = () => {
    const { onAddBlogPost } = useOutletContext();
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = () => {
        const newBlogPost = {
            image,
            title,
            text,
        };
        onAddBlogPost(newBlogPost);
        setImage('');
        setTitle('');
        setText('');
    };

    return (
        <div className="container mt-4">
            <form>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Post text:</label>
                    <textarea
                        className="form-control"
                        id="text"
                        rows="3"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                    Add Blog Post
                </button>
            </form>
        </div>
    );
};

export default AddBlogPost;
