import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    scroll.scrollTo(document.getElementById(sectionId)?.offsetTop || 0, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const navBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    color: '#333',
    padding: '0 20px',
    paddingTop: '40px'
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: '0',
    padding: '40px',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const navLinkStyle = {
    color: '#333',
    textDecoration: 'none',
    margin: '0 10px',
    padding: '20px',
  };

  const pdfUrl = process.env.PUBLIC_URL + "/pdf/AnhVu_Resume.pdf";

  return (
    <nav style={navBarStyle}>
      <div onClick={() => scrollToSection('home')}>
        <Link to="/" style={navLinkStyle}>Logo</Link>
      </div>
      <ul style={navLinksStyle}>
        <li onClick={() => scrollToSection('home')}>
          <Link to="/" style={navLinkStyle}>Home</Link>
        </li>
        <li onClick={() => scrollToSection('about')}>
          <Link to="/about" style={navLinkStyle}>About</Link>
        </li>
        <li onClick={() => scrollToSection('projects')}>
          <Link to="/projects" style={navLinkStyle}>Project</Link>
        </li>
        <li className="nav-item nav-link">
          <a style={navLinkStyle} href={pdfUrl} >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
