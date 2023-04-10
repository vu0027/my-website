import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const scrollToSection = (sectionId: string) => {
    scroll.scrollTo(document.getElementById(sectionId)?.offsetTop || 0, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
    setShowDropdown(false);
  };

  const navBarStyle: any = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    color: '#333',
    width: '100vw',
    padding: '40px',
    background: '#f2f2f2',
    zIndex: '5',
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: '0',
    padding: '40px',
    fontSize: '20px',
    fontWeight: 'bold'
  };

  const navLinkStyle = {
    color: '#333',
    textDecoration: 'none',
    margin: '0 10px',
    padding: '20px',
  };

  const dropdownStyle: any = {
    display: 'block',
    position: 'absolute',
    top: '20px', // adjust to the height of the navbar
    right: '0', // show the dropdown on the right
    zIndex: '2',
    minWidth: '160px',
    padding: '8px 0',
    margin: '2px 0 0',
    fontSize: '16px',
    textAlign: 'left',
    listStyle: 'none',
    backgroundColor: '#fff',
    boxShadow: '0 6px 12px rgba(0,0,0,.175)',
    borderRadius: '.25rem',
  };

  const dropdownItemStyle: any = {
    display: 'block',
    width: '100%',
    padding: '10px 1.5rem',
    clear: 'both',
    fontWeight: '400',
    color: '#212529',
    textAlign: 'inherit',
    whiteSpace: 'nowrap',
    backgroundColor: 'transparent',
    border: '0',
    transition: 'background-color 0.2s ease-in-out',
    ":hover": {
      backgroundColor: '#f2f2f2', // change the background color on hover
    }
  };



  const Hamburger = styled.button`
    display: none;
    border: none;
    background-color: transparent;
    color: #333;
    font-size: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  `;

  const pdfUrl = process.env.PUBLIC_URL + '/pdf/AnhVu_Resume.pdf';
	const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={navBarStyle}>
      <div onClick={() => scrollToSection('home')}>
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            style={{ marginTop: '5%', width: '50%' }}
            alt="Logo"
          />
        </Link>
      </div>

      <Hamburger onClick={toggleNav}>☰</Hamburger>

      {isNavOpen && (
        <div style={{ position: 'absolute', top: '60px', left: '0', width: '100vw', zIndex: '2' }}>
          <ul style={dropdownStyle}>
            <li style={{...dropdownItemStyle}} onClick={() => { scrollToSection('about'); toggleNav(); }}>
              <Link to="/about" style={navLinkStyle}>
                About
              </Link>
            </li>
            <li style={{...dropdownItemStyle}} onClick={() => { scrollToSection('projects'); toggleNav(); }}>
              <Link to="/projects" style={navLinkStyle}>
                Projects
              </Link>
            </li>
            <li style={{...dropdownItemStyle}}>
              <a href={pdfUrl} style={navLinkStyle}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}

      {!isSmallScreen && (
        <ul style={navLinksStyle}>
          <li onClick={() => scrollToSection("about")}>
            <Link to="/about" style={navLinkStyle}>
              About
            </Link>
          </li>
          <li onClick={() => scrollToSection("projects")}>
            <Link to="/projects" style={navLinkStyle}>
              Projects
            </Link>
          </li>
          <li className="nav-item nav-link">
            <a style={navLinkStyle} href={pdfUrl}>
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  )};

export default NavBar;