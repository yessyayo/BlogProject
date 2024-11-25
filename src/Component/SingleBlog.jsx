import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from '../utils/fireStoreData'; 

export default function SingleBlog() {

  const [blog, setBlog] = useState('');
  const getSingleBlog = async () =>{
      const allBlogs = doc(db, "Blog_DB", "FbX2prFsbsc6DatmftzT");

      try {
        const aBlog = await getDoc(allBlogs);

        if (aBlog.exists()) {
          setBlog(aBlog.data()); 
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.error("Error fetching document:", err);
      } 

      }

useEffect(() =>{
    getSingleBlog()  
})

  return (
    <div className='flex flex-col gap-7 text-white p-40'>
      <h1 className='text-4xl uppercase'>{blog.title}</h1>
      <h1 className='text-xl'>{blog.content}</h1>
      <hr />
      <h3 className='text-lg'>{blog.author}</h3>
      <p className='text-green-600 capitalize'>{blog.status || "open now"}</p>
    </div>
  );
}

