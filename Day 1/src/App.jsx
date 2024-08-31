import { useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Users from './Components/Users'
import Contact from './Components/Users'
import About from './Components/About'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Routes>
        <Route to="/" element={<Login/>}></Route>
        <Route to="/users" element={<Users/>}></Route>
        <Route to="/about" element={<About/>}></Route>
        <Route to="/contact" element={<Contact/>}></Route>
      </Routes>
      
      <Login/>
    </div>
  )
}

export default App
