import React, { useEffect, useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import db from '../utils/fireStoreData'
import {addDocument} from '../utils/addData'
import { useNavigate } from 'react-router-dom';

const NewBlog = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

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
    e.preventDefault(); 
    const payload = {
      title: title,
      author: author,
      content: content,
      img: image,
    };

    try {
      const docRef = await addDoc(collection(db, "blogs"), payload); 
      console.log("Document written with ID: ", docRef.id);
      navigate(`/home/${docRef.id}`); 
    } catch (err) {
      console.log(`Error occurred: ${err}`);
    }
  };

  useEffect(() => {
  }, []);

  return (
    <div className='w-[100] text-black h-[80vh] flex flex-col items-center justify-center'>
      <h1 className='mb-4 text-2xl text-white'>Add New Blog</h1>
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

        <button type="submit" className='w-96 bg-blue-600 text-black'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
