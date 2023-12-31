import React from 'react'
import { Routes, Route } from 'react-router'
import About from './pages/about/About'
import Project from "./pages/projects/Project";
// import PageRoutes from './PageRoutes';
import Docs from './pages/docs/Docs';
import Skill from "./pages/skills/Skill";
import Contect from './pages/contect/Contect';
import Feature from './pages/feature/Feature';
import { Profile, Gallery, Interview } from "./component";
import Translate from './component/translater/Translate'
// import Navbar from './component/navbar/Navbar';

// import Button from './testing/Button'
import Home from './pages/home/Home'
import Navbar from './component/navbar/Navbar';


function App() {
  return (
    <div>
      {/* <PageRoutes/> */}
      <Navbar />
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
        <Route path='/Interview' element={<Interview/>}/>
      </Routes>
     
      {/* <Button/>       */}
      
    </div>
  )
}


export default App
