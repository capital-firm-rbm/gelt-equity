import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const { isMobile, isTablet } = useResponsive();
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "What types of businesses do you provide funding for?",
      answer: "We provide funding solutions for a wide range of businesses across various industries. Our clients include retail stores, restaurants, professional services, manufacturing companies, and many others. As long as your business has been operating for at least 6 months and generates a minimum of $10,000 in monthly revenue, you may qualify for our financing options."
    },
    {
      question: "How quickly can I get approved for funding?",
      answer: "Our streamlined application process allows for quick decisions, often within 24-48 hours of receiving a complete application. Once approved, funds can be deposited into your account in as little as 1-3 business days, depending on the funding type and your banking institution."
    },
    {
      question: "What documents will I need to apply?",
      answer: "Typically, you'll need to provide 3-6 months of business bank statements, a valid ID, and proof of business ownership. Depending on the funding amount and type, we may request additional documentation such as tax returns, profit and loss statements, or business licenses."
    },
    {
      question: "Do you check personal credit scores?",
      answer: "Yes, personal credit is one factor we consider in our evaluation process, but it's not the only determining factor. We take a holistic approach to evaluate businesses, considering factors such as business revenue, time in business, industry type, and overall financial health."
    },
    {
      question: "What are the interest rates and terms?",
      answer: "Interest rates and terms vary based on your business profile, the funding amount, and the funding type you select. We offer options with terms ranging from 3 months to 5 years, with competitive rates based on market conditions and risk assessment. Each client receives a customized quote that best fits their specific business needs."
    },
    {
      question: "Are there any prepayment penalties?",
      answer: "Most of our funding options have no prepayment penalties, allowing you to pay off your balance early without additional costs. However, certain specialized funding types may have different structures. Your dedicated funding specialist will clearly explain all terms before you commit."
    },
    {
      question: "How can I use the funds?",
      answer: "You have the flexibility to use the funds for virtually any legitimate business purpose, including inventory purchases, equipment upgrades, hiring staff, marketing campaigns, expansion projects, working capital, or managing cash flow fluctuations."
    },
  ];

  return (
    <div style={{
      background: palette.darkBlue,
      color: 'white',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
    }}>
      {/* Background animation elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.15, 0.1],
          x: [0, 20, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
        style={{
          position: 'absolute',
          left: '10%',
          top: '20%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.lavenderRGBA}, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />
      
      <div style={{
        padding: isMobile ? '40px 20px' : '80px 20px',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: palette.skyBlue,
            textAlign: 'center'
          }}>
            Frequently Asked Questions
          </h1>
          
          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto 60px',
            textAlign: 'center',
            color: '#cccccc'
          }}>
            Find answers to common questions about our business funding solutions.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                marginBottom: '15px',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <motion.div
                onClick={() => toggleQuestion(index)}
                style={{
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  backgroundColor: activeIndex === index ? 'rgba(99, 216, 242, 0.1)' : 'transparent'
                }}
              >
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: activeIndex === index ? palette.skyBlue : 'white'
                }}>
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown color={activeIndex === index ? palette.skyBlue : 'white'} />
                </motion.div>
              </motion.div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      padding: '5px 20px 20px',
                      fontSize: '16px',
                      lineHeight: 1.6,
                      color: '#cccccc'
                    }}>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '60px'
          }}
        >
          <p style={{
            fontSize: '18px',
            marginBottom: '30px',
            color: '#cccccc'
          }}>
            Still have questions? Our team is ready to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              backgroundColor: palette.skyBlue,
              color: palette.darkBlue,
              border: 'none',
              borderRadius: '30px',
              padding: '15px 30px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: `0 5px 20px rgba(${palette.skyBlueRGBA.replace('rgba(', '').replace(')', '')}, 0.4)`
            }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ; 