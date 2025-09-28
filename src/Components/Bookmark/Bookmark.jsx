import React from 'react';

const Bookmark = ({bookmark ,readingTime}) => {

    

    return (
        <div className='mx-2'>
            <h2>Reading time : {readingTime} Mins</h2>
            <h2>Bookmarked : {bookmark.length} Blogs</h2>
            <hr />
           <div className='list-disc'>
             {bookmark.map(booked=>
             <div className='flex lg:flex-row md:flex-col sm:flex-col item-center text-left gap-3 my-4'>
                <img className='w-30' src={booked.cover}/>
                <p className='font-bold'>{booked.title}</p>
             </div>
             )}
             </div>
             
        </div>
    );
};

export default Bookmark;