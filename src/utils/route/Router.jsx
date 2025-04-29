import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../../Component/pages/Home'
import NewBlog from '../../Component/NewBlog'
import SingleBlog from '../../Component/SingleBlog'
import EditBlog from '../../Component/EditBlog'
import Login from '../../Component/Login'
import Signin from '../../Component/Signin'


export default function Router() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/add-new-blog" element = {<NewBlog/>} />
            <Route path="/edit-blog/:id" element = {<EditBlog/>} />
            <Route path="/single-blog/:id" element = {<SingleBlog/>} />
            <Route path="/login-blog" element = {<Login/>} />
            <Route path="/sign-in-blog" element = {<Signin/>} />

         </Routes>
      </BrowserRouter>
    </div>
  )
}
