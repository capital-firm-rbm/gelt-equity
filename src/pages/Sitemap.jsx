import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import palette from '../styles/colors';
import useResponsive from '../hooks/useResponsive';

const Sitemap = () => {
  const { isMobile, isTablet } = useResponsive();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Business Loans', path: '/business-loans' },
        { name: 'Funding', path: '/resources' },
        { name: 'Service', path: '/service' },
        { name: 'Affiliates', path: '/affiliates' },
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', path: '/about/our-story' },
        { name: 'Careers', path: '/about/careers' },
        { name: 'Press', path: '/company/press' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/resources/blog' },
        { name: 'Guides', path: '/resources/guides' },
        { name: 'FAQ', path: '/resources/faq' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/legal/privacy-policy' },
        { name: 'Terms of Service', path: '/legal/terms-of-service' },
        { name: 'Disclosures', path: '/legal/disclosures' },
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Contact Us', path: '/contact' },
      ]
    }
  ];

  return (
    <div style={{
      background: palette.darkBlue,
      color: 'white',
      width: '100%',
      minHeight: '100vh'
    }}>
      <div style={{
        padding: isMobile ? '40px 20px' : '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '40px' }}
        >
          <h1 style={{
            fontSize: isMobile ? '32px' : '42px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: palette.skyBlue
          }}>
            Sitemap
          </h1>
          
          <p style={{
            fontSize: '16px',
            color: '#cccccc',
            maxWidth: '800px'
          }}>
            Use this sitemap to find any page on our website. If you can't find what you're looking for, please contact us for assistance.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
            gap: '40px'
          }}
        >
          {sitemapSections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              style={{}}
            >
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: 'white',
                paddingBottom: '10px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {section.title}
              </h2>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    style={{
                      marginBottom: '12px'
                    }}
                  >
                    <Link
                      to={link.path}
                      style={{
                        color: '#cccccc',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '16px',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = palette.skyBlue}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}
                    >
                      <span style={{ marginRight: '8px' }}>›</span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sitemap; 