import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
function Feature() {
  return (
    <div>
      <section className='fetures section' >
        <h2>My Web Features</h2>
        <div className="content">
          <ul className='items-container'>
            <li className='items'><Link to={'/Translate'}>Language Translater</Link></li>
            <li className='items'><Link to={'/Profile'}>Profile</Link></li>
            <li className='items'><Link to={'/Gallery'}>Gallery</Link></li>
            <li className='items'><Link to={'/Interview'}>Interview</Link></li>            
          </ul>
        </div>

        <div>
          <p>WelCome to my Features Section</p>
        </div>
      </section>

    </div>
  )
}

export default Feature
