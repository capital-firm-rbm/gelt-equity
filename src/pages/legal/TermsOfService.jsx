import React from 'react';
import { motion } from 'framer-motion';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const TermsOfService = () => {
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
            Terms of Service
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
              1. Agreement to Terms
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc'
            }}>
              By accessing or using the Onyx Equity website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
          </section>
          
          <section>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: 'white'
            }}>
              2. Use License
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc',
              marginBottom: '15px'
            }}>
              Permission is granted to temporarily download one copy of the materials on Onyx Equity's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
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
                Modify or copy the materials;
              </li>
              <li style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc',
                marginBottom: '10px'
              }}>
                Use the materials for any commercial purpose or for any public display;
              </li>
              <li style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc',
                marginBottom: '10px'
              }}>
                Remove any copyright or other proprietary notations from the materials;
              </li>
              <li style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#cccccc'
              }}>
                Transfer the materials to another person or "mirror" the materials on any other server.
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
              3. Disclaimer
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc'
            }}>
              The materials on Onyx Equity's website are provided on an 'as is' basis. Onyx Equity makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>
          
          <section>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: 'white'
            }}>
              4. Limitations
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc'
            }}>
              In no event shall Onyx Equity or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Onyx Equity's website, even if Onyx Equity or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>
          
          {/* More sections would be added here for complete terms of service */}
          
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
              For questions about these Terms of Service, please contact us at:
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
                Onyx Equity - Legal Department
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
                <a href="mailto:legal@onyxequity.com" style={{ color: palette.skyBlue }}>legal@onyxequity.com</a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService; 