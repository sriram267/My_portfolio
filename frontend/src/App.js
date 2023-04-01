import React from 'react'
import { About, Footer, Header, Skills, Work } from "./container"
import { Navbar } from "./components"
import { Routes, Route } from "react-router-dom";
import "./App.scss"
const App = () => {
  return (
    <div className="app">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      
    </div>
  )
}

export default App;
