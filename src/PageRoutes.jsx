import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function PageRoutes() {
  return (
    <div>
      <header>
        <h2 className='H-msg'>This is My Website</h2>
      </header>
      <ul className='items-container'>
        <li className='items'><Link to={'/Home'}>Home</Link></li>
        <li className='items'><Link to={'/About'}>About Me</Link></li>
        <li className='items'><Link to={'/Project'}>Projects</Link></li>
        <li className='items'><Link to={'/Skill'}>Skills</Link></li>
        <li className='items'><Link to={'/Docs'}>Blog/Articles</Link></li>
        <li className='items'><Link to={'/Feature'}>Features</Link></li>
        <li className='items'><Link to={'/Contect'}>Countect Us</Link></li>
      </ul>            
    </div>
  )
}

export default PageRoutes
