import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
    return (
        <div className='mx-auto'>
            <div className="card bg-base-100 shadow-sm my-4 border-[1px] border-slate-300">
                <figure>
                    <img
                        src={blog.cover} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{blog.title}</h2>
                    <div>
                        <div className="author flex items-center  max-sm:gap-4 justify-between py-3">
                            <div className='flex max-sm:flex-col items-center gap-2'>
                                <img className='w-14 hover:w-20 duration-400 rounded-[100%]' src={blog.author_img} alt="" />
                                <p className='text-lg max-w-20 font-bold'>{blog.author}</p>
                            </div>
                            <FaBookmark onClick={() => handleBookmark(blog)} className='border-[1px] p-2 rounded-4xl hover:bg-blue-500 duration-200 active:bg-blue-900 ' size={40} />
                            <p className='text-sm max-w-30'>Duration : {blog.reading_time} Mins</p>
                        </div>
                        <div>
                            {blog.hashtags.map(hashtag => <button className='mx-1 my-1 bg-slate-300 text-black px-2 py-1 hover:bg-slate-500 duration-200 rounded-lg'>{hashtag}</button>)}
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleReadingTime(blog.reading_time , blog.id)} className="btn btn-primary">Mark as Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;


