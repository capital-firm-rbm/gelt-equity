import React, { useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from 'react-icons/fa';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const TestimonialSection = () => {
  const { isMobile, isTablet } = useResponsive();
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef(null);

  // Testimonial data - expanded to include both mobile and desktop formats
  const testimonials = [
    {
      name: "Leslie Alexander",
      company: "Bright Ideas Inc.",
      role: "CEO",
      rating: 5,
      image: "/src/assets/test1.png",
      text: "I've had nothing but positive experiences with this company. Their dedication to simplifying small business funding is truly remarkable, and it shows in every aspect of their service. The application process was quick and easy, and I was impressed with how tailored their options were to my specific needs."
    },
    {
      name: "Dennis Hüttner",
      company: "Tech Innovate",
      role: "Founder",
      rating: 5,
      image: "/src/assets/test2.png",
      text: "I was initially hesitant to apply for a loan, but after hearing about this company's reputation for exceptional customer service, I decided to give it a try. I am so glad I did! The team went above and beyond to ensure that I had all of the information I needed to make informed decisions about my funding options. They were patient, understanding, and truly cared about the success of my business."
    },
    {
      name: "Amily Moalin",
      company: "Green Earth Landscaping",
      role: "Owner",
      rating: 5,
      image: "/src/assets/test3.png",
      text: "As a small business owner, I've had my fair share of challenges when it comes to financing. However, since partnering with this company, I've been blown away by the level of personalized service and support they've provided me. From the start, their team took the time to understand my unique needs and crafted a loan package that fit my business like a glove. And the best part? I received a decision the same day I applied!"
    },
    {
      name: "Dianne Russell",
      company: "Retail Solutions",
      role: "Director",
      rating: 5,
      image: "/src/assets/test4.png",
      text: "As a small business owner, I've had my fair share of frustrations when it comes to funding. But ever since I found this finance company, everything has been able to run so smoothly and easily, usually all in the same day. I can't express how thrilled I am with their service and the peace of mind knowing I have a trusted financial partner supporting my business goals."
    },
    {
      name: "Jerome Bell",
      company: "Bell Enterprises",
      role: "Founder",
      rating: 5,
      image: "/src/assets/test5.png",
      text: "The team at ONYX EQUITY has been exceptional to work with. Their understanding of the unique challenges small businesses face made the entire funding process seamless. I particularly appreciated their transparent approach - no hidden fees or confusing terms. I'll definitely be returning for future business needs."
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  // Calculate visible testimonials for desktop carousel
  const visibleTestimonials = () => {
    const currentTestimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      currentTestimonials.push(testimonials[index]);
    }
    return currentTestimonials;
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
      padding: isMobile ? '50px 0' : '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: isMobile ? '1200px' : '1320px',
        margin: '0 auto',
        padding: '0 20px',
      }}>
        {/* Header with title and navigation */}
        <div style={{ 
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          marginBottom: isMobile ? '30px' : '50px'
        }}>
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
              fontSize: isMobile ? '28px' : '48px',
              fontWeight: 'bold',
              color: palette.skyBlue,
              marginBottom: isMobile ? '20px' : '0'
            }}
          >
            What our clients say
          </motion.h2>

          {/* Navigation buttons */}
          <div style={{ 
            display: 'flex',
            gap: '15px'
          }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={isMobile ? handlePrev : () => handlePrev()}
              style={{ 
                width: isMobile ? '40px' : '50px',
                height: isMobile ? '40px' : '50px',
                borderRadius: '50%',
                background: isMobile ? 'rgba(255, 255, 255, 0.1)' : palette.skyBlue,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <FaChevronLeft color={isMobile ? "white" : palette.darkBlue} size={isMobile ? 14 : 20} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={isMobile ? handleNext : () => handleNext()}
              style={{ 
                width: isMobile ? '40px' : '50px',
                height: isMobile ? '40px' : '50px',
                borderRadius: '50%',
                background: palette.skyBlue,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <FaChevronRight color={palette.darkBlue} size={isMobile ? 14 : 20} />
            </motion.div>
          </div>
        </div>

        {/* Mobile Testimonial Display */}
        {isMobile && (
          <div style={{ 
            position: 'relative', 
            width: '100%',
            height: '300px',
            overflow: 'hidden'
          }}>
            <AnimatePresence mode="wait">
              {/* Show only the active testimonial */}
              <motion.div
                key={activeIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariants}
                style={{ 
                  position: 'absolute',
                  width: '100%',
                  height: '100%'
                }}
              >
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  padding: '25px',
                  height: '100%',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {/* Testimonial content */}
                  <div>
                    <div style={{ marginBottom: '20px', color: palette.skyBlue }}>
                      <FaQuoteLeft size={24} />
                    </div>
                    <p style={{ 
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: 'white',
                      marginBottom: '20px'
                    }}>
                      {testimonials[activeIndex].text}
                    </p>
                  </div>
                  
                  {/* Author info and rating */}
                  <div>
                    {/* Stars */}
                    <div style={{ display: 'flex', marginBottom: '15px' }}>
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <FaStar key={i} color="#FFD700" size={14} style={{ marginRight: '3px' }} />
                      ))}
                    </div>
                    
                    {/* Author name, role and company */}
                    <h4 style={{ 
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: 'white',
                      marginBottom: '5px'
                    }}>
                      {testimonials[activeIndex].name}, {testimonials[activeIndex].role}
                    </h4>
                    <p style={{ 
                      fontSize: '14px',
                      color: '#CCCCCC'
                    }}>
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Desktop Testimonial Display */}
        {!isMobile && (
          <div 
            ref={testimonialRef}
            style={{ 
              display: 'flex',
              gap: '20px',
              width: '100%',
              overflowX: 'hidden',
              position: 'relative'
            }}
          >
            {visibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                animate={{ 
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5 }
                }}
                exit={{ 
                  x: index === 0 ? -100 : 100,
                  opacity: 0,
                  transition: { duration: 0.3 }
                }}
                style={{ 
                  flex: '1',
                  minWidth: 'calc(33.333% - 14px)',
                  height: '480px',
                  borderRadius: '8px',
                  border: `1px solid ${palette.skyBlue}`,
                  backgroundColor: 'rgba(20, 20, 20, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Avatar and Name Section - with its own padding */}
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                  padding: '35px 35px 15px 35px'
                }}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    style={{ 
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginBottom: '15px'
                    }}
                  />
                  <h3 style={{ 
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: palette.skyBlue,
                    margin: '0'
                  }}>
                    {testimonial.name}
                  </h3>
                </div>

                {/* Testimonial Text Container */}
                <div style={{
                  flex: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '0 35px'
                }}>
                  <div style={{
                    maxHeight: '290px', // Set maximum height for scrollable content
                    overflowY: 'hidden',
                  }}>
                    <p style={{ 
                      fontSize: '16px',
                      lineHeight: '1.6',
                      color: '#ffffff',
                      textAlign: 'left',
                      margin: 0,
                      paddingBottom: '70px' // Extra padding to ensure text doesn't go under gradient
                    }}>
                      {testimonial.text}
                    </p>
                  </div>
                  
                  {/* Gradient overlay - positioned absolutely within parent container */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    background: 'linear-gradient(to bottom, rgba(20, 20, 20, 0), rgba(20, 20, 20, 1))',
                    pointerEvents: 'none'
                  }} />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Testimonial indicators - only on mobile */}
        {isMobile && (
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '20px' 
          }}>
            {testimonials.map((_, index) => (
              <div
                key={index}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: index === activeIndex ? palette.skyBlue : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
