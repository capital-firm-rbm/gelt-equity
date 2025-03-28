import React, { useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import palette from '../../styles/colors';

const TestimonialSection = () => {
  // Testimonial data - easy to add or modify
  const testimonials = [
    {
      name: "Leslie Alexander",
      image: "https://randomuser.me/api/portraits/women/63.jpg", // Placeholder - replace with actual image path
      text: "I've had nothing but positive experiences with this company. Their dedication to simplifying small business funding is truly remarkable, and it shows in every aspect of their service. The application process was quick and easy, and I was impressed with how tailored their options were to my specific needs."
    },
    {
      name: "Dennis Hüttner",
      image: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder - replace with actual image path
      text: "I was initially hesitant to apply for a loan, but after hearing about this company's reputation for exceptional customer service, I decided to give it a try. I am so glad I did! The team went above and beyond to ensure that I had all of the information I needed to make informed decisions about my funding options. They were patient, understanding, and truly cared about the success of my business."
    },
    {
      name: "Amily Moalin",
      image: "https://randomuser.me/api/portraits/women/44.jpg", // Placeholder - replace with actual image path
      text: "As a small business owner, I've had my fair share of challenges when it comes to financing. However, since partnering with this company, I've been blown away by the level of personalized service and support they've provided me. From the start, their team took the time to understand my unique needs and crafted a loan package that fit my business like a glove. And the best part? I received a decision the same day I applied!"
    },
    {
      name: "Dianne Russell",
      image: "https://randomuser.me/api/portraits/women/57.jpg", // Placeholder - replace with actual image path
      text: "As a small business owner, I've had my fair share of frustrations when it comes to funding. But ever since I found this finance company, everything has been able to run so smoothly and easily, usually all in the same day. I can't express how thrilled I am with their service and the peace of mind knowing I have a trusted financial partner supporting my business goals."
    },
    {
      name: "Jerome Bell",
      image: "https://randomuser.me/api/portraits/men/41.jpg", // Placeholder - replace with actual image path
      text: "The team at YL Capital has been exceptional to work with. Their understanding of the unique challenges small businesses face made the entire funding process seamless. I particularly appreciated their transparent approach - no hidden fees or confusing terms. I'll definitely be returning for future business needs."
    }
  ];

  // State for tracking current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef(null);

  // Function to handle navigation
  const navigate = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  // Calculate visible testimonials in the carousel
  const visibleTestimonials = () => {
    const currentTestimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      currentTestimonials.push(testimonials[index]);
    }
    return currentTestimonials;
  };

  // Animation variants
  // eslint-disable-next-line no-unused-vars
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
    }
  };

  return (
    <section style={{ 
      background: palette.darkBlue,
      width: '100%',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '0 20px',
      }}>
        {/* Header with title and navigation */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '50px'
        }}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              fontSize: '48px',
              fontWeight: 'bold',
              color: palette.skyBlue,
              marginBottom: '20px',
              textAlign: 'center'
            }}
          >
            What our clients say
          </motion.h2>

          <div style={{ display: 'flex', gap: '15px' }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('prev')}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: palette.skyBlue,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <FaChevronLeft size={20} color={palette.darkBlue} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('next')}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: palette.skyBlue,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <FaChevronRight size={20} color={palette.darkBlue} />
            </motion.div>
          </div>
        </div>

        {/* Testimonials carousel */}
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
      </div>
    </section>
  );
};

export default TestimonialSection;
