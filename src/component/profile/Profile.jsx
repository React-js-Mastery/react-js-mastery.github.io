
import React from 'react'

import Users from '../userData/User';

import img1 from '../userData/img/Ajay-Dhangar.jpg';
import img2 from '../userData/img/img.jpg';

import './Profile.css'
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <section className="about section">

      <h2>My Web Features</h2>
      <div className="content">
        <ul className='items-container'>
          <li className='items'><Link to={'/Translate'}>Language Translater</Link></li>
          <li className='items'><Link to={'/Profile'}>Profile</Link></li>
          <li className='items'><Link to={'/Gallery'}>Gallery</Link></li>
          <li className='items'><Link to={'/Interview'}>Interview</Link></li>
        </ul>
      </div>

      <br />

        <div className="users">
          <Users img={img1} title="Software Engineer" age={22} name='Ajay Dhangar' />
          <Users img={img2} title="Web Developer" age={25} name='Shivaya Coder' />
        </div>
      </section>
    </div>
  )
}

export default Profile
