import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';
import businessLoanImage from '../../assets/BusinessLoan-Section4.jpg';
import { Link } from 'react-router-dom';

const BusinessLoans = () => {
  const { isMobile, isTablet } = useResponsive();
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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
  
  const logoVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  // Certification and rating logos
  const certifications = [
    { name: 'Trustpilot', rating: '4.8 (2163)', stars: 5 },
    { name: 'Google', rating: '5/5 (40)', stars: 5 }
  ];

  return (
    <div style={{
      width: '100%',
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* Hero Section with Background Image */}
      <section style={{
        width: '100%',
        height: isMobile ? '50vh' : '70vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          <img 
            src={businessLoanImage}
            alt="Small business owners" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.7)'
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(3, 4, 14, 0.7) 0%, rgba(3, 4, 14, 0.4) 100%)',
            zIndex: 1
          }} />
        </div>
        
        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={slideIn}
              style={{
                fontSize: isMobile ? '18px' : '24px',
                fontWeight: 'normal',
                marginBottom: '10px'
              }}
            >
              Small Business Lending
            </motion.p>
            
            <motion.h1
              variants={slideIn}
              style={{
                fontSize: isMobile ? '32px' : '52px',
                fontWeight: 'bold',
                marginBottom: '30px',
                lineHeight: 1.2,
                margin: '0 auto',
                maxWidth: '800px'
              }}
            >
              Find The Best Loan For Your Business.
            </motion.h1>
            
            <Link to="/apply" style={{ textDecoration: 'none' }}>
              <motion.button
                variants={slideIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: palette.skyBlue,
                  color: palette.darkBlue,
                  border: 'none',
                  borderRadius: '5px',
                  padding: '12px 25px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  margin: '20px auto'
                }}
              >
                Apply Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Certifications & Ratings Section */}
      <section style={{
        backgroundColor: 'white',
        padding: '30px 0',
        width: '100%'
      }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: '20px',
            padding: '0 20px'
          }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={logoVariant}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#333'
              }}
            >
              <div style={{
                width: isMobile ? '80px' : '100px',
                height: isMobile ? '40px' : '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {/* This would normally be an image, but we're using placeholders */}
                <div style={{
                  backgroundColor: '#f0f0f0',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  color: '#555'
                }}>
                  {cert.name}
                </div>
              </div>
              
              {cert.rating && (
                <div style={{ 
                  marginTop: '5px',
                  fontSize: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{
                    color: palette.skyBlue,
                    marginBottom: '2px'
                  }}>
                    {'★'.repeat(cert.stars)}
                  </div>
                  <span>{cert.rating}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Main Heading Section */}
      <section style={{
        backgroundColor: palette.darkBlue,
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          <h2 style={{
            fontSize: isMobile ? '28px' : '44px',
            fontWeight: 'bold',
            color: palette.skyBlue,
            marginBottom: '20px'
          }}>
            Find The Right Loan To Grow Your Small Business
          </h2>
          
          <h3 style={{
            fontSize: isMobile ? '20px' : '28px',
            fontWeight: 'normal',
            color: 'white',
            marginBottom: '40px'
          }}>
            At Gelt Capital USA
          </h3>
        </motion.div>
      </section>
      
      {/* Loan Types Section */}
      <section style={{
        backgroundColor: palette.darkBlue,
        padding: '0 20px 100px',
        position: 'relative'
      }}>
        {/* Background Animation Element */}
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
            right: '5%',
            top: '20%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${palette.skyBlueRGBA}, transparent 70%)`,
            filter: 'blur(80px)',
            zIndex: 0
          }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          style={{
            position: 'absolute',
            left: '5%',
            bottom: '10%',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${palette.lavenderRGBA}, transparent 70%)`,
            filter: 'blur(80px)',
            zIndex: 0
          }}
        />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
              gap: '30px'
            }}
          >
            {[
              { title: "Term Loans", description: "Fixed-rate loans with predictable monthly payments, perfect for established businesses looking to expand." },
              { title: "SBA Loans", description: "Government-backed loans with competitive rates, designed for small businesses that might not qualify for traditional loans." },
              { title: "Equipment Financing", description: "Loans specifically for purchasing new equipment, using the equipment itself as collateral." },
              { title: "Business Line of Credit", description: "Flexible financing that allows you to draw funds as needed and only pay interest on what you use." },
              { title: "Invoice Factoring", description: "Sell your unpaid invoices to get immediate cash flow, without taking on traditional debt." },
              { title: "Merchant Cash Advance", description: "Get upfront cash in exchange for a percentage of your daily credit card sales, with flexible repayment terms." }
            ].map((loan, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  padding: '30px',
                  height: '100%',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '15px'
                }}>
                  {loan.title}
                </h3>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#cccccc',
                  marginBottom: '20px',
                  flex: 1
                }}>
                  {loan.description}
                </p>
                <Link to="/apply" style={{ textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: palette.skyBlue,
                      cursor: 'pointer'
                    }}
                  >
                    Learn More <FaArrowRight size={12} />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              marginTop: '60px'
            }}
          >
            <p style={{
              fontSize: '18px',
              color: '#cccccc',
              maxWidth: '700px',
              margin: '0 auto 30px',
              lineHeight: 1.7
            }}>
              Not sure which loan is right for your business? Our funding specialists are here to help you find the perfect solution.
            </p>
            <Link to="/apply" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: palette.skyBlue,
                  color: palette.darkBlue,
                  border: 'none',
                  borderRadius: '5px',
                  padding: '15px 30px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: `0 5px 20px rgba(${palette.skyBlueRGBA.replace('rgba(', '').replace(')', '')}, 0.4)`
                }}
              >
                Apply Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessLoans;
