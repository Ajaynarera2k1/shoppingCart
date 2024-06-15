import React from 'react'

import Body from "./Pages/Body"
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart'


function App() {
  return (
  
    <div>
       <Navbar />
       {/* <Home/> */}
       <Routes>
            <Route path='/' element={<Body/>} />
            <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  
  )
}

export default App