import React from 'react';
import { motion } from 'framer-motion';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';
import marketplaceImage from '../../assets/marketplace-01.png';
import TermCalculator from './TermCalculator';
import { 
  FaFileInvoiceDollar, 
  FaCreditCard, 
  FaUniversity, 
  FaPiggyBank, 
  FaHandHoldingUsd, 
  FaHome, 
  FaLandmark, 
  FaTruck, 
  FaFileInvoice 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = () => {
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

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 50 },
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
      y: -15,
      boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
      transition: { duration: 0.3 }
    }
  };
  
  const serviceCards = [
    {
      title: "Merchant Cash Advance",
      icon: FaFileInvoiceDollar,
      description: "A merchant cash advance allows you to borrow against future earnings to access that capital today."
    },
    {
      title: "Lines of Credit",
      icon: FaCreditCard,
      description: "Like a credit card for your business. You can take money out of the LOC until your limit is reached."
    },
    {
      title: "Traditional Bank Loans",
      icon: FaUniversity,
      description: "Usually lower interest rates but also takes much longer to get approved. Collateral and a high credit score are needed."
    },
    {
      title: "401K Business Financing",
      icon: FaPiggyBank,
      description: "Allows you to use your 401 (k) funds to finance your business without incurring hefty taxes."
    },
    {
      title: "Disaster Relief Loan",
      icon: FaHandHoldingUsd,
      description: "An SBA loan that provides assistance for the repair and rebuilding of non-farm, private sector losses for businesses that have sustained economic injury."
    },
    {
      title: "Hard Money Business Loans",
      icon: FaHome,
      description: "A loan based solely on the property used as collateral. Credit score is not checked."
    },
    {
      title: "SBA",
      icon: FaLandmark,
      description: "Requires an unconditional guarantee as business collateral. They take into account your time in business, annual revenue and your credit score."
    },
    {
      title: "Equipment Financing",
      icon: FaTruck,
      description: "A loan that is used to buy equipment for your business. The equipment is used as collateral."
    },
    {
      title: "Invoice Financing",
      icon: FaFileInvoice,
      description: "Funding provided to you based on your customers' future invoice payments."
    }
  ];

  return (
    <div style={{
      background: palette.darkBlue,
      color: 'white',
      width: '100%',
      minHeight: '100vh',
      padding: '40px 20px 80px',
      overflow: 'hidden' // Prevents horizontal scrolling from animations
    }}>
      {/* Hero Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto 80px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        position: 'relative'
      }}>
        {/* Background glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            position: 'absolute',
            left: '-10%',
            top: '20%',
            width: '50%',
            height: '50%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${palette.skyBlueRGBA}, transparent 70%)`,
            filter: 'blur(80px)',
            zIndex: 0
          }}
        />
        
        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInRight}
          style={{
            flex: isMobile ? 'none' : '1',
            maxWidth: isMobile ? '100%' : '500px',
            zIndex: 1
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            style={{
              fontSize: isMobile ? '32px' : '42px',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: 'white'
            }}
          >
            Gelt Capital USA
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            style={{
              fontSize: isMobile ? '28px' : '36px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#f5c542',
              textShadow: '0 0 15px rgba(245, 197, 66, 0.3)'
            }}
          >
            Short Term Business Loans
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            style={{
              fontSize: isMobile ? '22px' : '26px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white'
            }}
          >
            Powerful Partnerships
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#cccccc',
              marginBottom: '30px'
            }}
          >
            If Gelt Capital USA's direct programs aren't the best fit for you, our Marketplace gotcha covered! Gelt Capital USA has created its own unique Marketplace, with over a decade of vetted partnerships.
          </motion.p>
          
          <Link to="/apply" style={{ textDecoration: 'none' }}>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(245, 197, 66, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
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
              Apply Now
            </motion.button>
          </Link>
        </motion.div>
        
        {/* Image Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInLeft}
          style={{
            flex: isMobile ? 'none' : '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          <motion.img 
            src={marketplaceImage} 
            alt="Gelt Capital USA Marketplace" 
            initial={{ opacity: 0.8 }}
            animate={{ 
              opacity: 1,
              y: [0, -10, 0]
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            style={{
              maxWidth: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 10px 30px rgba(99, 216, 242, 0.3))'
            }}
          />
          
          {/* Floating circles animation */}
          {!isMobile && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    opacity: 0
                  }}
                  animate={{ 
                    x: [
                      Math.random() * 80 - 40,
                      Math.random() * 80 - 40,
                      Math.random() * 80 - 40
                    ],
                    y: [
                      Math.random() * 80 - 40,
                      Math.random() * 80 - 40,
                      Math.random() * 80 - 40
                    ],
                    opacity: [0.4, 0.7, 0.4],
                    scale: [
                      Math.random() * 0.4 + 0.3,
                      Math.random() * 0.4 + 0.3,
                      Math.random() * 0.4 + 0.3
                    ]
                  }}
                  transition={{
                    duration: 12 + Math.random() * 15,
                    repeat: Infinity,
                    repeatType: 'mirror'
                  }}
                  style={{
                    position: 'absolute',
                    width: 15 + Math.random() * 35,
                    height: 15 + Math.random() * 35,
                    borderRadius: '50%',
                    background: i % 3 === 0 
                      ? palette.skyBlueTransparent 
                      : i % 3 === 1 
                        ? palette.lavenderTransparent 
                        : palette.pinkTransparent,
                    filter: 'blur(3px)',
                    zIndex: 0
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      </section>
      
      {/* Add the Term Calculator here, before the "Explore Our Financing Options" section */}
      <TermCalculator />
      
      {/* Title for Cards Section with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto 60px'
        }}
      >
        <h2 style={{
          fontSize: isMobile ? '28px' : '36px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#f5c542'
        }}>
          Explore Our Financing Options
        </h2>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          color: '#cccccc'
        }}>
          We offer a wide range of specialized funding solutions to meet your unique business needs.
        </p>
      </motion.div>
      
      {/* Service Cards Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={staggerContainer}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
          gap: '25px'
        }}
      >
        {serviceCards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover="hover"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              borderRadius: '16px',
              padding: '30px',
              color: '#333',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              height: '100%',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}
          >
            <motion.div
              whileHover={{ 
                rotateY: 360,
                color: '#f5c542'
              }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '32px',
                marginBottom: '20px',
                backgroundColor: 'rgba(245, 197, 66, 0.15)',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#333'
              }}
            >
              <card.icon size={32} />
            </motion.div>
            
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              {card.title}
            </h3>
            
            <p style={{
              fontSize: '14px',
              lineHeight: 1.6,
              color: '#666',
              flex: 1
            }}>
              {card.description}
            </p>
            
            <motion.div
              whileHover={{ x: 5 }}
              style={{
                marginTop: '20px',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#f5c542',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <Link to="/apply" style={{ textDecoration: 'none', color: '#f5c542', display: 'flex', alignItems: 'center' }}>
                Learn More
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                  style={{ marginLeft: '5px' }}
                >
                  →
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default Service;
