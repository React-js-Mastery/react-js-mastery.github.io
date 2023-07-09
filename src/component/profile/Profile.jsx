
import React from 'react'

import Users from '../userData/User';

import img1 from '../userData/img/Ajay-Dhangar.jpg';
import img2 from '../userData/img/img.jpg';

import './Profile.css'

function Profile() {
  return (
    <div>
      <div className="users">
        <Users img={img1} title="Software Engineer" age={22} name='Ajay Dhangar' />
        <Users img={img2} title="Web Developer" age={25} name='Shivaya Coder' />
      </div>
    </div>
  )
}

export default Profile
