import React, { Suspense, useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark , handleReadingTime}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json').then(res => res.json()).then(data => setBlogs(data))
    }, [])


    return (
        <div>
            <h4 className='text-xl font-bold '>Blogs in this site {blogs.length}</h4>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>{blogs.map(blog =>
                <Suspense fallback={<h2>Data are loading...please wait...</h2>}><Blog key={blog.id} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} blog={blog}></Blog></Suspense>
            )}</div>
        </div>
    );
};

export default Blogs;