import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import palette from '../styles/colors';
import { FaChevronDown, FaSearch, FaShieldAlt, FaCheck, FaBars, FaTimes } from 'react-icons/fa';
import ONYXLogo from '../assets/ONYX.png'; // Import the ONYX logo image
import useResponsive from '../hooks/useResponsive'; // Import the responsive hook

const NavBar = () => {
  const { isMobile, isTablet } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Close menu when resizing from mobile to desktop
  useEffect(() => {
    if (!isMobile && !isTablet) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isTablet]);

  // Navigation links data
  const navLinks = [
    { title: "Home", path: "/", dropdown: false },
    { 
      title: "About", 
      path: "/about", 
      dropdown: true,
      submenu: [
        { title: "Our Story", path: "/about/our-story" },
        { title: "Careers", path: "/about/careers" }
      ]
    },
    { title: "Service", path: "/service", dropdown: false },
    { title: "Funding", path: "/resources", dropdown: false },
    { title: "Affiliates", path: "/affiliates", dropdown: false },
    { title: "Business Loans", path: "/business-loans", dropdown: false },
    { title: "Contact Us", path: "/contact", dropdown: false },
  ];

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled:", !isMenuOpen);
  };

  // Toggle dropdown function
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Top bar with sky blue background */}
      <div style={{ 
        backgroundColor: palette.skyBlue,
        width: '100%', 
        padding: isMobile ? '4px 0' : '8px 0',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'center' : 'center',
        color: 'black',
        fontWeight: 'medium',
        fontSize: isMobile ? '10px' : '14px'
      }}>
        <div style={{ 
          marginLeft: isMobile ? '0' : '56px',
          textAlign: isMobile ? 'center' : 'left',
          padding: isMobile ? '2px 0' : '0'
        }}>
          <span style={{ fontWeight: 'bold' }}>Welcome to ONYX Capital.</span> Business funding is what we do.
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '2px' : '20px', 
          marginRight: isMobile ? '0' : '56px',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: isMobile ? '10px' : '14px',
          padding: isMobile ? '2px 0' : '0'
        }}>
          <div>305-424-7992</div>
          <div>19790 W Dixie Hwy, Miami FL, 33180</div>
        </div>
      </div>

      {/* Main navigation bar with black background */}
      <div style={{ 
        backgroundColor: palette.darkBlue,
        width: '100%', 
        padding: '16px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Logo section */}
        <div style={{ 
          marginLeft: isMobile ? '20px' : '56px', 
          display: 'flex', 
          alignItems: 'center' 
        }}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <img 
              src={ONYXLogo} 
              alt="ONYX Logo" 
              style={{ 
                width: isMobile ? '36px' : '80px', 
                // height: isMobile ? '36px' : '48px',
                borderRadius: '8px',
              }}
            />
            
            <div style={{ 
              marginLeft: '8px', 
              fontSize: isMobile ? '16px' : '18px', 
              fontWeight: 'bold',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              lineHeight: '1'
            }}>
              {/* <span>ONYX</span>
              <span style={{ fontSize: isMobile ? '12px' : '14px' }}>CAPITAL</span> */}
            </div>
          </motion.div>
        </div>

        {/* Desktop Navigation links */}
        {!isMobile && !isTablet && (
          <div style={{ 
            display: 'flex', 
            gap: '24px',
            alignItems: 'center'
          }}>
            {navLinks.map((link, index) => (
              <div 
                key={index}
                onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                style={{ position: 'relative' }}
              >
                <motion.div 
                  whileHover={{ color: palette.skyBlue }}
                  style={{ 
                    cursor: 'pointer',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {link.dropdown ? (
                    <span>{link.title}</span>
                  ) : (
                    <Link to={link.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {link.title}
                    </Link>
                  )}
                  
                  {link.dropdown && (
                    <FaChevronDown size={12} />
                  )}
                </motion.div>
                
                {/* Dropdown menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: palette.darkBlue,
                        borderRadius: '4px',
                        minWidth: '180px',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                        zIndex: 20,
                        marginTop: '15px'
                      }}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {link.submenu?.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex}
                          to={subItem.path}
                          style={{ textDecoration: 'none', color: 'white' }}
                        >
                          <motion.div
                            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                            style={{
                              padding: '12px 16px',
                              borderBottom: subIndex < link.submenu.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                              fontSize: '14px',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {subItem.title}
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}

        {/* Hamburger menu for mobile & tablet */}
        {(isMobile || isTablet) && (
          <div style={{ marginRight: '20px', zIndex: 15 }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              style={{ cursor: 'pointer' }}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.div>
          </div>
        )}

        {/* Right section with Login and Apply button - visible only on desktop */}
        {!isMobile && !isTablet && (
          <div style={{ 
            marginRight: '56px', 
            display: 'flex', 
            alignItems: 'center',
            gap: '16px'
          }}>
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  fontWeight: 'medium',
                  fontSize: '14px'
                }}
              >
                <div style={{ 
                  position: 'relative', 
                  display: 'inline-block',
                  color: palette.skyBlue
                }}>
                  <FaShieldAlt size={18} />
                  <div style={{ 
                    position: 'absolute', 
                    top: '-2px', 
                    right: '-2px', 
                    backgroundColor: palette.skyBlue,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '10px',
                    height: '10px'
                  }}>
                    <FaCheck size={6} color={palette.darkBlue} />
                  </div>
                </div>
                <span>Log In</span>
              </motion.div>
            </Link>

            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <FaSearch size={18} />
            </motion.div>

            <Link to="/apply" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  backgroundColor: palette.skyBlue,
                  color: palette.darkBlue,
                  border: 'none',
                  borderRadius: '4px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Apply Now
              </motion.button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile menu overlay - changed animation to fix display issues */}
      {isMenuOpen && (isMobile || isTablet) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: palette.darkBlue,
            zIndex: 9999,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px 0'
          }}>
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  style={{
                    padding: '15px 20px',
                    borderBottom: index < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    if (link.dropdown) {
                      toggleDropdown(index);
                    } else {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {!link.dropdown ? (
                    <Link to={link.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <span>{link.title}</span>
                    </Link>
                  ) : (
                    <span>{link.title}</span>
                  )}
                  
                  {link.dropdown && (
                    <FaChevronDown 
                      size={12}
                      style={{
                        transform: activeDropdown === index ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  )}
                </motion.div>
                
                {/* Mobile Submenu */}
                {link.dropdown && activeDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      overflow: 'hidden'
                    }}
                  >
                    {link.submenu?.map((subItem, subIndex) => (
                      <Link 
                        key={subIndex}
                        to={subItem.path}
                        style={{ textDecoration: 'none', color: 'white' }}
                      >
                        <motion.div
                          whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                          style={{
                            padding: '12px 30px',
                            borderBottom: subIndex < link.submenu.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                            fontSize: '14px'
                          }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.title}
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </React.Fragment>
            ))}
            
            {/* Add login and apply buttons to mobile menu */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              padding: '20px',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    padding: '10px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontWeight: 'medium',
                  }}
                >
                  LOGIN
                </motion.div>
              </Link>
              <Link to="/apply" style={{ textDecoration: 'none', width: '100%' }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backgroundColor: palette.skyBlue,
                    color: palette.darkBlue,
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                >
                  APPLY
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
