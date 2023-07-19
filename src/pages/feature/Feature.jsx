import React from 'react';
import { Link } from 'react-router-dom';

function Feature() {
  return (
    <div>
      <h2>My Web Features</h2>
      <div className="content">
      <ul className='items-container'>
        <li className='items'><Link to={'/Translate'}>Language Translater</Link></li>
        <li className='items'><Link to={'/Profile'}>Profile</Link></li>
        <li className='items'><Link to={'/Gallery'}>Gallery</Link></li>        
      </ul>        
      </div>
    </div>
  )
}

export default Feature
