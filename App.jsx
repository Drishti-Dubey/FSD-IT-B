
import React from 'react'
import Book from './components/Book'
import './App.css'
import Header from './components/Header'

const App = () => {
  return (
    <div>
    <Header/>
      <div className='booklist'>

      </div>
      <Book/>
       <Book/>
        <Book/>
    </div>
  )
}

export default App
