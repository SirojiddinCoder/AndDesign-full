import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Blog from './Blog'
export default function Pages() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
     </Routes>

    </div>
  )
}
