import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'
import Container from './components/Container'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container />
      <Footer />
    </Router>
  )
}

export default App
