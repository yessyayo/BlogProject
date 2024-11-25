import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center pr-20 pl-20 px-5 py-5 shadow shadow-gray-400 bg-[#111827] text-white'>
      <h1 className='font-bold text-xl'>MY-<span className='text-red-600'>Blog</span></h1>
      <div>
        <ul className='flex gap-10'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/add-new-blog'>NewBlog</Link></li>
        </ul>
      </div>
    </div>
  )
}
  