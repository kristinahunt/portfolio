import { Link, NavLink, useHistory } from  'react-router-dom';
import { useState } from 'react';
import logo from '../images/kh-small.svg';
import Socials from './Socials';
import { HashLink } from 'react-router-hash-link';

function Header() {

    const [navOpen, setNavOpen] = useState(false);

    function toggleNav () {
        setNavOpen(!navOpen);
    }

    return (
        <header className={navOpen ? 'show' : undefined}>
            <h1> <Link to='/'> <img src={logo} alt="KH logo" /> </Link> </h1>   
            <button className='nav-button' aria-label='Open menu'
                    onMouseDown={(e) => {e.preventDefault();} }
                    onClick={toggleNav}>
                <span className="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
            </button> 
            <nav className="site-nav" onClick={toggleNav}>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                    <li><HashLink 
  scroll={(el) => {
    setTimeout(() => {
        el.scrollIntoView({ behavior: 'auto', block: 'end' })
    }, 1000);
   }}
                    smooth to='/#about'>About</HashLink></li>
                </ul>
                <Socials />
            </nav>
        </header>
    );
}

export default Header;