import {useState, useEffect} from 'react'
import { doc, updateDoc, deleteField } from "firebase/firestore";

export default function EditBlog() {
    

const cityRef = doc(db, 'cities', 'BJ');

// Remove the 'capital' field from the document
await updateDoc(cityRef, {
    capital: deleteField()
});
  return (
    
    <div className='flex flex-col gap-7 text-white p-40'>
      <h1 className='text-4xl uppercase'>{blog.title}</h1>
      <h1 className='text-xl'>{blog.content}</h1>
      <hr />
      <h3 className='text-lg'>{blog.author}</h3>
      <p className='text-green-600 capitalize'>{blog.status || "open now"}</p>
    </div>
  )

  BlogProject
}
