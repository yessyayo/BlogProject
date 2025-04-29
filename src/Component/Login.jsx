import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [person, setPerson] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getName = (e) => {
        setPerson(e.target.value);
    };

    const getNumber = (e) => {
        setNumber(e.target.value);
    };

    const getEmail = (e) => {
        setEmail(e.target.value);
    };

    const getPassword = (e) => {
        setPassword(e.target.value);
    };

    const submitData = (e) => {
        e.preventDefault();
        try {
            console.log({ person, number, email, password });
        } catch (error) {
            console.log(error, 'no such data');
        }
    };

    return (
        <div className='flex flex-col justify-center items-center bg-white w-full h-[100vh]'>
            <div className='flex gap-3 text-xl '>
                    <h1 className='cursor-pointer'><Link to={'/sign-in-blog'}>Login</Link></h1>
                <div className='flex flex-col justify-center items-center mb-3'>
                    <h1>Register</h1>
                    <hr className='w-10 border-2 border-blue-600'/>
                </div>
            </div>
            <div><hr className='w-20px border border-black mb-5'/></div>
            <div className='flex flex-col gap-5 w-[50%] shadow-2xl px-5 py-5'>
                <h1 className='text-2xl font-bold capitalize'>create account</h1>
                <form onSubmit={submitData} className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Full Name</label>
                        <input
                            className='border border-black rounded px-2 py-2'
                            type="text"
                            placeholder='Enter your full name'
                            value={person}
                            onChange={getName}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="number">Phone Number</label>
                        <input
                            className='border border-black rounded px-2 py-2'
                            type="text"
                            placeholder='Enter your phone number'
                            value={number}
                            onChange={getNumber}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input
                            className='border border-black rounded px-2 py-2'
                            type="email"
                            id='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={getEmail}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password">Password</label>
                        <input
                            className='border border-black rounded px-2 py-2'
                            type="password"
                            placeholder='Enter your password'
                            value={password}
                            onChange={getPassword}
                        />
                    </div>
                    <button
                        type='submit'
                        className='border border-black rounded bg-blue-600 w-full text-white text-lg px-2 py-2 capitalize'
                    >
                        <Link to={'/sign-in-blog'}> Create Account </Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
