import React from 'react';
import { motion } from 'framer-motion';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const PrivacyPolicy = () => {
  const { isMobile, isTablet } = useResponsive();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div style={{
      background: palette.darkBlue,
      color: 'white',
      width: '100%',
      minHeight: '100vh'
    }}>
      <div style={{
        padding: isMobile ? '40px 20px' : '80px 20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: isMobile ? '32px' : '42px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: palette.skyBlue
          }}>
            Privacy Policy
          </h1>
          
          <p style={{
            fontSize: '16px',
            marginBottom: '40px',
            color: '#cccccc'
          }}>
            Last Updated: April 1, 2023
          </p>
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}
        >
          <section>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: 'white'
            }}>
              1. Introduction
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc'
            }}>
              At Gelt Capital USA, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </section>
          
          <section>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: 'white'
            }}>
              2. Information We Collect
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc',
              marginBottom: '15px'
            }}>
              We may collect several types of information from and about users of our website, including:
            </p>
            <ul style={{
              listStyleType: 'disc',
              paddingLeft: '30px',
              marginBottom: '15px'
            }}>
              <li style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc',
                marginBottom: '10px'
              }}>
                Personal identifiable information such as name, email address, postal address, telephone number, and other information you provide when filling out forms on our website.
              </li>
              <li style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc',
                marginBottom: '10px'
              }}>
                Business information including business name, structure, industry, financials, and other details necessary to process loan applications or provide our services.
              </li>
              <li style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc'
              }}>
                Usage data including information about how you use our website and services.
              </li>
            </ul>
          </section>
          
          <section>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: 'white'
            }}>
              3. How We Use Your Information
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc',
              marginBottom: '15px'
            }}>
              We use the information we collect about you for various purposes, including:
            </p>
            <ul style={{
              listStyleType: 'disc',
              paddingLeft: '30px'
            }}>
              <li style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc',
                marginBottom: '10px'
              }}>
                To provide and maintain our services, including processing your loan application and servicing your account.
              </li>
              <li style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc',
                marginBottom: '10px'
              }}>
                To notify you about changes to our services or terms.
              </li>
              <li style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc',
                marginBottom: '10px'
              }}>
                To improve our website, products, and services.
              </li>
              <li style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc'
              }}>
                To communicate with you about our services, promotions, and events.
              </li>
            </ul>
          </section>
          
          {/* More sections would be added here for a complete privacy policy */}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              marginTop: '30px'
            }}
          >
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc',
              marginBottom: '20px'
            }}>
              For questions or concerns about our privacy practices, please contact us at:
            </p>
            <div style={{
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc',
                marginBottom: '5px'
              }}>
                Gelt Capital USA
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc',
                marginBottom: '5px'
              }}>
                55 Water St, New York, NY 10038
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc'
              }}>
                <a href="mailto:privacy@Gelt Capital USAequity.com" style={{ color: palette.skyBlue }}>privacy@Gelt Capital USAequity.com</a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 