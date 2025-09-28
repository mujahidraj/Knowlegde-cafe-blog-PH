import { Suspense, useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/NavBar/Navbar'
import Bookmark from './Components/Bookmark/Bookmark'

function App() {

  const [bookmark, setBookmark] = useState([])

  const handleBookmark = (blog) => {
    
    setBookmark([...bookmark,blog])

  }

  const [readingTime , setReadingTime] =useState(0)

  const handleReadingTime =(time , id)=>{
    setReadingTime(readingTime+time)
    handleRemoveFromBookmark(id)
  }

  const handleRemoveFromBookmark =(id)=> {
    const remainingBookmark = bookmark.filter(mark=>mark.id !==id)
    return setBookmark(remainingBookmark)
  }

  return (

    <>
      <Suspense fallback={<h3>Data is loading... Please wait !</h3>}>
        <Navbar></Navbar>
        <div className='flex text-center gap-1.5'>
          <div className='w-[70%] mx-2 '>
           <Suspense fallback={<p>Data are loading</p>}> <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs></Suspense>
          </div>
          <div className='w-[30%] mx-2 '>
            <Bookmark bookmark={bookmark} readingTime={readingTime}></Bookmark>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default App
