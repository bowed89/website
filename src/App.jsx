import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Privacy from './components/privacy/Privacy'
import Facebook from './components/facebook/Facebook'
import Terms from './components/terms/Terms'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Facebook />
      <Privacy />
      <Terms />
      <Contact />
      <Footer />

    </>
  )
}

export default App