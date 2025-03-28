import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaShieldAlt } from 'react-icons/fa';
import companyLogo from '../assets/YL.png';
import palette from '../styles/colors';

const Footer = () => {
  const [email, setEmail] = useState('');

  // Navigation links organized by category
  const footerLinks = {
    company: [
      { title: 'Career', path: '/career' },
      { title: 'FAQs', path: '/faqs' },
      { title: 'About Us', path: '/about' },
      { title: 'Partners', path: '/partners' },
      { title: 'Syndication', path: '/syndication' },
      { title: 'Customer Feedback', path: '/feedback' },
    ],
    connect: [
      { title: 'Twitter', path: 'https://twitter.com', icon: FaTwitter },
      { title: 'LinkedIn', path: 'https://linkedin.com', icon: FaLinkedinIn },
      { title: 'facebook', path: 'https://facebook.com', icon: FaFacebookF },
      { title: 'Instagram', path: 'https://instagram.com', icon: FaInstagram },
    ],
    resources: [
      { title: 'Affiliates', path: '/affiliates' },
      { title: 'Terms of Use', path: '/terms' },
      { title: 'Privacy Policy', path: '/privacy' },
    ]
  };

  // Animation variants
  // eslint-disable-next-line no-unused-vars
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribing email:', email);
    // Reset form or show success message
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <footer style={{ 
      backgroundColor: '#2A2A2A',
      color: 'white',
      padding: '60px 0 20px',
      width: '100%'
    }}>
      {/* Newsletter section */}
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto 60px auto',
        padding: '0 20px',
        textAlign: 'center'
      }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            fontSize: '36px',
            fontWeight: 'bold',
            color: palette.skyBlue,
            marginBottom: '30px'
          }}
        >
          Subscribe to our newsletter
        </motion.h2>

        {/* Newsletter form */}
        <form 
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            maxWidth: '800px',
            margin: '0 auto',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <input
            type="email"
            placeholder="Enter your e-mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: '1',
              minWidth: '300px',
              padding: '15px 20px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: 'white',
              color: '#333'
            }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '15px 30px',
              fontSize: '16px',
              backgroundColor: palette.skyBlue,
              color: 'black',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
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
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '40px'
      }}>
        {/* Logo and company info */}
        <div style={{ 
          flex: '1', 
          minWidth: '250px', 
          maxWidth: '300px' 
        }}>
          <img 
            src={companyLogo} 
            alt="YL Capital Logo" 
            style={{ 
              height: '80px', 
              marginBottom: '20px' 
            }} 
          />
          <h3 style={{ 
            fontSize: '18px', 
            marginBottom: '10px',
            fontWeight: 'normal'
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
          flex: '1', 
          minWidth: '180px' 
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            marginBottom: '20px' 
          }}>
            Company
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {footerLinks.company.map((link, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>
                <a 
                  href={link.path}
                  style={{ 
                    color: '#CCCCCC', 
                    textDecoration: 'none', 
                    fontSize: '16px', 
                    transition: 'color 0.3s' 
                  }}
                  onMouseOver={(e) => e.target.style.color = palette.skyBlue}
                  onMouseOut={(e) => e.target.style.color = '#CCCCCC'}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ 
          flex: '1', 
          minWidth: '180px' 
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            marginBottom: '20px' 
          }}>
            Connect
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {footerLinks.connect.map((link, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>
                <a 
                  href={link.path}
                  style={{ 
                    color: '#CCCCCC', 
                    textDecoration: 'none', 
                    fontSize: '16px', 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'color 0.3s' 
                  }}
                  onMouseOver={(e) => e.target.style.color = palette.skyBlue}
                  onMouseOut={(e) => e.target.style.color = '#CCCCCC'}
                >
                  <link.icon size={16} />
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ 
          flex: '1', 
          minWidth: '180px' 
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold', 
            marginBottom: '20px' 
          }}>
            Resources
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {footerLinks.resources.map((link, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>
                <a 
                  href={link.path}
                  style={{ 
                    color: '#CCCCCC', 
                    textDecoration: 'none', 
                    fontSize: '16px', 
                    transition: 'color 0.3s' 
                  }}
                  onMouseOver={(e) => e.target.style.color = palette.skyBlue}
                  onMouseOut={(e) => e.target.style.color = '#CCCCCC'}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright section */}
      <div style={{ 
        borderTop: '1px solid #444',
        marginTop: '60px',
        paddingTop: '20px',
        paddingBottom: '20px',
        textAlign: 'center', 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        <p style={{ 
          fontSize: '14px', 
          color: '#999' 
        }}>
          © 2023 YL Capital. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
