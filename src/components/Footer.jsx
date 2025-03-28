import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaShieldAlt } from 'react-icons/fa';
import palette from '../styles/colors';
import companyLogo from '../assets/YL.png';
import useResponsive from '../hooks/useResponsive'; // Import the responsive hook

const Footer = () => {
  const { isMobile, isTablet } = useResponsive();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    // Add newsletter signup logic here
    setEmail('');
  };

  // Footer links data
  const footerLinksGroups = [
    {
      title: "Company",
      links: [
        { label: "About Us", url: "/about" },
        { label: "Why YL Capital", url: "/why-us" },
        { label: "Careers", url: "/careers" },
        { label: "Press", url: "/press" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", url: "/blog" },
        { label: "Guides", url: "/guides" },
        { label: "FAQ", url: "/faq" },
        { label: "Contact Us", url: "/contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", url: "/privacy" },
        { label: "Terms of Service", url: "/terms" },
        { label: "Disclosures", url: "/disclosures" },
        { label: "Sitemap", url: "/sitemap" },
      ]
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com" },
    { icon: FaTwitter, url: "https://twitter.com" },
    { icon: FaInstagram, url: "https://instagram.com" },
    { icon: FaLinkedinIn, url: "https://linkedin.com" },
  ];

  return (
    <footer style={{ 
      backgroundColor: palette.darkBlue,
      color: 'white',
      padding: isMobile ? '40px 0' : '60px 0',
      width: '100%'
    }}>
      {/* Newsletter subscription */}
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: isMobile ? '20px' : '40px',
        marginBottom: isMobile ? '40px' : '60px',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '1200px',
        margin: '0 auto 40px auto'
      }}>
        <h2 style={{ 
          fontSize: isMobile ? '24px' : '32px',
          fontWeight: 'bold',
          marginBottom: '15px',
          textAlign: 'center'
        }}>
          Subscribe to our newsletter
        </h2>
        <p style={{ 
          fontSize: isMobile ? '14px' : '16px',
          marginBottom: '25px',
          textAlign: 'center',
          color: '#CCCCCC'
        }}>
          Get the latest updates on business funding options and industry trends.
        </p>
        
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '15px' : '0',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <input
            type="email"
            placeholder="Enter your e-mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: '1',
              minWidth: isMobile ? '100%' : '300px',
              padding: '15px 20px',
              fontSize: '16px',
              border: 'none',
              borderRadius: isMobile ? '5px' : '5px 0 0 5px',
              backgroundColor: 'white',
              color: '#333'
            }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '15px 30px',
              fontSize: '16px',
              backgroundColor: palette.skyBlue,
              color: 'black',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: isMobile ? '5px' : '0 5px 5px 0',
              cursor: 'pointer',
              width: isMobile ? '100%' : 'auto'
            }}
          >
            Get Started
          </motion.button>
        </form>
      </div>

      {/* Main footer content */}
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: isMobile ? '40px' : '20px'
      }}>
        {/* Logo and company info */}
        <div style={{ 
          flex: isMobile ? 'none' : '1', 
          minWidth: isMobile ? '100%' : '250px', 
          maxWidth: isMobile ? '100%' : '300px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img 
              src={companyLogo} 
              alt="YL Capital Logo" 
              style={{ 
                height: '60px', 
                marginRight: '15px',
                borderRadius: '8px'
              }} 
            />
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              lineHeight: '1.2'
            }}>
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>YL</span>
              <span style={{ fontSize: '16px' }}>CAPITAL</span>
            </div>
          </div>
          
          <h3 style={{ 
            fontSize: '16px', 
            marginBottom: '10px',
            fontWeight: 'normal',
            color: '#CCCCCC'
          }}>
            Business funding is what we do!
          </h3>
          
          <div style={{ 
            marginTop: '30px', 
            display: 'flex', 
            alignItems: 'center',
            gap: '10px'
          }}>
            <FaShieldAlt size={20} color={palette.skyBlue} />
            <span style={{ 
              fontSize: '14px', 
              fontWeight: 'bold' 
            }}>
              Site Secure
            </span>
          </div>
          <p style={{ 
            fontSize: '14px', 
            color: '#CCCCCC', 
            marginTop: '10px' 
          }}>
            We use bank-level security to keep your data safe.
          </p>
        </div>

        {/* Footer links sections */}
        <div style={{ 
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flex: isMobile ? 'none' : '2',
          gap: isMobile ? '30px' : '40px',
          flexWrap: isTablet && !isMobile ? 'wrap' : 'nowrap'
        }}>
          {footerLinksGroups.map((group, groupIndex) => (
            <div 
              key={groupIndex} 
              style={{ 
                flex: '1', 
                minWidth: isMobile ? '100%' : (isTablet ? '45%' : '180px')
              }}
            >
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 'bold', 
                marginBottom: '20px',
                color: 'white'
              }}>
                {group.title}
              </h3>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a 
                      href={link.url}
                      whileHover={{ color: palette.skyBlue, x: 5 }}
                      style={{ 
                        color: '#CCCCCC', 
                        textDecoration: 'none',
                        fontSize: '15px',
                        display: 'block',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section with social media and copyright */}
      <div style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: '50px',
        paddingTop: '30px',
        width: '100%',
        maxWidth: '1200px',
        margin: '50px auto 0 auto',
        padding: '30px 20px 0 20px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'center' : 'center',
        gap: isMobile ? '20px' : '0'
      }}>
        {/* Social media links */}
        <div style={{ 
          display: 'flex',
          gap: '15px',
          order: isMobile ? 1 : 0
        }}>
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: palette.skyBlue }}
              style={{ 
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'background-color 0.3s ease'
              }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Copyright text */}
        <div style={{ 
          color: '#999999',
          fontSize: isMobile ? '12px' : '14px',
          order: isMobile ? 0 : 1
        }}>
          &copy; {new Date().getFullYear()} YL Capital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
