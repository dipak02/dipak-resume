import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Navbar from './components/Navbar'
import Main from './components/Main'
import Tools from './components/Tools'
import Services from './components/Services'
import Project from './components/Project'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Faqs from './components/Faqs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Academic from './components/Academic'

function App() {


  return (
    <>
     <div id="home" class="w-full mx-auto p-6 space-y-6 bg-[var(--main-bg-color)]">
      <Navbar />
      <Main/>
      <Tools/>
      <Services/>
      <Academic/>
      <Project/>
      <Contact/>
      <Testimonials/>
      <Blog/>
      <Faqs/>
      <Footer/>
      </div>
    </>
  )
}



export default App
