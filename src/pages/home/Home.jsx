import React from 'react'

import './Home.css'

import ProImg from '../../images/pics/Ajay-Dhangar.jpg'

function Home() {
  return (
    <div>
      <div className="content">
        <main className="main-home-container">
          <img src={ProImg} className="image-home" alt="Ajay Dhangar" />
          <p className="content-home">
            Hey there! I'm Ajay Dhangar, a passionate Frontend Developer with a flair
            for creating stunning web applications. Welcome to my personal portfolio,
            where I bring to life my ideas and concepts through the power of React and
            modern web technologies.
            <br />
            I'm a skilled web developer with over 3 years of experience, specializing in
            creating stunning website and graphic designs. I use the latest technologies and
            industry best practices to deliver custom solutions that meet your unique needs and
            exceed your expectations. Let's work together to take your online presence to the
            next level.

            <button class="cta-button">Explore More</button>
          </p>
          
        </main>
      </div>
    </div>
  )
}

export default Home
