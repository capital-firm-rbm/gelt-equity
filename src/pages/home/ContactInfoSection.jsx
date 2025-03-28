import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaPencilAlt } from 'react-icons/fa';
import waveBackground from '../../assets/wave.png';
import palette from '../../styles/colors';

const ContactInfoSection = () => {
  // Contact info data
  const contactCards = [
    {
      title: "Phone",
      info: "404-920-4946",
      icon: FaPhone,
      color: palette.skyBlue
    },
    {
      title: "Address",
      info: "55 Water St, Miami, FL 33131",
      icon: FaMapMarkerAlt,
      color: palette.skyBlue
    },
    {
      title: "Email",
      info: "info@ylcapital.com",
      icon: FaEnvelope,
      color: palette.skyBlue
    }
  ];

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4 }
    }
  };

  const subHeadingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.6, delay: 0.2 } 
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, delay: 0.4 } 
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.6
      } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section style={{ 
      background: palette.darkBlue,
      width: '100%',
      padding: '120px 0 80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Yellow wave background */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '60%',
        backgroundImage: `url(${waveBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center left',
        zIndex: 1
      }} />

      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* CTA Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: '100px'
        }}>
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true }}
            style={{ 
              fontSize: '48px',
              fontWeight: 'bold',
              color: palette.skyBlue,
              marginBottom: '15px',
              maxWidth: '600px'
            }}
          >
            See what you qualified for
          </motion.h2>

          <motion.p
            variants={subHeadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
              fontSize: '24px',
              color: 'white',
              marginBottom: '40px'
            }}
          >
            No really, why wait? Let's do this!
          </motion.p>

          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            whileTap="tap"
            style={{ 
              backgroundColor: palette.skyBlue,
              color: palette.darkBlue,
              border: 'none',
              borderRadius: '50px',
              padding: '15px 30px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <FaPencilAlt size={16} />
            APPLY NOW
          </motion.button>
        </div>

        {/* Contact Cards */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false }}
          style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'flex-start',
            width: '100%'
          }}
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
              style={{ 
                flex: '1',
                minWidth: '250px',
                maxWidth: '380px',
                backgroundColor: 'rgba(42, 42, 42, 0.95)',
                borderRadius: '10px',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <card.icon size={30} color={card.color} />
              </div>
              <h3 style={{ 
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '10px'
              }}>
                {card.title}
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: '#CCCCCC',
                lineHeight: '1.6'
              }}>
                {card.info}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
