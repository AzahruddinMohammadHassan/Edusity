import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'






const Navbar = () => {
  
  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 150 ? setSticky(true) : setSticky(false)
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
    // const toggleMenu = ()=>{
    //   mobileMenu ? setMobileMenu(false) : mobileMenu(true);
    // }
    const toggleMenu = () => {
      setMobileMenu(prevState => !prevState);
    }
    
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="hello" className='logo'/>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='Program' smooth={true} offset={-270} duration={500}>Program</Link></li>
            <li><Link to='About' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='Campus' smooth={true} offset={-300} duration={500}>Campus</Link></li>
            <li><Link to='Testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
            <li><Link to='Contact' smooth={true} offset={-250} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar