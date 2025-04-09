import React from 'react';
import { motion } from 'framer-motion';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const Press = () => {
  const { isMobile, isTablet } = useResponsive();
  
  // Animation variants
  const fadeIn = {
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

  const pressReleases = [
    {
      id: 1,
      date: 'March 15, 2023',
      title: 'Gelt Capital USA Announces $50M Funding Round to Expand Small Business Lending',
      summary: 'New capital will help extend reach to underserved markets and develop advanced financial technology solutions.',
    },
    {
      id: 2,
      date: 'December 7, 2022',
      title: 'Gelt Capital USA Partners with FinTech Innovator to Enhance Loan Application Process',
      summary: 'Strategic partnership aims to reduce approval times by 40% while maintaining rigorous underwriting standards.',
    },
    {
      id: 3,
      date: 'October 2, 2022',
      title: 'Gelt Capital USA Named Among Top 10 Alternative Lenders by Finance Monthly',
      summary: 'Recognition highlights company\'s commitment to flexible financing solutions and client satisfaction.',
    },
    {
      id: 4,
      date: 'July 18, 2022',
      title: 'Gelt Capital USA Launches New Small Business Recovery Program',
      summary: 'Initiative provides specialized funding options for businesses rebuilding after pandemic disruptions.',
    },
  ];

  return (
    <div style={{
      background: palette.darkBlue,
      color: 'white',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
    }}>
      {/* Background animation elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          position: 'absolute',
          right: '10%',
          top: '20%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.skyBlueRGBA}, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />
      
      <div style={{
        padding: isMobile ? '40px 20px' : '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: palette.skyBlue,
            textAlign: 'center'
          }}>
            Press & Media
          </h1>
          
          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto 60px',
            textAlign: 'center',
            color: '#cccccc'
          }}>
            Stay up to date with the latest news and announcements from Gelt Capital USA.
            For media inquiries, please contact our press team at <a href="mailto:press@Gelt Capital USAequity.com" style={{ color: palette.skyBlue }}>press@Gelt Capital USAequity.com</a>
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: 'white'
          }}>
            Recent Press Releases
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}>
            {pressReleases.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeIn}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <p style={{
                  fontSize: '14px',
                  color: palette.skyBlue,
                  marginBottom: '10px'
                }}>
                  {item.date}
                </p>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  color: 'white'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: '#cccccc',
                  marginBottom: '20px'
                }}>
                  {item.summary}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: palette.skyBlue,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  Read More →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Press; 