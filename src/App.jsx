import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout.jsx'
import Home from '../pages/home.jsx'
import Services from '../pages/services.jsx'
import Portfolio from '../pages/portfolio.jsx'
import Contact from '../pages/contact.jsx'

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
