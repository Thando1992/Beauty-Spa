import React from 'react'
import Header from '../Components/Header'
import  '../Pages/Home.css'
import Slides from '../Components/Slides'

import About from '../Pages/About'
function Home() {
  return (
    <div>
      <Header/>
      <Slides/>
      
      <About/>
    </div>
  )
}

export default Home
