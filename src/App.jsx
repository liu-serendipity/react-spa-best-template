import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App