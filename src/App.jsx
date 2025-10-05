import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout.js'
import Home from '../pages/home.js'
import Services from '../pages/services.js'
import Portfolio from '../pages/portfolio.js'
import Contact from '../pages/contact.js'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
