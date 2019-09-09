import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import NewsPage from './components/NewsPage'
import SignInPage from './components/SignInPage'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/news" exact component={NewsPage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/sign-in" exact component={SignInPage} />
      <Footer />
    </Router>
  )
}

export default App
