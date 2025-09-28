import React from 'react';

const Bookmark = ({bookmark}) => {

    

    return (
        <div className='mx-2'>
            <h2>Reading time : 0</h2>
            <h2>Bookmarked Count : {bookmark.length}</h2>
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