import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../../Component/pages/Home'
import NewBlog from '../../Component/NewBlog'
import SingleBlog from '../../Component/SingleBlog'


export default function Router() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/add-new-blog" element = {<NewBlog/>} />
            <Route path="/single-blog" element = {<SingleBlog/>} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}
