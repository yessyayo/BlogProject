import React, { useId, useState } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import data from '../data/userData.json';
import { toast } from 'react-toastify';


export default function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const getUsername = (e) =>{
        setUsername(e.target.value);
    }

    const getPassword = (e) =>{
        setPassword(e.target.value);
    }

    const submitData = (e) => {
        e.preventDefault();
        // try {
        //     console.log({ username, password });
        // } catch (error) {
        //     console.log(error, 'no such data');
        // }

        try{
            data.forEach((userItem, index)=>{
                if (username.toLowerCase() === userItem.username.toLowerCase() && password === userItem.password) {
                    console.log(index, '=>', userItem);
                    toast.success('Login successful')
                    localStorage.setItem('userInfo', JSON.stringify(userItem))
                    return (navigate('/'))
                }                
            })
            // toast.error('Invalid Credential')

        } catch (err){

        }
    };

    
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={submitData}
        action=""
        className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4"
      >
        <div className='flex justify-center gap-3 text-xl '>
                <div className='flex flex-col cursor-pointer justify-center items-center mb-3'>
                    <h1><Link to={'/sign-in-blog'}>Login</Link></h1>
                    <hr className='w-10 border-2 border-blue-600'/>
                </div>
                <h1><Link to={'/login-blog'}>Register</Link></h1>
            </div>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={username}
          onChange={getUsername}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={password}
          onChange={getPassword}
        />
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
