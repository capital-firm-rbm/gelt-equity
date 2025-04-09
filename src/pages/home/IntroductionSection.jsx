import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLaptopCode, FaChartLine, FaMoneyBillWave, FaHandshake } from 'react-icons/fa';
import { FaPencilAlt, FaCalendarDay, FaBolt, FaFileInvoiceDollar } from 'react-icons/fa';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const IntroductionSection = () => {
  const { isMobile, isTablet } = useResponsive();
  const sectionRef = useRef(null);
  const featuresSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: featuresScrollProgress } = useScroll({
    target: featuresSectionRef,
    offset: ["start end", "end start"]
  });

  // Desktop animations
  const headerY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scaleContainer = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const lineY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Shared animations
  const paraY = useTransform(scrollYProgress, [0, 1], [0, isMobile || isTablet ? 50 : -20]);
  
  // Feature items with icons and descriptions (for desktop)
  const features = [
    {
      icon: FaPencilAlt,
      title: "Easy Sign Up",
      description: "Simple online application completed within minutes.",
      color: palette.skyBlue
    },
    {
      icon: FaCalendarDay,
      title: "Same-Day Decision",
      description: "Easy and fast so you can focus on running your business.",
      color: palette.skyBlue
    },
    {
      icon: FaBolt,
      title: "Fast Funding",
      description: "Funds automatically deposited into your business account the same day.",
      color: palette.skyBlue
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Bad Credit?",
      description: "Business loans for bad credit. No matter your profile, what matters is your cash flow.",
      color: palette.skyBlue
    }
  ];

  // Products data (for mobile/tablet)
  const products = [
    {
      title: "Merchant Cash Advance",
      icon: FaMoneyBillWave,
      description: "Flexible funding based on your business sales, not your credit score.",
      color: palette.lavender
    },
    {
      title: "Business Loans",
      icon: FaHandshake,
      description: "Traditional business loans with competitive rates and flexible terms.",
      color: palette.skyBlue
    },
    {
      title: "Payment Processing",
      icon: FaChartLine,
      description: "Streamlined payment solutions that integrate with your business.",
      color: palette.mint
    },
    {
      title: "Equipment Financing",
      icon: FaLaptopCode,
      description: "Get the equipment your business needs with affordable financing.",
      color: palette.coral
    }
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Desktop-specific variants
  const desktopContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const desktopItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      ref={sectionRef}
      style={{ 
        background: palette.darkBlue,
        width: '100%',
        padding: isMobile ? '60px 0' : '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Mobile/Tablet Version */}
      {(isMobile || isTablet) && (
        <div style={{ 
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'left'
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: 'bold',
              color: palette.skyBlue,
              marginBottom: '30px'
            }}
          >
            Hi, We're Gelt Capital USA
          </motion.h2>
          
          <motion.p
            style={{ 
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '25px',
              color: '#ffffff',
              y: paraY
            }}
          >
            We do business finance differently. With more options tailored for you, less hassle and the right guidance to keep your mind at ease. We make things simple, to take the guesswork out of small business funding.
          </motion.p>
          
          <motion.p
            style={{ 
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '25px',
              color: '#ffffff',
              y: paraY
            }}
          >
            We want you to be able to apply for your loan quickly, get a decision the same day, see the funds show up in your bank account, and have a system that is designed specially just for you and your needs that you can access from any device at any time. Our primary products include:
          </motion.p>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
              marginTop: '30px',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '20px'
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                style={{
                  padding: '30px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${product.color}30`,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <div style={{ 
                  color: product.color, 
                  fontSize: '30px',
                  marginBottom: '20px'
                }}>
                  <product.icon />
                </div>
                <h3 style={{ 
                  fontSize: isMobile ? '18px' : '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '15px'
                }}>
                  {product.title}
                </h3>
                <p style={{ 
                  fontSize: '14px',
                  color: '#CCCCCC',
                  lineHeight: '1.6',
                  flex: '1'
                }}>
                  {product.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Desktop Version */}
      {!isMobile && !isTablet && (
        <div style={{ 
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          position: 'relative'
        }}>
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              width: '45%',
              color: 'white',
              textAlign: 'left',
              y: headerY,
              opacity: headerOpacity,
              scale: scaleContainer
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ 
                fontSize: '48px',
                fontWeight: 'bold',
                color: palette.skyBlue,
                marginBottom: '30px'
              }}
            >
              Hi, We're Gelt Capital USA
            </motion.h2>
            
            <motion.p
              style={{ 
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '25px',
                color: '#ffffff',
                y: paraY
              }}
            >
              We do business finance differently. With more options tailored for you, less hassle and the right guidance to keep your mind at ease. We make things simple, to take the guesswork out of small business funding.
            </motion.p>
            
            <motion.p
              style={{ 
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '25px',
                color: '#ffffff',
                y: paraY
              }}
            >
              We want you to be able to apply for your loan quickly, get a decision the same day, see the funds show up in your bank account, and have a system that is designed specially just for you and your needs that you can access from any device at any time. Our primary products include:
            </motion.p>
            
            <motion.div
              variants={desktopContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ marginTop: '30px' }}
            >
              <motion.div variants={desktopItemVariants} style={{ marginBottom: '10px' }}>
                <a href="#" style={{ color: palette.skyBlue, fontSize: '18px', textDecoration: 'none' }}>
                  Merchant Cash Advance
                </a>
              </motion.div>
              <motion.div variants={desktopItemVariants} style={{ marginBottom: '10px' }}>
                <a href="#" style={{ color: palette.skyBlue, fontSize: '18px', textDecoration: 'none' }}>
                  Lines of Credit
                </a>
              </motion.div>
              <motion.div variants={desktopItemVariants}>
                <a href="#" style={{ color: palette.skyBlue, fontSize: '18px', textDecoration: 'none' }}>
                  SBA
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right content - Timeline */}
          <motion.div
            style={{ 
              width: '45%',
              position: 'relative',
              minHeight: '650px'
            }}
          >
            {/* Container to position the timeline and features together */}
            <div 
              ref={featuresSectionRef}
              style={{ 
                position: 'relative', 
                display: 'flex',
                height: '80%'
              }}
            >
              {/* Vertical line with vertical parallax effect */}
              <motion.div 
                style={{
                  position: 'absolute',
                  left: '92px',
                  width: '4px',
                  top: '17px',
                  height: '100%',
                  background: palette.skyBlue,
                  zIndex: 1,
                  y: lineY
                }}
              />
              
              {/* Feature items content with icons integrated for proper alignment */}
              <div style={{ marginLeft: '20px', width: '100%' }}>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    style={{ 
                      display: 'flex',
                      marginBottom: '80px',
                      position: 'relative',
                      paddingLeft: '100px'
                    }}
                  >
                    {/* Icon with entry and exit animations */}
                    <motion.div 
                      style={{
                        position: 'absolute',
                        left: '47px',
                        top: '0',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: palette.darkBlue,
                        border: `2px solid ${feature.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2
                      }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.4 }}
                    >
                      <feature.icon size={24} color={feature.color} />
                    </motion.div>
                    
                    {/* Content with entry and exit animations */}
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      style={{ 
                        color: 'white',
                        textAlign: 'left'
                      }}
                    >
                      <h3 style={{ 
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        marginLeft: '30px',
                        color: 'white'
                      }}>{feature.title}</h3>
                      <p style={{ 
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#aaa',
                        marginLeft: '30px',
                      }}>{feature.description}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default IntroductionSection;
