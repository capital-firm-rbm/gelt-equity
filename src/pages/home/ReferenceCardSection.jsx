import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaPlus, FaArrowRight } from 'react-icons/fa';
import palette from '../../styles/colors';

const ReferenceCardSection = () => {
  // Card data
  const cards = [
    {
      title: "More about YL Capital",
      description: "You should know everything about the company you work with and trust to give your capital.",
      learnMoreLink: "/about"
    },
    {
      title: "Explore YL Capital Program",
      description: "We offer you a suit of options along with our marketplace to help you get the best option for your business.",
      learnMoreLink: "/programs"
    }
  ];

  // Animation variants
  // eslint-disable-next-line no-unused-vars
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
      padding: '100px 0',
      position: 'relative'
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '30px',
        flexWrap: 'wrap'
      }}>
        {/* Cards */}
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            style={{ 
              flex: '1',
              minWidth: '300px',
              maxWidth: '570px',
              backgroundColor: '#2A2A2A',
              borderRadius: '15px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            {/* Icon */}
            <div style={{ 
              display: 'flex',
              marginBottom: '25px'
            }}>
              <div style={{ 
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: palette.skyBlue,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <FaPlus color={palette.darkBlue} size={18} />
              </div>
            </div>

            {/* Title */}
            <h3 style={{ 
              fontSize: '28px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '20px'
            }}>
              {card.title}
            </h3>

            {/* Description */}
            <p style={{ 
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#CCCCCC',
              marginBottom: '30px',
              flex: '1'
            }}>
              {card.description}
            </p>

            {/* Learn More Link */}
            <motion.a
              href={card.learnMoreLink}
              whileHover={{ x: 5 }}
              style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: palette.skyBlue,
                fontWeight: 'bold',
                fontSize: '16px',
                textDecoration: 'none',
                alignSelf: 'flex-start'
              }}
            >
              Learn more
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <FaArrowRight size={14} />
              </div>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReferenceCardSection;
