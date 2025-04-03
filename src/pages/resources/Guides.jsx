import React from 'react';
import { motion } from 'framer-motion';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const Guides = () => {
  const { isMobile, isTablet } = useResponsive();
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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

  const guides = [
    {
      id: 1,
      title: 'Complete Guide to Business Loans',
      icon: '📊',
      categories: ['Financing', 'Getting Started'],
      description: 'Everything you need to know about securing the right financing for your business needs.',
    },
    {
      id: 2,
      title: 'Understanding Business Credit Scores',
      icon: '📈',
      categories: ['Credit', 'Financial Management'],
      description: 'Learn how credit scores affect your business and steps to improve your rating.',
    },
    {
      id: 3,
      title: 'The Ultimate SBA Loan Application Checklist',
      icon: '✅',
      categories: ['SBA Loans', 'Application Process'],
      description: 'Step-by-step preparation guide to streamline your SBA loan application process.',
    },
    {
      id: 4,
      title: 'How to Create a Business Plan for Financing',
      icon: '📝',
      categories: ['Planning', 'Financing'],
      description: 'Template and guidance for creating a business plan that will impress lenders.',
    },
    {
      id: 5,
      title: 'Cash Flow Management for Small Businesses',
      icon: '💰',
      categories: ['Financial Management', 'Operations'],
      description: 'Practical strategies to optimize your cash flow and maintain healthy business finances.',
    },
    {
      id: 6,
      title: 'Equipment Financing vs. Leasing: Pros and Cons',
      icon: '🔍',
      categories: ['Equipment Financing', 'Decision Making'],
      description: 'Compare options to determine the best approach for acquiring business equipment.',
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
          opacity: [0.1, 0.2, 0.1],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          position: 'absolute',
          right: '10%',
          top: '20%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.skyBlueRGBA}, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />
      
      <div style={{
        padding: isMobile ? '40px 20px' : '80px 20px',
        maxWidth: '1200px',
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
            Business Financing Guides
          </h1>
          
          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto 60px',
            textAlign: 'center',
            color: '#cccccc'
          }}>
            Comprehensive resources to help you navigate the complexities of business financing and make informed decisions.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '25px'
          }}>
            {guides.map((guide) => (
              <motion.div
                key={guide.id}
                variants={fadeIn}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>{guide.icon}</div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  color: 'white'
                }}>
                  {guide.title}
                </h3>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '8px',
                  marginBottom: '15px',
                  flexWrap: 'wrap'
                }}>
                  {guide.categories.map((category, idx) => (
                    <span key={idx} style={{
                      backgroundColor: 'rgba(99, 216, 242, 0.1)',
                      color: palette.skyBlue,
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}>
                      {category}
                    </span>
                  ))}
                </div>
                
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#cccccc',
                  marginBottom: '20px',
                  flex: 1
                }}>
                  {guide.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: palette.skyBlue,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    marginTop: 'auto'
                  }}
                >
                  Read Guide →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Guides; 