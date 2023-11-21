import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root.jsx";
import Blog from "./components/blog/Blog.jsx";
import About from "./components/about/About.jsx";
import AddBlogPost from "./components/add-blog-post/AddBlogPost.jsx";
import {useState} from "react";


function App() {
    const [posts, setPosts] = useState([])
    const addBlogPost = (post) => {
        setPosts([...posts, post])
    }

    const router = createBrowserRouter([
        {
            path: '/', element: <Root posts={posts} onAddBlogPost={addBlogPost}/>, children: [
                {path: '/', index: true, element: <h1>Home</h1>},
                {path: '/blog', element: <Blog/>},
                {path: '/about', element: <About/>},
                {path: '/add-blog-post', element: <AddBlogPost/>}
            ]
        },
    ])
    return <RouterProvider router={router}/>
}

export default App;
