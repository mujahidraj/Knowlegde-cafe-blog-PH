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

  const handleReadingTime =(time)=>{
    setReadingTime(readingTime+time)
    
  }

  return (

    <>
      <Suspense fallback={<h3>Data is loading... Please wait !</h3>}>
        <Navbar></Navbar>
        <div className='flex text-center gap-1.5'>
          <div className='w-[70%] border-[1px] border-amber-100'>
            <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
          </div>
          <div className='w-[30%] border-[1px] border-amber-100'>
            <Bookmark bookmark={bookmark} readingTime={readingTime}></Bookmark>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default App
