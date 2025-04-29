import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

  const [userInfo, setUserInfo] = useState({})



  useEffect(()=>{
    const item = localStorage.getItem('userInfo')
    if (item) {
      // console.log(JSON.parse(item));
      setUserInfo(JSON.parse(item))
    } 
    
  }, [userInfo])

  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center pr-20 pl-20 px-5 py-5 shadow shadow-gray-400 bg-green-500 text-white'>
      <h1 className='font-bold text-xl'>MY-<span className='text-red-600'>Blog</span></h1>
      <div>
              
            {
              userInfo?.username ?
              (
                <ul className='flex gap-10'>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/add-new-blog'>NewBlog</Link></li>
                </ul>
              )
              :
              (
                <ul className='flex gap-10'>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/sign-in-blog'>Login</Link></li>
                  <li><Link to='/login-blog'>Register</Link></li>
                </ul>
              )
            }
      </div>
    </div>
  )
}
  

