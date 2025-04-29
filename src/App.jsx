import { useState } from 'react'
import Header from './Component/Header'
import Section from './Component/Section'
import Router from './utils/route/Router'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='bg-[#111827] min-h-[100vh]'>
      {/* <Header/>
      <Section/> */}
       <Router/>

       <ToastContainer
       
       />
    </div>
      
   
  )
}

export default App
