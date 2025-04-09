import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';
import story1 from '../../assets/story1.jpg';
import story2 from '../../assets/story2.jpg';
import story3 from '../../assets/story3.jpg';

const OurStory = () => {
  const { isMobile, isTablet } = useResponsive();
  const navigate = useNavigate();

  // Function to handle navigation to Contact page
  const handleContactNavigation = () => {
    navigate('/contact');
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Timeline items data
  const timelineItems = [
    {
      id: 1,
      title: "Our Beginning",
      image: story1,
      year: "2010",
      content: "Gelt Capital USA launched in Miami with a focus on high-value capital injections and strategic loan offerings to select Fortune 500 and S&P 500 clients."
    },
    {
      id: 2,
      title: "Innovation & Growth",
      image: story2,
      year: "2015",
      content: "Over time, we capitalized on fintech innovations, like blockchain-backed risk mitigation and AI-driven due diligence tools to streamline underwriting and expand our portfolio."
    },
    {
      id: 3,
      title: "Leading the Industry",
      image: story3,
      year: "Today",
      content: "Today, Gelt Capital USA's reputation for nimble financing, robust liquidity management, and efficient capital deployment sets us apart in a rapidly evolving fintech landscape, positioning us as a leading resource for global corporations seeking tailored funding solutions."
    }
  ];

  return (
    <div style={{
      background: palette.darkBlue,
      color: 'white',
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden'
    }}>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{
          padding: isMobile ? '60px 20px' : '120px 20px 80px',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        {/* Background decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${palette.lavenderRGBA}, transparent)`,
            filter: 'blur(60px)',
            zIndex: 0
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-80px',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${palette.skyBlueRGBA}, transparent)`,
            filter: 'blur(60px)',
            zIndex: 0
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: isMobile ? '36px' : '48px',
              fontWeight: 'bold',
              color: palette.skyBlue,
              marginBottom: '20px'
            }}
          >
            Our Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: isMobile ? '16px' : '18px',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: 1.6
            }}
          >
            Gelt Capital USA launched in Miami with a focus on high-value capital injections and strategic loan offerings to select Fortune 500 and S&P 500 clients. Over time, they capitalized on fintech innovations, like blockchain-backed risk mitigation and AI-driven due diligence tools to streamline underwriting and expand their portfolio. Today, Gelt Capital USA's reputation for nimble financing, robust liquidity management, and efficient capital deployment sets them apart in a rapidly evolving fintech landscape, positioning them as a leading resource for global corporations seeking tailored funding solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section style={{
        padding: '0 20px 80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {timelineItems.map((item, _) => (
            <motion.div
              key={item.id}
              variants={fadeIn}
              style={{
                marginBottom: '80px',
                position: 'relative'
              }}
            >
              <motion.div
                variants={imageAnimation}
                style={{
                  margin: '0 auto 30px',
                  width: '100%',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  position: 'relative'
                }}
              >
                <img 
                  src={item.image} 
                  alt={`Gelt Capital USA - ${item.title}`} 
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                  }}
                />
                
                {/* Enhanced gradient overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(
                    to top,
                    rgba(3, 4, 14, 0.95) 0%,
                    rgba(3, 4, 14, 0.85) 20%,
                    rgba(3, 4, 14, 0.5) 40%,
                    rgba(3, 4, 14, 0.1) 80%
                  )`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '40px'
                }}>
                  <h2 style={{
                    fontSize: isMobile ? '24px' : '32px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    color: palette.skyBlue,
                    textAlign: 'left'
                  }}>
                    {item.title}
                  </h2>
                  
                  <p style={{
                    fontSize: '16px',
                    lineHeight: 1.7,
                    color: 'white',
                    maxWidth: '900px',
                    textAlign: 'left'
                  }}>
                    {item.content}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
        style={{
          padding: '80px 20px',
          background: 'linear-gradient(to bottom, rgba(3, 4, 14, 0.8), rgba(3, 4, 14, 1))',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative element */}
        <motion.div
          animate={{ 
            rotate: 360,
            transition: { duration: 25, repeat: Infinity, ease: "linear" } 
          }}
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-150px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: `2px solid ${palette.skyBlueTransparent}`,
            opacity: 0.3,
            zIndex: 0
          }}
        />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.h2
            variants={fadeIn}
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: palette.skyBlue,
              textAlign: 'center',
              marginBottom: '60px'
            }}
          >
            Our Values
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
            gap: '30px'
          }}>
            {[
              { title: "Innovation", description: "We continuously seek cutting-edge financial solutions and technologies to provide superior value to our clients." },
              { title: "Integrity", description: "We maintain the highest standards of professional ethics and transparency in all our dealings." },
              { title: "Excellence", description: "We strive for exceptional performance and results that exceed expectations." },
              { title: "Partnership", description: "We build lasting relationships with our clients based on mutual trust and shared success." },
              { title: "Adaptability", description: "We embrace change and evolve our strategies to stay ahead in a dynamic financial landscape." },
              { title: "Expertise", description: "We leverage deep industry knowledge and specialized skills to deliver optimal financial outcomes." }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  padding: '30px',
                  height: '100%',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '15px'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: '#CCCCCC',
                  flex: 1
                }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '80px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: palette.skyBlue,
          marginBottom: '20px'
        }}>
          Join Our Journey
        </h2>
        <p style={{
          fontSize: '18px',
          maxWidth: '700px',
          margin: '0 auto 30px',
          color: '#CCCCCC'
        }}>
          Partner with Gelt Capital USA and experience financial solutions tailored to your unique business needs.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContactNavigation}
          style={{
            backgroundColor: palette.skyBlue,
            color: palette.darkBlue,
            border: 'none',
            borderRadius: '50px',
            padding: '15px 40px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(99, 216, 242, 0.3)'
          }}
        >
          CONTACT US
        </motion.button>
      </motion.section>
    </div>
  );
};

export default OurStory;
