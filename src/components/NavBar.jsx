import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import palette from '../styles/colors';
import { FaChevronDown, FaSearch, FaShieldAlt, FaCheck } from 'react-icons/fa';
import YLLogo from '../assets/YL.png'; // Import the YL logo image

const NavBar = () => {
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

  return (
    <>
      {/* Top bar with sky blue background */}
      <div style={{ 
        backgroundColor: palette.skyBlue,
        width: '100%', 
        padding: '8px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'black',
        fontWeight: 'medium',
        fontSize: '14px'
      }}>
        <div style={{ marginLeft: '56px' }}>
          <span style={{ fontWeight: 'bold' }}>Welcome to YL Capital.</span> Business funding is what we do.
        </div>
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          marginRight: '56px',
          alignItems: 'center'
        }}>
          <div>404-920-4946</div>
          <div>55 Water St, New York, NY 10038</div>
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
        color: 'white'
      }}>
        {/* Logo section */}
        <div style={{ marginLeft: '56px', display: 'flex', alignItems: 'center' }}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <img 
              src={YLLogo} 
              alt="YL Logo" 
              style={{ 
                width: '48px', 
                height: '48px',
                borderRadius: '8px',
              }}
            />
            
            <div style={{ 
              marginLeft: '8px', 
              fontSize: '18px', 
              fontWeight: 'bold',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              lineHeight: '1'
            }}>
              <span>YL</span>
              <span style={{ fontSize: '14px' }}>CAPITAL</span>
            </div>
          </motion.div>
        </div>

        {/* Navigation links */}
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

        {/* Right section with Login and Apply button */}
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
      </div>
    </>
  );
};

export default NavBar;
