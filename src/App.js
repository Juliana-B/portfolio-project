import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'

const App = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <Header/>
    </div>
  )
}

export default App
