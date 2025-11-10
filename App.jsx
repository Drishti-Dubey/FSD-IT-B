import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userdashboard from './Userdashboard'
import admindashboard from './Pages/admindashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Route path="/user" element={<Userdashboard/>}/>
      <Route path="/itemlist" element={<h1> Item List</h1>}/>
      <Routes>
        <Route path="/user" element={<Userdashboard}/>
        <Route path="/about" element={admindashboard}/>
        <Route path="/cart" element={<h1> My Cart</h1>}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
         <Route path="/order" element={<h1>Order</h1>}/>
           <Route path="/logout" element={<h1>Logout</h1>}/>
           
    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
