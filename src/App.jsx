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

  return (

    <>
      <Suspense fallback={<h3>Data is loading... Please wait !</h3>}>
        <Navbar></Navbar>
        <div className='flex text-center gap-1.5'>
          <div className='w-[70%] border-[1px] border-amber-100'>
            <Blogs handleBookmark={handleBookmark}></Blogs>
          </div>
          <div className='w-[30%] border-[1px] border-amber-100'>
            <Bookmark bookmark={bookmark}></Bookmark>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default App
