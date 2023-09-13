
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setBookmarks]= useState([])

const handleAddToBookmark= blog =>{
 const newBookmarks = [...bookmarks, blog]
 setBookmarks(newBookmarks)
}

const [readingTime, setReadingTime]= useState(0)

const handleReadingTime = time =>{
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime)
}

  return (
    <>
      <Header></Header>
      <div className='md:flex p-4 gap-10'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
