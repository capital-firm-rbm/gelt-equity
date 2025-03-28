import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaTools, FaStore, FaHardHat, FaWrench, FaBox } from 'react-icons/fa';
import phonesImage from '../../assets/Phones.png';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive'; // Import the responsive hook

const InformationalSection = () => {
  const { isMobile, isTablet } = useResponsive();
  const sectionRef = useRef(null);
  const businessTypesRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: businessScrollProgress } = useScroll({
    target: businessTypesRef,
    offset: ["start end", "end start"]
  });
  
  // Create scroll-based animation values
  const businessGridScale = useTransform(businessScrollProgress, [0, 0.5], [0.8, 1]);
  const businessGridRotate = useTransform(businessScrollProgress, [0, 1], [-5, 0]);
  
  // Business types data for the grid
  const businessTypes = [
    { name: 'Wholesale', icon: FaBox, isHighlighted: false },
    { name: 'Construction', icon: FaHardHat, isHighlighted: true },
    { name: 'Auto Repair', icon: FaWrench, isHighlighted: false },
    { name: 'Retail', icon: FaStore, isHighlighted: false },
    { name: 'Service', icon: FaTools, isHighlighted: false },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Pre-compute all possible transforms outside the callbacks
  const businessTransformsY = [
    useTransform(businessScrollProgress, [0, 0.5, 1], [50, 0, -30]), // Even indices (0, 2, 4)
    useTransform(businessScrollProgress, [0, 0.5, 1], [-50, 0, 30])  // Odd indices (1, 3)
  ];

  const businessTransformsX = [
    useTransform(businessScrollProgress, [0, 0.5, 1], [50, 0, -30]),   // Index % 3 === 0
    useTransform(businessScrollProgress, [0, 0.5, 1], [-50, 0, 30]),   // Index % 3 === 1
    useTransform(businessScrollProgress, [0, 0.5, 1], [0, 0, 0])       // Index % 3 === 2
  ];

  return (
    <section 
      ref={sectionRef}
      style={{ 
        background: palette.darkBlue,
        width: '100%',
        padding: isMobile ? '50px 0' : '100px 0',
        position: 'relative'
      }}
    >
      {/* First subsection - We work with all business types */}
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto 60px auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: isMobile || isTablet ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: isMobile || isTablet ? '40px' : '0'
      }}>
        {/* Business type grid - displayed below text on mobile */}
        {!isMobile && !isTablet && (
          <motion.div
            ref={businessTypesRef}
            style={{ 
              width: '45%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              justifyContent: 'center',
              scale: businessGridScale,
              rotate: businessGridRotate
            }}
          >
            {businessTypes.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ 
                  width: index === 1 ? '220px' : '130px',
                  height: index === 1 ? '110px' : '130px',
                  backgroundColor: index === 1 ? palette.lavender : 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '15px',
                  color: 'white',
                  position: 'relative',
                  zIndex: index === 1 ? 2 : 1,
                  y: businessTransformsY[index % 2], // Use pre-computed transform based on index
                  x: businessTransformsX[index % 3]  // Use pre-computed transform based on index
                }}
              >
                <business.icon size={28} color="white" style={{ marginBottom: '10px' }} />
                <span style={{ 
                  fontSize: '14px',
                  color: index === 1 ? 'white' : 'rgba(255, 255, 255, 0.7)'
                }}>
                  {business.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Text content - always on top for mobile */}
        <motion.div
          style={{ 
            width: isMobile || isTablet ? '100%' : '45%',
            color: 'white',
            textAlign: 'left',
            y: useTransform(scrollYProgress, [0, 1], [0, 50])
          }}
        >
          <motion.h2
            variants={fadeInUp}
            style={{ 
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: 'bold',
              color: palette.skyBlue,
              marginBottom: '25px'
            }}
          >
            We work with all business types
          </motion.h2>
          
          <motion.h3
            variants={fadeInUp}
            style={{ 
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white'
            }}
          >
            YL Capital believes in ALL small businesses.
          </motion.h3>
          
          <motion.p
            variants={fadeInUp}
            style={{ 
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '25px',
              color: '#ffffff'
            }}
          >
            We do business finance differently. With more options tailored for you, less hassle and the right guidance to keep your mind at ease. We make things simple, to take the guesswork out of small business funding. We want you to be able to apply for your loan quickly, get a decision the same day, see the funds show up in your bank account, and have a system that is designed specially just for you and your needs that you can access from any device at any time. Merchant Cash Advance is our expertise
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            style={{ marginTop: '30px' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                backgroundColor: palette.skyBlue,
                color: palette.darkBlue,
                border: 'none',
                borderRadius: '50px',
                padding: '15px 30px',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              APPLY NOW
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Business type grid - displayed on mobile/tablet devices */}
        {(isMobile || isTablet) && (
          <motion.div
            ref={businessTypesRef}
            style={{ 
              width: '100%',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              marginTop: '20px'
            }}
          >
            {/* On mobile, show one business type at a time with horizontal scroll */}
            {isMobile ? (
              <div style={{
                width: '100%',
                overflowX: 'auto',
                scrollbarWidth: 'none', // Hide scrollbar for Firefox
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
              }}>
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  paddingBottom: '10px', // Space for potential scrollbar
                  width: 'max-content' // Allow container to grow with children
                }}>
                  {businessTypes.map((business, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      style={{ 
                        width: '180px',
                        height: '120px',
                        backgroundColor: index === 1 ? palette.lavender : 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '15px',
                        color: 'white',
                        marginLeft: index === 0 ? '0' : '10px',
                        flexShrink: 0 // Prevent items from shrinking
                      }}
                    >
                      <business.icon size={28} color="white" style={{ marginBottom: '10px' }} />
                      <span style={{ 
                        fontSize: '14px',
                        color: index === 1 ? 'white' : 'rgba(255, 255, 255, 0.7)'
                      }}>
                        {business.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              // On tablet, show as a wrapped grid
              businessTypes.map((business, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{ 
                    width: '170px',
                    height: '100px',
                    backgroundColor: index === 1 ? palette.lavender : 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '15px',
                    color: 'white',
                    margin: '5px'
                  }}
                >
                  <business.icon size={24} color="white" style={{ marginBottom: '8px' }} />
                  <span style={{ 
                    fontSize: '14px',
                    color: index === 1 ? 'white' : 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {business.name}
                  </span>
                </motion.div>
              ))
            )}
          </motion.div>
        )}
      </div>

      {/* Second subsection - Get it together */}
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: isMobile || isTablet ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: isMobile || isTablet ? '40px' : '0'
      }}>
        {/* Text content - always first on mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ 
            width: isMobile || isTablet ? '100%' : '45%',
            color: 'white',
            textAlign: 'left',
            order: isMobile || isTablet ? 1 : 0
          }}
        >
          <motion.h2
            variants={fadeInUp}
            style={{ 
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: 'bold',
              color: palette.skyBlue,
              marginBottom: '25px'
            }}
          >
            Get it together
          </motion.h2>
          
          <motion.h3
            variants={fadeInUp}
            style={{ 
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white'
            }}
          >
            and keep it together.
          </motion.h3>
          
          <motion.p
            variants={fadeInUp}
            style={{ 
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '25px',
              color: '#ffffff'
            }}
          >
            Put all your programs and payment information in one place so it's easier to track your progress. You can access your online portal from any device and even see when you're eligible for more money.
          </motion.p>
          
          <motion.p
            variants={fadeInUp}
            style={{ 
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '30px',
              color: '#ffffff'
            }}
          >
            It has never been easier to get funded for your small business, and you won't ever need to look anywhere else again. Right here at YL Capital, we have you and your business needs in mind and will do whatever it takes to help you elevate your business to the next level. Small business loans have never been so easy.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            style={{ marginTop: '30px' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                backgroundColor: palette.skyBlue,
                color: palette.darkBlue,
                border: 'none',
                borderRadius: '50px',
                padding: '15px 30px',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              APPLY NOW
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Phones image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            width: isMobile || isTablet ? '100%' : '45%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            order: isMobile || isTablet ? 0 : 1,
            marginBottom: isMobile || isTablet ? '20px' : '0'
          }}
        >
          <img 
            src={phonesImage} 
            alt="YL Capital Mobile App Screens" 
            style={{ 
              maxWidth: '100%',
              height: 'auto',
              transform: isMobile ? 'rotate(0deg)' : 'rotate(5deg)'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InformationalSection;
