import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from '../utils/fireStoreData'
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [blog, setBlog] = useState(
    {
      title :'',
      author:'',
      content:'',
      img:'',
    }
  );

  const navigate = useNavigate();
  const blogId = useParams()

  const editImage = (e) => {
    setImage(e.target.value);
  };

  const bindAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const bindContent = (e) => {
    setContent(e.target.value);
  };

  const bindTitleValue = (e) => {
    setTitle(e.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault()
    const BLOG = doc(db, "Blog_DB", blogId.id);
    console.log(blogId.id, "the id");
    

    try{
      const res = await updateDoc(BLOG, {
        img: image,
        title: title,
        content: content,
        author: author
      });
    } catch (err){
    }

    navigate(`/single-blog/${blogId.id}`)

    // Set the "capital" field of the city 'DC'
   
    // e.preventDefault(); 
    // const payload = {
    //   title: title,
    //   author: author,
    //   content: content,
    //   img: image,
    // };

    // try {
    //   const docRef = await addDoc(collection(db, "Blog_DB"), payload); 
    //   console.log("Document written with ID: ", docRef.id);
    //   // navigate(`/single-blog/${docRef.id}`); 
    // } catch (err) {
    //   console.log(`Error occurred: ${err}`);
    // }
  };


  const getSingleBlog = async () =>{
    const BLOG = doc(db, "Blog_DB", blogId.id);

    try {
      const aBlog = await getDoc(BLOG);
      if (aBlog.exists()) {
        setAuthor(aBlog.data().author); 
        setContent(aBlog.data().content); 
        setTitle(aBlog.data().title); 
        setImage(aBlog.data().img); 
        
      } else {
        
      }
    } catch (err) {
      
    } 

    }

useEffect(() =>{
  getSingleBlog()  
},[])

 
  return (
    <div className='w-[100] text-black h-[80vh] flex flex-col items-center justify-center'>
      <h1 className='mb-4 text-2xl text-white'>Edit Blog</h1>
      <form onSubmit={submitData} className=''>
        <input
          className='w-96 p-2'
          type="text"
          placeholder='Author'
          value={author}
          onChange={(e) => bindAuthor(e)}
        />
        <br />
        <br />

        <input
          className='w-96 p-2'
          type="text"
          placeholder='Title'
          value={title}
          onChange={(e) => bindTitleValue(e)}
        />
        <br />
        <br />

        <input
          className='w-96 p-2'
          type="text"
          placeholder='Image'
          value={image}
          onChange={(e) => editImage(e)}
        />
        <br />
        <br />

        <textarea
          className='w-96 p-2'
          name="content"
          placeholder='Content'
          value={content}
          onChange={(e) => bindContent(e)}
        ></textarea>
        <br />
        <br />

        <button type="submit" className='w-96 bg-blue-600 text-black' onClick={submitData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
