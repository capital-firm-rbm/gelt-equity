import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const Resources = () => {
  const { isMobile, isTablet } = useResponsive();
  
  // Animation variants
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
        staggerChildren: 0.2
      }
    }
  };

  const fundingPrograms = [
    {
      tier: 'Starter',
      amount: '$30K',
      color: '#3051a2'
    },
    {
      tier: 'Standard',
      amount: '$120K',
      color: '#4a90cc'
    },
    {
      tier: 'Premier',
      amount: '$250K',
      color: '#6c77e6'
    },
    {
      tier: 'Premier Plus',
      amount: '$500K',
      color: '#8de4a7'
    }
  ];

  return (
    <div style={{
      background: palette.darkBlue,
      color: 'white',
      width: '100%',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: isMobile ? '60px 20px' : '100px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px'
      }}>
        {/* Left content */}
        <motion.div
          initial="hidden"
          animate="visible" 
          variants={fadeIn}
          style={{
            flex: isMobile ? 'none' : '1',
            maxWidth: isMobile ? '100%' : '500px'
          }}
        >
          <h1 style={{
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: 'bold',
            marginBottom: '20px',
            lineHeight: 1.2
          }}>
            Funding options to{' '}
            <span style={{ color: '#f5c542' }}>
              fit your business goals
            </span>
          </h1>
          
          <h2 style={{
            fontSize: isMobile ? '22px' : '28px',
            fontWeight: 'normal',
            marginBottom: '20px'
          }}>
            We offer a full suite of program types.
          </h2>
          
          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: '#cccccc',
            marginBottom: '30px'
          }}>
            Our programs are tailored to offer great flexibility, fast responses, and a hassle-free process to meet the demands of your business.
          </p>
          
          <Link to="/apply" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: '#f5c542',
                color: '#000',
                border: 'none',
                borderRadius: '30px',
                padding: '15px 40px',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(245, 197, 66, 0.3)'
              }}
            >
              APPLY NOW
            </motion.button>
          </Link>
        </motion.div>
        
        {/* Right content - Funding tiers */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{
            flex: isMobile ? 'none' : '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            maxWidth: isMobile ? '100%' : '500px'
          }}
        >
          {fundingPrograms.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              style={{
                position: 'relative',
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                overflow: 'hidden'
              }}
            >
              {/* Colored bubble on the side */}
              <div style={{
                position: 'absolute',
                left: '-30px',
                top: '0',
                bottom: '0',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: program.color,
                margin: 'auto 0'
              }}/>
              
              {/* Title */}
              <div style={{
                flex: 1,
                textAlign: 'right'
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 'bold',
                  color: '#333',
                  margin: 0
                }}>
                  {program.tier}
                </h3>
              </div>
              
              {/* Amount */}
              <div style={{
                marginLeft: '30px',
                textAlign: 'right'
              }}>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#18216f',
                  margin: 0
                }}>
                  {program.amount}
                </h2>
              </div>
              
              {/* Star ratings for Premier Plus */}
              {program.tier === 'Premier Plus' && (
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '20px',
                  color: '#f5c542',
                  display: 'flex',
                  gap: '2px'
                }}>
                  {'★★★★★'}
                </div>
              )}
            </motion.div>
          ))}
          
          {/* Add avatar icon */}
          <div style={{
            position: 'absolute',
            top: isMobile ? '50px' : '100px',
            right: isMobile ? '30px' : (isTablet ? '100px' : '200px'),
            width: '80px',
            height: '80px',
            opacity: 0,
            borderRadius: '50%',
            backgroundColor: '#8de4a7',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2
          }}>
          </div>
        </motion.div>
      </section>
      
      {/* Explore Programs Section */}
      <section style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: 'bold',
            color: '#f5c542',
            marginBottom: '30px'
          }}
        >
          Explore our programs
        </motion.h2>
        
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '28px',
            fontWeight: 'normal',
            marginBottom: '40px'
          }}
        >
          We offer a full suite of program types.
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            maxWidth: '900px',
            margin: '0 auto 30px',
            color: '#cccccc'
          }}
        >
          We understand not every business is the same. Each growth opportunity varies from one to the next. That's why we designed different tiers, each perfect for a specific individual. Who can benefit from our merchant cash advance programs?
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            maxWidth: '900px',
            margin: '0 auto 60px',
            color: '#cccccc'
          }}
        >
          Every business we fund receives their own personalized offer that is created to meet their specific business needs. Our business funding solutions range from $30,000 to $150,000. Our funding specialists will be able to assist you with all of your questions and concerns. They can help determine which program would be best for you, how much you would qualify for, and there is absolutely no obligation.
        </motion.p>
      </section>
    </div>
  );
};

export default Resources;
