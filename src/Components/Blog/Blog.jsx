import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog,handleBookmark }) => {
    return (
        <div className='mx-auto'>
            <div className="card bg-base-100 shadow-sm border-[1px] border-slate-300">
                <figure>
                    <img
                        src={blog.cover} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{blog.title}</h2>
                    <div>
                        <div className="author flex items-center justify-around py-3">
                            <img className='w-14 rounded-4xl' src={blog.author_img} alt="" />
                            <p className='text-lg max-w-20 font-bold'>{blog.author}</p>
                                <FaBookmark onClick={()=>handleBookmark(blog)} size={25}/>

                        </div>
                        <div>
                            {blog.hashtags.map(hashtag=><button className='mx-1 my-1 bg-slate-300 text-black px-2 py-1 rounded-lg'>{hashtag}</button>)}
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Mark as Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;


