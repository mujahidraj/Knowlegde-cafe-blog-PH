import React, { Suspense, useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark , handleReadingTime}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json').then(res => res.json()).then(data => setBlogs(data))
    }, [])


    return (
        <div>
            <h4>Total Blog : {blogs.length}</h4>
            <div className='grid grid-cols-2 gap-5'>{blogs.map(blog =>
                <Suspense fallback={<h2>Data are loading...please wait...</h2>}><Blog key={blog.id} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} blog={blog}></Blog></Suspense>
            )}</div>
        </div>
    );
};

export default Blogs;