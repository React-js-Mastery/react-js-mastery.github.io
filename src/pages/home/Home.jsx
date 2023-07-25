import React from 'react'

import './Home.css'
// import '../../css/skins/color-1.css'
// import '../../css/skins/color-2.css'
// import '../../css/skins/color-3.css'
// import '../../css/skins/color-4.css'
// import '../../css/skins/color-5.css'
// import '../../css/hero-style.css'
// import '../../css/hero-style.css'
// import '../../css/style-switcher.css'

import ProImg from '../../images/pics/Ajay-Dhangar.jpg'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Home() {
  return (

    <div className="content main-container">
      <main className="main-home-container home active section">
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
        </p>
        <img src={ProImg} className="image-home" alt="Ajay Dhangar" />
        {/* <!--===== Social Media Start =====--> */}
        <div>
          <h3 class="contact-title padd-15">connect with me</h3>
          <div class="socials padd-15">
            <Link to="https://twitter.com/AJAYDHA27250016" target="_blank"
            ><img
                src="https://ajay-dhangar.github.io/images/twitter.svg"
                alt="Twitter"
                loading="lazy"
                className="socicon"
              /></Link>
            <Link to="https://www.instagram.com/aj.edu.in/" target="_blank"
            ><img
                src="https://ajay-dhangar.github.io/images/instagram.svg"
                alt="Instagram"
                loading="lazy"
                className="socicon"
              /></Link>
            <Link
              to="https://www.linkedin.com/in/ajay-dhangar-bb89b4227/"
              target="_blank"
            ><img
                src="https://ajay-dhangar.github.io/images/linked-in-alt.svg"
                alt="Linkedin"
                loading="lazy"
                className="socicon"
              /></Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100078316657152"
              target="_blank"
            ><img
                src="https://ajay-dhangar.github.io/images/facebook.svg"
                alt="Facebook"
                loading="lazy"
                className="socicon"
              /></Link>
            <Link to="https://ajaydhangar49.medium.com/" target="_blank"
            ><img
                src="https://ajay-dhangar.github.io/images/medium.svg"
                alt="Blogger"
                loading="lazy"
                className="socicon"
              /></Link>
            <Link
              to="https://www.youtube.com/channel/UCRQBq8dfTEZfIMxmq-Ba9Tw"
              target="_blank"
            ><img
                src="https://ajay-dhangar.github.io/images/youtube.svg"
                alt="YouTube"
                loading="lazy"
                className="socicon"
              /></Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
