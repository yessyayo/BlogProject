import { useState } from 'react'
import Header from './Component/Header'
import Section from './Component/Section'
import Router from './utils/route/Router'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='bg-[#111827] min-h-[100vh]'>
      {/* <Header/>
      <Section/> */}
       <Router/>
    </div>
      
   
  )
}

export default App
