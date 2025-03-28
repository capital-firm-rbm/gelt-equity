import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import palette from '../styles/colors';
import { FaChevronDown, FaSearch, FaShieldAlt, FaCheck, FaBars, FaTimes } from 'react-icons/fa';
import YLLogo from '../assets/YL.png'; // Import the YL logo image
import useResponsive from '../hooks/useResponsive'; // Import the responsive hook

const NavBar = () => {
  const { isMobile, isTablet } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when resizing from mobile to desktop
  useEffect(() => {
    if (!isMobile && !isTablet) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isTablet]);

  // Navigation links data
  const navLinks = [
    { title: "Home", path: "/", dropdown: false },
    { title: "About", path: "/about", dropdown: true },
    { title: "Service", path: "/service", dropdown: true },
    { title: "Resources", path: "/resources", dropdown: true },
    { title: "Affiliates", path: "/affiliates", dropdown: false },
    { title: "Business Loans", path: "/business-loans", dropdown: true },
    { title: "Contact Us", path: "/contact", dropdown: false },
  ];

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
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
          <span style={{ fontWeight: 'bold' }}>Welcome to YL Capital.</span> Business funding is what we do.
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
          <div>404-920-4946</div>
          <div>55 Water St, Miami, FL 33131</div>
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
              src={YLLogo} 
              alt="YL Logo" 
              style={{ 
                width: isMobile ? '36px' : '48px', 
                height: isMobile ? '36px' : '48px',
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
              <span>YL</span>
              <span style={{ fontSize: isMobile ? '12px' : '14px' }}>CAPITAL</span>
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
              <motion.div 
                key={index}
                whileHover={{ color: palette.skyBlue }}
                style={{ 
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {link.title}
                {link.dropdown && (
                  <FaChevronDown size={12} />
                )}
              </motion.div>
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
          </div>
        )}
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (isMobile || isTablet) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: palette.darkBlue,
              zIndex: 5,
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '10px 0'
            }}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
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
                    // Handle navigation here
                    if (!link.dropdown) {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  <span>{link.title}</span>
                  {link.dropdown && <FaChevronDown size={12} />}
                </motion.div>
              ))}
              
              {/* Add login and apply buttons to mobile menu */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '20px',
                borderTop: '1px solid rgba(255,255,255,0.1)'
              }}>
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
