import React, {useState} from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {NavLink} from "react-router-dom";


const Navbar = () => {

const [shoeMediaIcon, setShoeMediaIcon] = useState(false)

    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>W</span>eb
                        <span>I</span>nfotech
                    </h2>
                </div>  

                  {/*2nd menu part  */}
                  {/* display menu link in mobile view else shoeMediaIcon's value false then disply menu-link*/}
                <div className= {
                        shoeMediaIcon ?  "menu-link  mobile-menu-link" : "menu-link"
                     }>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service">Service</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                </div>
                    {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="google.com"
                                target="_blank"
                                className="facebook">
                                <FaFacebookSquare />
                            </a>
                        </li>

                        <li>
                            <a href="google.com"
                                target="_blank"
                                className="instagram">
                                <FaInstagramSquare />
                            </a>
                        </li>

                        <li>
                            <a href="google.com"
                                target="_blank"
                                className="youtube">
                                <FaYoutube />
                            </a>
                        </li>
                    </ul>
                        {/* hamburger menu start */}
                        <div className="hamburger-menu">
                            <a href="#" onClick={() => setShoeMediaIcon(!shoeMediaIcon)}>
                                <GiHamburgerMenu/>
                            </a>
                        </div>
                </div>
            </nav>
            {/* hero section */}
            {/* <section className="hero-section">
                <p>Welcome to</p>
                <h1>Web Technology</h1>
            </section> */}
        </>
    )
}

export default Navbar
