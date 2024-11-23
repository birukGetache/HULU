import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { toggleTheme } from '../slices/themeSlice';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-dropdown'; // Import Dropdown component
import 'react-dropdown/style.css'; 
import { translations } from './translations';
import { setLanguage } from '../slices/LanguageSlice';
  // color: ${props => (props.theme === 'dark' ? '#f0f0f0' : '#333')};
// Styled components for Navbar
const NavInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 85px;
   background-color: ${(props) => (props.theme === 'dark' ? '#e6e6ff' : 'white')};
  margin-top:0px;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);  /* Adjust the blur amount as needed */
  -webkit-backdrop-filter: blur(10px);
  color:"#117BF6"; 
  width: 100%;
  position: fixed;
  top:0;
  z-index: 1;
  transition: transform 0.3s ease;
  @media (max-width: 1007px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
    padding: 10px 10px;
  }
`;

const Nav = styled.nav`
   padding-left: 200px;
   padding-right: 200px;
  width: 100%;
  position: ${props => (props.sticky ? 'fixed' : 'absolute')};
  top: ${props => (props.sticky ? '0px' : '50px')};
  left: 0;
  z-index: 2;
  display: grid;
grid-template-columns:9fr 1fr 1fr 1fr;
gap:10px;
place-content:center;
  height: 90px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: ${props => (props.theme === 'dark' ? '#f0f0f0' : '#117BF6')};
  background:transparent;
  transition: top 0.3s ease-in-out;
  margin:auto;
  @media (max-width: 745px) {
    padding-right: 10px;
    padding-left: 15px;
    top: 0px;
  }
