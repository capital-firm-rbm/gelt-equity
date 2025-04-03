import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCreditCard, FaChartLine } from 'react-icons/fa';
import topImage from '../../assets/top-image-02.png';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';
import pro1 from '../../assets/pro1.png';
import pro2 from '../../assets/pro2.png';
import pro3 from '../../assets/pro3.png';
import { Link } from 'react-router-dom';

const WelcomeSection = () => {
  const { isMobile, isTablet } = useResponsive();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Enhanced parallax transforms with different rates and directions
  // Main image - moderate upward movement and subtle horizontal shift
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const imageX = useTransform(scrollYProgress, [0, 1], [0, -20]); // Subtle side movement
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);
  
  // Revenue pill - faster upward movement WITHOUT rotation
  const revenuePillY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  // Removed the rotation transform for the revenue pill
  
  // Dollar sign - moves downward instead for contrast
  const dollarY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const dollarScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const dollarRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  
  // Gear - moves up and rotates more significantly
  const gearY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const gearRotate = useTransform(scrollYProgress, [0, 1], [0, 180]); // Full half rotation
  
  // Chart - moves horizontally as well as vertically
  const chartY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const chartX = useTransform(scrollYProgress, [0, 1], [0, 30]);
  
  // Text parallax
  const textY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        duration: 0.5 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Underline animation variants
  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: '220px',
      opacity: 1, 
      transition: { 
        delay: 1,
        duration: 0.8,
        ease: "easeInOut"
      } 
    }
  };

  return (
    <section 
      ref={sectionRef}
      style={{ 
        background: palette.darkBlue,
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: isMobile || isTablet ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Left content - on top for mobile */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            maxWidth: isMobile || isTablet ? '100%' : '600px',
            color: 'white',
            padding: isMobile ? '20px 0' : '40px 0',
            textAlign: 'left',
            y: textY
          }}
        >
          {/* Top tag line */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              gap: '10px'
            }}
          >
            <FaCreditCard color={palette.skyBlue} size={isMobile ? 16 : 20} />
            <span style={{ color: '#ffffff', fontSize: isMobile ? '14px' : '16px' }}>
              Approved and funded the same day
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontSize: isMobile ? '36px' : (isTablet ? '48px' : '64px'),
              fontWeight: 'bold',
              marginBottom: '20px',
              position: 'relative'
            }}
          >
            Business funding is <br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              what we do
              <motion.div 
                variants={underlineVariants}
                style={{ 
                  height: isMobile ? '5px' : '8px', 
                  background: palette.skyBlue,
                  position: 'absolute',
                  bottom: '-15px',
                  left: 0,
                  borderRadius: '4px'
                }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            style={{ 
              fontSize: isMobile ? '16px' : '18px',
              marginTop: '20px',
              marginBottom: '40px',
              lineHeight: '1.6',
              color: '#ffffff',
              maxWidth: isMobile || isTablet ? '100%' : '500px'
            }}
          >
            Our all-in-one working capital funding platform and team of professionals.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link to="/apply" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  backgroundColor: palette.skyBlue,
                  color: palette.darkBlue,
                  border: 'none',
                  borderRadius: '50px',
                  padding: isMobile ? '12px 24px' : '15px 30px',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '14px' : '16px',
                  cursor: 'pointer',
                  textTransform: 'uppercase'
                }}
              >
                Apply Now
              </motion.button>
            </Link>
          </motion.div>

          {/* Separator line */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              width: '100%', 
              height: '1px', 
              background: '#333', 
              margin: isMobile ? '40px 0 20px 0' : '60px 0 30px 0' 
            }}
          />

          {/* Customer testimonial section - hide on mobile */}
          {!isMobile && (
            <motion.div 
              variants={itemVariants}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}
            >
              {/* Avatar images */}
              <div style={{ position: 'relative', width: '140px', height: '50px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  position: 'absolute',
                  left: '0',
                  zIndex: 3,
                  overflow: 'hidden'
                }}>
                  <img src={pro1} alt="Customer 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  position: 'absolute',
                  left: '30px',
                  zIndex: 2,
                  overflow: 'hidden'
                }}>
                  <img src={pro2} alt="Customer 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  position: 'absolute',
                  left: '60px',
                  zIndex: 1,
                  overflow: 'hidden'
                }}>
                  <img src={pro3} alt="Customer 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: palette.skyBlue,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  position: 'absolute',
                  right: '0',
                  zIndex: 4,
                  color: palette.darkBlue
                }}>
                  300+
                </div>
              </div>

              {/* Join text */}
              <p style={{ fontSize: '16px', lineHeight: '1.4' }}>
                Join other enterpreneurs who used ONYX EQUITY funding for their business!
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Right content */}
        {isMobile || isTablet ? (
          // Mobile version - simplified
          <motion.div 
            style={{ 
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px'
            }}
          >
            <motion.img 
              src={topImage} 
              alt="ONYX EQUITY Mobile App"
              style={{ 
                maxWidth: '70%',
                height: 'auto',
                y: imageY,
                x: imageX,
                scale: imageScale
              }}
            />
          </motion.div>
        ) : (
          // Desktop version - with all decorative elements
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ 
              flex: '1',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <motion.img 
              src={topImage} 
              alt="ONYX EQUITY Mobile App"
              style={{ 
                maxWidth: '100%',
                height: 'auto',
                y: imageY,
                x: imageX,
                scale: imageScale
              }}
            />

            {/* Revenue pill - with vertical movement only */}
            <motion.div
              style={{
                position: 'absolute',
                top: '50px',
                right: '350px',
                background: 'white',
                padding: '15px 20px',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                zIndex: 5,
                y: revenuePillY
                // Rotation removed
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ fontWeight: 'bold', color: '#333' }}>Revenue</span>
                <span style={{ color: palette.mint, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  (+50%)
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '5px' }}>
                    <path d="M7 14l5-5 5 5" stroke={palette.mint} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </motion.div>

            {/* Dollar sign with enhanced movement */}
            <motion.div
              style={{
                position: 'absolute',
                top: '55%',
                right: '15%',
                color: '#999',
                fontSize: '40px',
                fontWeight: 'bold',
                y: dollarY,
                scale: dollarScale,
                rotate: dollarRotate
              }}
            >
              $
            </motion.div>

            {/* Gear decoration with enhanced continuous rotation */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '15%',
                right: '25%',
                y: gearY,
                rotate: gearRotate
              }}
            >
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </motion.div>

            {/* Chart decoration with horizontal movement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '20%',
                right: '5%',
                background: 'white',
                borderRadius: '8px',
                padding: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                width: '80px',
                y: chartY,
                x: chartX
              }}
            >
              <div style={{ width: '100%', height: '10px', display: 'flex', alignItems: 'center', marginBottom: '5px', gap: '5px' }}>
                <div style={{ width: '5px', height: '10px', borderRadius: '2px', background: '#666' }}></div>
                <div style={{ flex: 1, height: '6px', background: '#5b6af2', borderRadius: '3px' }}></div>
                <span style={{ fontSize: '8px', color: '#666' }}>70%</span>
              </div>
              <div style={{ width: '100%', height: '10px', display: 'flex', alignItems: 'center', marginBottom: '5px', gap: '5px' }}>
                <div style={{ width: '5px', height: '10px', borderRadius: '2px', background: '#666' }}></div>
                <div style={{ flex: 0.6, height: '6px', background: '#f272ae', borderRadius: '3px' }}></div>
                <span style={{ fontSize: '8px', color: '#666' }}>40%</span>
              </div>
              <div style={{ width: '100%', height: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '5px', height: '10px', borderRadius: '2px', background: '#666' }}></div>
                <div style={{ flex: 0.9, height: '6px', background: '#63d8f2', borderRadius: '3px' }}></div>
                <span style={{ fontSize: '8px', color: '#666' }}>90%</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WelcomeSection;
