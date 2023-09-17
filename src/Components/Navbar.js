import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./nav.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header style={{alignItems: "center", display: "flex"}}>
       <div className='logo'>
          <h2>
            <span>A</span>rtist
            <span>R</span>anjeet
          </h2>
        </div>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;












































// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
// import './nav.css'

// const Navbar = () => {
//   return (
    // <>
    //   <nav className='main-nav'>
        // <div className='logo'>
        //   <h2>
        //     <span>A</span>rtis
        //     <span>R</span>anjeet
        //   </h2>
        // </div>
    //     <div className='menu-link'>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className='social-media'>
    //       <ul className='social-media-desktop'>
    //         <li>
    //           <FaFacebookSquare />
    //         </li>
    //         <li>
    //           <FaInstagramSquare />
    //         </li>
    //         <li>
    //           <FaYoutubeSquare />
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
//     </>
//   );
// }

// export default Navbar;