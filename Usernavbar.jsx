import React from 'react'
import { Link } from 'react-router-dom'

const Usernavbar = () => {
  return (
    <div className='navbar'>
      <h1>Welcome User!
        <Link to="/cart">View Cart!</Link>
              <Link to="/order">View <Order></Order>!</Link>
                    <Link to="/profile">View Profile!</Link>
                          <Link to="/logout">Logout!</Link>
        </h1>
    </div>
  )
}

export default Usernavbar