`;

const Logo = styled.img`
  height: 4vw;
  width: auto;
    @media (max-width: 1169px) {
    height: 5vw;
  }
    @media (max-width: 676px) {
    height: 7vw;
  }
    @media (max-width:400px) {
    height: 9vw;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: ${props => (props.theme === 'dark' ? '#f0f0f0' : '#117BF6')};
  text-decoration: none;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 5px;
white-space: nowrap;
  &:hover {
    background: ${props => (props.theme === 'dark' ? '#555' : '#eee')};
  }
  font-family: "Poppins", system-ui;
`;

const Hamburger = styled.div`
  font-size: 24px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
  padding-right:10px;
  margin-right: -20px;
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  text-align: center;
  z-index: 1000;
background-color:#117BF6;
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavItem = styled.li`
  margin: 0;
`;

const MobileNavLink = styled(Link)`
  color: ${props => (props.theme === 'dark' ? '#f0f0f0' : '#fff')};
  text-decoration: none;
  padding: 15px;
  display: block;
  border-bottom: 1px solid ${props => (props.theme === 'dark' ? '#555' : '#0056b3')};

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${props => (props.theme === 'dark' ? '#444' : '#5c9ee1')};
  }
`;

const ThemeToggle = styled.div`
  font-size: 20px;
  cursor: pointer;
  text-align:center;
  display:flex;
  padding:0;
  justify-content:center;
  align-items:center;
`;

const Navbar = () => {
  const selectedLanguage = useSelector((state) => state.language.value); // Get language from Redux store
  const options = ['English', 'Amharic']; // List of language options

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [showNavInfo, setShowNavInfo] = useState(true);
  const navInfoRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const navInfoHeight = navInfoRef.current ? navInfoRef.current.offsetHeight : 0;

    if (scrollPosition >= navInfoHeight) {
      setSticky(true);
      setShowNavInfo(false);
    } else {
      setSticky(false);
      setShowNavInfo(true);
    }
  };

  const emailAddress = "hulugeneralcommission@gmail.com";
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleSelect = (option) => {
    dispatch(setLanguage(option.value)); // Dispatch action to change language
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set body background color based on theme
    document.body.style.backgroundColor = theme === 'dark' ? '#000529' : '#d7d7d7';
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.backgroundColor = theme === 'dark' ? '#000529' : '';
    }

    // Cleanup background color when component unmounts or theme changes
    return () => {
      document.body.style.backgroundColor = '';
      if (rootElement) {
        rootElement.style.backgroundColor = '';
      }
    };
  }, [theme]);

  const googleMapsURL = "https://www.google.com/maps?q=9.011704301013898,38.754134401379275";
  const handleThemeToggle = () => {
    dispatch(toggleTheme()); // Dispatch the toggleTheme action
  };

  return (
    <>
      <NavInfo ref={navInfoRef} theme={theme} style={{ transform: showNavInfo ? 'translateY(0)' : 'translateY(-100%)' }}>
        <div style={{ color: "#117BF6" }}>
          <FaPhone size={24} color="#117BF6" style={{ transform: 'scaleX(-1)' }} />
          <span style={{ paddingLeft: '10px' }}></span>
          <span style={{ color: "#117BF6" }}>{translations[selectedLanguage].phone}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FaMapMarkerAlt size={24} color="#117BF6" />
            <span style={{ paddingLeft: '10px' }}></span>
            <a href={googleMapsURL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: "#117BF6" }}>
              <p style={{ padding: "0", margin: "0", display: "inline" }}>{translations[selectedLanguage].address}</p>
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FaEnvelope size={24} color="#117BF6" />
            <span style={{ paddingLeft: '10px' }}></span>
            <a href={`mailto:${emailAddress}`} style={{ textDecoration: 'none', color: "#117BF6" }}>
              <p style={{ padding: "0", margin: "0", display: "inline" }}>{emailAddress}</p>
            </a>
          </div>
        </div>
      </NavInfo>
      <div style={{ display: "flex", justifyContent: "center", width: "100vw", backgroundColor: theme === 'dark' ? '#07136a' : 'transparent' }}>
        <Nav sticky={isSticky} theme={theme}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Logo src='/HULU (3).png' alt="HULU Logo" />
            <Logo src='/HULU (4).png' alt="HULU Logo" />
          </div>
          
          <NavList>
            <NavItem onClick={() => scrollToSection('home')}>
              <NavLink to="#" theme={theme}>{translations[selectedLanguage].home}</NavLink>
            </NavItem>
            <NavItem onClick={() => scrollToSection('about')}>
              <NavLink to="#" theme={theme}>{translations[selectedLanguage].about}</NavLink>
            </NavItem>
            <NavItem onClick={() => scrollToSection('services')}>
              <NavLink to="#" theme={theme}>{translations[selectedLanguage].services}</NavLink>
            </NavItem>
            <NavItem onClick={() => scrollToSection('contact')}>
              <NavLink to="#" theme={theme}>{translations[selectedLanguage].contact}</NavLink>
            </NavItem>
          </NavList>
          <MobileNavList open={isOpen} theme={theme}>
            <MobileNavItem onClick={() => scrollToSection('home')}>
              <MobileNavLink to="#" theme={theme}>{translations[selectedLanguage].home}</MobileNavLink>
            </MobileNavItem>
            <MobileNavItem onClick={() => scrollToSection('about')}>
              <MobileNavLink to="#" theme={theme}>{translations[selectedLanguage].about}</MobileNavLink>
            </MobileNavItem>
            <MobileNavItem onClick={() => scrollToSection('services')}>
              <MobileNavLink to="#" theme={theme}>{translations[selectedLanguage].services}</MobileNavLink>
            </MobileNavItem>
            <MobileNavItem onClick={() => scrollToSection('contact')}>
              <MobileNavLink to="#" theme={theme}>{translations[selectedLanguage].contact}</MobileNavLink>
            </MobileNavItem>
          </MobileNavList>
          <ThemeToggle onClick={handleThemeToggle}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggle>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Dropdown
              options={options}
              onChange={handleSelect}
              value={selectedLanguage}
              placeholder="Select a language"
              controlClassName="my-dropdown-control"
            />
          </div>
          <Hamburger onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </Hamburger>
        </Nav>
      </div>
    </>
  );
};

export default Navbar;