import React, { useEffect, useState } from 'react'
import image from '../assets/b2.jpg'
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/fireStoreData';
import { Link, useNavigate } from 'react-router-dom';





export default function Section() {
    const navigate = useNavigate();

    const [data, setData] = useState([])

    const getAllBlogs = async () =>{
        let blogList = []
        const allDocs = await getDocs(collection(db, "Blog_DB"));
            allDocs.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                const aBlog = {
                    id: doc.id,
                    img: doc.data().img,
                    title: doc.data().title,
                    content: doc.data().content,
                    author: doc.data().author,
                }

                blogList.push(aBlog)
            }
        );
        setData(blogList)
    }

    useEffect(()=>{
        getAllBlogs()
    }, [])


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white px-20 py-20'>
        
        {data.map((item)=>(
            
        <div className='flex flex-col border rounded'>
        <img src={item.img} alt="" />
        <div className='flex flex-col px-10 py-10 gap-4'>
            <div className='flex flex-col gap-4'>
                <h1 className='font-bold text-lg'>{item.title}</h1>
                <p className='text-sm'>
                    {item.content}

                    <Link to='/single-blog' className='text-xs text-blue-400 cursor-pointer pl-2'> [read more]</Link>

                </p>
            </div>

            <hr/>

            <div className='flex justify-between items-center shadow sh'>
                <h1>{item.author}</h1>
                <div className=''>
                    <i className={`pi pi-pencil mr-5 px-3 py-3 rounded-full bg-blue-400 `}></i>
                    <i className={`pi pi-trash mr-5 px-3 py-3 rounded-full bg-red-400`}></i>
                </div>
            </div>
        </div>
    </div>
        ))}
    </div>
  )
}
