import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaBuilding, FaPaperPlane } from 'react-icons/fa';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const Affiliates = () => {
  const { isMobile } = useResponsive();
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const formItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const contactItemVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div style={{
      background: palette.darkBlue,
      color: 'white',
      width: '100%',
      minHeight: '100vh',
      padding: isMobile ? '40px 20px' : '80px 20px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'center' : 'flex-start',
        gap: isMobile ? '50px' : '60px',
        marginBottom: '80px'
      }}>
        {/* Left Content - Text and Contact Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{
            flex: '1',
            maxWidth: isMobile ? '100%' : '500px',
          }}
        >
          <motion.h1
            variants={fadeInUp}
            style={{
              fontSize: isMobile ? '36px' : '48px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: palette.skyBlue
            }}
          >
            Join our Program!
          </motion.h1>
          
          <motion.h2
            variants={fadeInUp}
            style={{
              fontSize: isMobile ? '24px' : '28px',
              fontWeight: 'normal',
              marginBottom: '30px',
              color: 'white'
            }}
          >
            We'd love to work with you.
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#cccccc',
              marginBottom: '40px'
            }}
          >
            Do you cater to business owners that need funding solutions?
            Feel free to send us your traffic, you'll be able to track the
            process directly, and get paid for every referral you send us!
          </motion.p>
          
          {/* Contact Information */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
              marginTop: '40px'
            }}
          >
            <motion.div
              variants={contactItemVariant}
              whileHover="hover"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: palette.skyBlue
              }}>
                <FaPhone size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>Call Us</h3>
                <p style={{ color: '#cccccc' }}>247-378-5821</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={contactItemVariant}
              whileHover="hover"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: palette.skyBlue
              }}>
                <FaEnvelope size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>Email Us</h3>
                <p style={{ color: '#cccccc' }}>Admin@Gelt Capital USAequity.co</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={contactItemVariant}
              whileHover="hover"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: palette.skyBlue
              }}>
                <FaBuilding size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>Address</h3>
                <p style={{ color: '#cccccc' }}>7901 4th st N ste 300, St. Petersburg FL</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Right Content - Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{
            flex: '1',
            maxWidth: isMobile ? '100%' : '500px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              position: 'absolute',
              right: isMobile ? '10%' : '5%',
              top: isMobile ? '25%' : '15%',
              width: '50%',
              height: '50%',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${palette.skyBlueRGBA}, transparent 70%)`,
              filter: 'blur(80px)',
              zIndex: -1
            }}
          />
          
          <form>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <motion.div variants={formItemVariant}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: palette.skyBlue,
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  Company Name <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '30px',
                    border: 'none',
                    backgroundColor: 'white',
                    fontSize: '14px'
                  }}
                />
              </motion.div>
              
              <motion.div variants={formItemVariant}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: palette.skyBlue,
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  Contact Name <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contact Name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '30px',
                    border: 'none',
                    backgroundColor: 'white',
                    fontSize: '14px'
                  }}
                />
              </motion.div>
              
              <motion.div variants={formItemVariant}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: palette.skyBlue,
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  Email <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="mail@me.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '30px',
                    border: 'none',
                    backgroundColor: 'white',
                    fontSize: '14px'
                  }}
                />
              </motion.div>
              
              <motion.div variants={formItemVariant}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: palette.skyBlue,
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  Phone <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="555-555-5555"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '30px',
                    border: 'none',
                    backgroundColor: 'white',
                    fontSize: '14px'
                  }}
                />
              </motion.div>
            </div>
            
            <motion.div variants={formItemVariant} style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: palette.skyBlue,
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                Website + Social Media <span style={{ color: palette.skyBlue }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Paste Your Links"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '30px',
                  border: 'none',
                  backgroundColor: 'white',
                  fontSize: '14px'
                }}
              />
            </motion.div>
            
            <motion.div variants={formItemVariant} style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: palette.skyBlue,
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                Message <span style={{ color: palette.skyBlue }}>*</span>
              </label>
              <textarea
                placeholder="Write your message here"
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '15px',
                  border: 'none',
                  backgroundColor: 'white',
                  fontSize: '14px',
                  resize: 'vertical'
                }}
              />
            </motion.div>
            
            <motion.button
              variants={formItemVariant}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: palette.skyBlue,
                color: palette.darkBlue,
                border: 'none',
                borderRadius: '30px',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: `0 5px 20px rgba(${palette.skyBlueRGBA.replace('rgba(', '').replace(')', '')}, 0.4)`
              }}
            >
              <FaPaperPlane size={16} /> Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Affiliates;
