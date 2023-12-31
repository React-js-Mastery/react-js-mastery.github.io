import React, {useState} from 'react'

import '../../css/skins/color-1.css'
import '../../css/skins/color-2.css'
import '../../css/skins/color-3.css'
import '../../css/skins/color-4.css'
import '../../css/skins/color-5.css'
import '../../css/hero-style.css'
import '../../css/style-switcher.css'

import { Link } from 'react-router-dom'

function Navbar() {
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const toggleAside = () => {
        setIsAsideOpen((prev) => !prev);
    };
   
    return (
        <div>
            {/* <!--==== aside Start ==--> */}

            <div className={`aside ${isAsideOpen ? 'open' : ''}`}>
                <div className="logo">
                    <Link to="/"><span>React </span>Js</Link>
                </div>
                <div className="nav-toggler" onClick={toggleAside}>
                    <span></span>
                </div>

                <ul className="nav">
                    <li>
                        <Link to="/Home" className="active"><i class="fa fa-home"></i> Home </Link>
                    </li>
                    <li>
                        <Link to="/About"><i className="fa fa-user"></i> About </Link>
                    </li>
                    <li>
                        <Link to="/Services"><i className="fa fa-list"></i> Services </Link>
                    </li>
                    <li>
                        <Link to="/Portfolio"><i className="fa fa-briefcase"></i> Portfolio </Link>
                    </li>
                    <li>
                        <Link to="/Docs"><i className="fa fa-comments"></i> Blog/Articles </Link>
                    </li>
                    <li>
                        <Link to="/Feature"><i className="fa fa-comments"></i> Features </Link>
                    </li>
                    <li>
                        <Link to="/Skills"><i className="fa fa-comments"></i> Skills </Link>
                    </li>
                    <li>
                        <Link to="/Contact"><i className="fa fa-comments"></i> Contact </Link>
                    </li>
                </ul>
            </div>

            {/* <!--==== aside End ==--> */}

            <section className='about section'>
                <div style={{ marginTop: '100px' }}>
                    <h2>Hello World</h2>
                    <h2 style={{ color: 'orange', marginTop: '50px' }}>Welcome to My React Learning and persionl Working site.</h2>
                </div>
            </section>
        </div>
    )
}

export default Navbar
