import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaPencilAlt, FaArrowRight } from 'react-icons/fa';
import waveBackground from '../../assets/wave.png';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive'; // Import the responsive hook
import { Link } from 'react-router-dom';

const ContactInfoSection = () => {
  const { isMobile, isTablet } = useResponsive();
  
  // Contact info data
  const contactCards = [
    {
      title: "Phone",
      info: "(347) 378-5821",
      icon: FaPhone,
      color: palette.skyBlue
    },
    {
      title: "Address",
      info: "7901 4th st N ste 300, St. Petersburg FL",
      icon: FaMapMarkerAlt,
      color: palette.skyBlue
    },
    {
      title: "Email",
      info: "office@geltcapitalusa.com",
      icon: FaEnvelope,
      color: palette.skyBlue
    }
  ];

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4 }
    }
  };

  const subHeadingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.6, delay: 0.2 } 
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, delay: 0.4 } 
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.6
      } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section style={{ 
      background: palette.darkBlue,
      width: '100%',
      padding: isMobile ? '60px 0 40px' : '120px 0 80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Yellow wave background */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: isMobile ? '100%' : '60%',
        backgroundImage: `url(${waveBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: isMobile ? 'center' : 'center left',
        opacity: 0.3, // Lower opacity on mobile for better text contrast
        zIndex: 1
      }} />

      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* CTA Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: isMobile ? '50px' : '100px'
        }}>
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true }}
            style={{ 
              fontSize: isMobile ? '32px' : (isTablet ? '36px' : '48px'),
              fontWeight: 'bold',
              color: palette.skyBlue,
              marginBottom: '15px',
              maxWidth: isMobile ? '100%' : '600px'
            }}
          >
            See what you qualified for
          </motion.h2>

          <motion.p
            variants={subHeadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
              fontSize: isMobile ? '18px' : '24px',
              color: 'white',
              marginBottom: isMobile ? '25px' : '40px'
            }}
          >
            No really, why wait? Let's do this!
          </motion.p>

          <Link to="/apply" style={{ textDecoration: 'none' }}>
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              whileTap="tap"
              style={{ 
                backgroundColor: palette.skyBlue,
                color: palette.darkBlue,
                border: 'none',
                borderRadius: '50px',
                padding: isMobile ? '12px 24px' : '15px 30px',
                fontWeight: 'bold',
                fontSize: isMobile ? '14px' : '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              APPLY NOW
            </motion.button>
          </Link>
        </div>

        {/* Contact Cards - On mobile, use a horizontally scrollable container */}
        {isMobile ? (
          <div style={{
            width: '100%',
            overflowX: 'auto',
            scrollbarWidth: 'none', // Hide scrollbar for Firefox
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
          }}>
            <motion.div
              variants={cardsContainerVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false }}
              style={{ 
                display: 'flex',
                gap: '15px',
                paddingBottom: '15px', // Space for potential scrollbar
                width: 'max-content' // Allow container to grow with children
              }}
            >
              {contactCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  style={{ 
                    width: '280px',
                    flexShrink: 0, // Prevent items from shrinking
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '15px',
                    padding: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: '200px'
                  }}
                >
                  {/* Restored original icon style */}
                  <div style={{ marginBottom: '15px' }}>
                    <card.icon size={25} color={card.color} />
                  </div>
                  
                  <div>
                    <h3 style={{ 
                      fontSize: '22px',
                      fontWeight: 'bold',
                      color: 'white',
                      marginBottom: '8px'
                    }}>
                      {card.title}
                    </h3>
                    <p style={{ 
                      fontSize: '15px',
                      color: '#CCCCCC',
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      {card.info}
                    </p>
                  </div>
                  
                  {/* Contact us link */}
                  {card.title === "Phone" ? (
                    <a href={`tel:${card.info.replace(/[^0-9]/g, '')}`} style={{ textDecoration: 'none' }}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                          alignSelf: 'flex-start'
                        }}
                      >
                        <span style={{ 
                          color: palette.skyBlue,
                          fontWeight: 'bold',
                          fontSize: '14px'
                        }}>
                          Call us
                        </span>
                        <FaArrowRight size={14} color={palette.skyBlue} />
                      </motion.div>
                    </a>
                  ) : card.title === "Email" ? (
                    <a href={`mailto:${card.info}`} style={{ textDecoration: 'none' }}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                          alignSelf: 'flex-start'
                        }}
                      >
                        <span style={{ 
                          color: palette.skyBlue,
                          fontWeight: 'bold',
                          fontSize: '14px'
                        }}>
                          Email us
                        </span>
                        <FaArrowRight size={14} color={palette.skyBlue} />
                      </motion.div>
                    </a>
                  ) : (
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(card.info)}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                          alignSelf: 'flex-start'
                        }}
                      >
                        <span style={{ 
                          color: palette.skyBlue,
                          fontWeight: 'bold',
                          fontSize: '14px'
                        }}>
                          View on map
                        </span>
                        <FaArrowRight size={14} color={palette.skyBlue} />
                      </motion.div>
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          // Desktop and tablet layout
          <motion.div
            variants={cardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            style={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: isTablet ? 'center' : 'flex-start',
              width: '100%'
            }}
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                style={{ 
                  flex: '1',
                  minWidth: isTablet ? '300px' : '250px',
                  maxWidth: '380px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '250px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Restored original icon style */}
                <div style={{ marginBottom: '20px' }}>
                  <card.icon size={30} color={card.color} />
                </div>
                
                <div>
                  <h3 style={{ 
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '10px'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ 
                    fontSize: '16px',
                    color: '#CCCCCC',
                    lineHeight: '1.6',
                    marginBottom: '30px'
                  }}>
                    {card.info}
                  </p>
                </div>
                
                {/* Contact us link */}
                {card.title === "Phone" ? (
                  <a href={`tel:${card.info.replace(/[^0-9]/g, '')}`} style={{ textDecoration: 'none' }}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        alignSelf: 'flex-start'
                      }}
                    >
                      <span style={{ 
                        color: palette.skyBlue,
                        fontWeight: 'bold',
                        fontSize: '16px'
                      }}>
                        Call us
                      </span>
                      <FaArrowRight size={14} color={palette.skyBlue} />
                    </motion.div>
                  </a>
                ) : card.title === "Email" ? (
                  <a href={`mailto:${card.info}`} style={{ textDecoration: 'none' }}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        alignSelf: 'flex-start'
                      }}
                    >
                      <span style={{ 
                        color: palette.skyBlue,
                        fontWeight: 'bold',
                        fontSize: '16px'
                      }}>
                        Email us
                      </span>
                      <FaArrowRight size={14} color={palette.skyBlue} />
                    </motion.div>
                  </a>
                ) : (
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(card.info)}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        alignSelf: 'flex-start'
                      }}
                    >
                      <span style={{ 
                        color: palette.skyBlue,
                        fontWeight: 'bold',
                        fontSize: '16px'
                      }}>
                        View on map
                      </span>
                      <FaArrowRight size={14} color={palette.skyBlue} />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactInfoSection;
