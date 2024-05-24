import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import Header from './Components/Header/Header'
// import Header from "./Components/Header"


function App() {
  

  return (
    <div className='App'>
      <Router>
        <Header/>
      </Router>
    </div>
  )
}

export default App
