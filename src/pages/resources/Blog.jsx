import React from 'react';
import { motion } from 'framer-motion';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      date: 'April 15, 2023',
      title: '5 Ways Small Businesses Can Prepare for Economic Uncertainty',
      category: 'Business Strategy',
      summary: 'Discover how to build financial resilience and maintain operations during challenging economic conditions.',
      readTime: '7 min read'
    },
    {
      id: 2,
      date: 'March 29, 2023',
      title: 'Understanding SBA Loans: A Comprehensive Guide',
      category: 'Financing',
      summary: 'Learn about the different types of SBA loans, qualification requirements, and application processes.',
      readTime: '10 min read'
    },
    {
      id: 3,
      date: 'March 10, 2023',
      title: 'How Alternative Lending Is Transforming Small Business Growth',
      category: 'Industry Trends',
      summary: 'Explore the rise of non-traditional financing options and their impact on entrepreneurship.',
      readTime: '8 min read'
    },
    {
      id: 4,
      date: 'February 22, 2023',
      title: 'Building Business Credit: Strategies for New Entrepreneurs',
      category: 'Financial Management',
      summary: 'Step-by-step advice for establishing and improving your business credit profile.',
      readTime: '9 min read'
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
          x: [0, 20, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          position: 'absolute',
          left: '5%',
          top: '30%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.lavenderRGBA}, transparent 70%)`,
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
            Onyx Equity Blog
          </h1>
          
          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto 60px',
            textAlign: 'center',
            color: '#cccccc'
          }}>
            Insights, advice, and industry trends to help your business thrive in today's financial landscape.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)',
            gap: '30px'
          }}>
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  height: '200px',
                  backgroundColor: 'rgba(99, 216, 242, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ color: palette.skyBlue, fontSize: '40px', opacity: 0.7 }}>📊</div>
                </div>
                <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: palette.skyBlue, fontSize: '14px' }}>{post.category}</span>
                    <span style={{ color: '#888', fontSize: '14px' }}>{post.readTime}</span>
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                    color: 'white'
                  }}>
                    {post.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#cccccc',
                    marginBottom: '20px'
                  }}>
                    {post.summary}
                  </p>
                  <div style={{ marginTop: 'auto' }}>
                    <p style={{ color: '#888', fontSize: '14px', marginBottom: '15px' }}>
                      {post.date}
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
                        gap: '5px'
                      }}
                    >
                      Read Article →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog; 