import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const ReferenceCardSection = () => {
  const { isMobile } = useResponsive();
  
  // Card data
  const cards = [
    {
      title: "More about Onyx Equity",
      description: "You should know everything about the company you work with and trust to give your capital.",
      learnMoreLink: "/about/our-story"
    },
    {
      title: "Explore Onyx Equity Program",
      description: "We offer you a suit of options along with our marketplace to help you get the best option for your business.",
      learnMoreLink: "/about/our-story"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section style={{ 
      background: palette.darkBlue,
      width: '100%',
      padding: isMobile ? '50px 0' : '80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
      }}>
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            fontSize: isMobile ? '28px' : '36px',
            fontWeight: 'bold',
            color: palette.skyBlue,
            marginBottom: isMobile ? '30px' : '50px',
            textAlign: 'center'
          }}
        >
          Learn more about our programs
        </motion.h2>

        {/* Cards container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ 
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            gap: isMobile ? '20px' : '30px',
            width: '100%'
          }}
        >
          {/* On mobile, stack the cards vertically. On tablet/desktop, show side by side */}
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                padding: isMobile ? '25px' : '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: isMobile ? 'none' : '1',
                maxWidth: isMobile ? '100%' : '550px',
                height: isMobile ? 'auto' : '300px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Card Title - Moved up to replace the icon */}
              <h3 style={{ 
                fontSize: isMobile ? '22px' : '28px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '20px'
              }}>
                {card.title}
              </h3>
              
              {/* Card Description */}
              <p style={{ 
                fontSize: isMobile ? '15px' : '16px',
                color: '#CCCCCC',
                lineHeight: '1.6',
                marginBottom: '30px'
              }}>
                {card.description}
              </p>
              
              {/* Learn More Link */}
              <Link 
                to={card.learnMoreLink} 
                style={{ textDecoration: 'none' }}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    alignSelf: 'flex-start'
                  }}
                >
                  <span style={{ 
                    color: palette.skyBlue,
                    fontWeight: 'bold',
                    fontSize: isMobile ? '14px' : '16px'
                  }}>
                    Learn more
                  </span>
                  <FaArrowRight size={14} color={palette.skyBlue} />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReferenceCardSection;
