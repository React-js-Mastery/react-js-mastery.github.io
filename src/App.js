import React from 'react'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router'
import About from './pages/about/About'
import Project from "./pages/projects/Project";
import PageRoutes from './PageRoutes';
import Docs from './pages/docs/Docs';
import Skill from "./pages/skills/Skill";
import Contect from './pages/contect/Contect';
import Feature from './pages/feature/Feature';

import { Profile, Gallery } from "./component";
import Translate from './component/translater/Translate'

function App() {
  return (
    <div>
      <PageRoutes/>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Docs' element={<Docs/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Skill' element={<Skill/>}/>
        <Route path='/Contect' element={<Contect/>}/>
        <Route path='/Feature' element={<Feature/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Translate' element={<Translate/>}/>
      </Routes>
     
    </div>
  )
}

export default App
