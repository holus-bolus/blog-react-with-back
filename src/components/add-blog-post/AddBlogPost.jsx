import React, { useState } from 'react';
import {useOutletContext} from "react-router-dom";

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
        <div>
            <form>
                <div>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            value={image}
                            name="image" // Change the name to "image"
                            id="image"
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={title}
                            name="title" // Change the name to "title"
                            id="title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Post text:
                        <input
                            type="text"
                            value={text}
                            name="text" // Change the name to "text"
                            id="text"
                            onChange={(e) => setText(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button type="button" onClick={handleSubmit}>
                        Add Blog Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBlogPost;
