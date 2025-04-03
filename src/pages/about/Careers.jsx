import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import teamImage from '../../assets/team.png';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const Careers = () => {
  const { isMobile, isTablet } = useResponsive();
  
  // Animation variants
  // eslint-disable-next-line no-unused-vars
  const _fadeIn = {
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
  
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -8,
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 }
    }
  };
  
  const jobListings = [
    {
      id: 1,
      title: 'Financial Analyst',
      type: 'Full Time',
      description: 'Financial analysis encompasses both micro-level data that is specific to a financial asset and macro-level data for the entire financial product.',
      requirements: 'LinkedIn, MS Excel, Data analysis',
      salary: '$80-90K',
      remote: false,
    },
    {
      id: 2,
      title: 'Investment Broker',
      type: 'Full Time',
      description: 'Involves creating and selling to clients on social media channels to enhance visibility and increase user acquisition and marketing reach.',
      requirements: 'Social Media, Sales experience',
      salary: '$100-120K',
      remote: true,
    },
    {
      id: 3,
      title: 'Fintech Developer',
      type: 'Full Time',
      description: 'Encompasses a range of tasks including web design front and development tools and development & server management.',
      requirements: 'JavaScript, React, Node.js',
      salary: '$120-140K',
      remote: false,
    },
    {
      id: 4,
      title: 'Financial Advisor',
      type: 'Full Time',
      description: 'Graphic designers combine art technology to sell messages through images & the types of web content & media.',
      requirements: 'Financial planning, Client management',
      salary: '$90-110K',
      remote: true,
    },
    {
      id: 5,
      title: 'VP of Financial Sales',
      type: 'Full Time',
      description: 'Marketing officer works closely with other departments such as product development teams & analytics department.',
      requirements: 'Sales leadership, Financial products knowledge',
      salary: '$150-180K', 
      remote: false,
    },
    {
      id: 6,
      title: 'Lead of Investment Strategy',
      type: 'Full Time',
      description: 'Encompasses a range of tasks including web design front and development tools and experienced in market analysis.',
      requirements: 'Investment strategies, Team leadership',
      salary: '$140-170K',
      remote: true,
    },
  ];

  const styles = {
    pageWrapper: {
      background: palette.darkBlue,
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
    },
    container: {
      padding: isMobile ? '40px 20px' : '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      color: 'white',
      position: 'relative',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '60px',
    },
    headerContent: {
      textAlign: 'center',
      maxWidth: '800px',
      marginTop: '30px',
    },
    headerTitle: {
      fontSize: isMobile ? '28px' : '32px',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: palette.skyBlue,
    },
    headerDescription: {
      fontSize: '16px',
      color: 'white',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.6,
    },
    headerImage: {
      width: '100%',
      maxWidth: '500px',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
    },
    positionsTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '40px',
      textAlign: 'center',
      color: 'white',
    },
    jobsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
      gap: '25px',
    },
    jobCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease-out',
      textAlign: 'left',
    },
    jobHeader: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginBottom: '15px',
    },
    jobTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: 'white',
    },
    jobType: {
      fontSize: '14px',
      color: '#CCCCCC',
    },
    jobDescription: {
      fontSize: '14px',
      color: '#CCCCCC',
      marginBottom: '20px',
      lineHeight: '1.6',
    },
    jobDetails: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      fontSize: '14px',
      color: 'white',
    },
    jobSalary: {
      fontWeight: 'bold',
      color: palette.skyBlue,
    },
    jobRequirements: {
      color: '#CCCCCC',
    },
    remoteBadge: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '4px 10px',
      borderRadius: '4px',
      fontSize: '14px',
      display: 'inline-block',
      color: palette.skyBlue,
    },
    applyButton: {
      backgroundColor: palette.skyBlue,
      color: palette.darkBlue,
      border: 'none',
      borderRadius: '30px',
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '15px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  };

  return (
    <div style={styles.pageWrapper}>
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
          right: '5%',
          top: '15%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.skyBlueRGBA}, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />
      
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
          bottom: '20%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.lavenderRGBA}, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />
      
      <div style={styles.container}>
        <motion.div 
          style={styles.header}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src={teamImage} 
            alt="Team working together" 
            style={styles.headerImage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div 
            style={styles.headerContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              style={styles.headerTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Meet the team work behind our success
            </motion.h1>
            <motion.p 
              style={styles.headerDescription}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our team consists of a group of fintech, finance, and sales experts. Apply to join our team and help us build the future of finance.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.h2 
          style={styles.positionsTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Currently open positions
        </motion.h2>
        
        <motion.div 
          style={styles.jobsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {jobListings.map(job => (
            <motion.div
              key={job.id}
              variants={cardVariant}
              whileHover="hover"
              style={styles.jobCard}
            >
              <div style={{
                ...styles.jobHeader,
                justifyContent: 'flex-start',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <h3 style={styles.jobTitle}>{job.title}</h3>
                <p style={styles.jobType}>{job.type}</p>
              </div>
              <div style={{
                ...styles.jobDetails,
                justifyContent: 'flex-start'
              }}>
                <span style={styles.jobSalary}>Salary: {job.salary}</span>
                {job.remote && <span style={{...styles.remoteBadge, marginLeft: '10px'}}>Remote</span>}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={styles.applyButton}
              >
                Apply Now
              </motion.button>
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
            color: '#cccccc',
            maxWidth: '700px',
            margin: '0 auto 30px',
            lineHeight: 1.7
          }}>
            Don't see a position that fits your skills? We're always looking for talented individuals to join our team.
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
            Send Open Application
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
