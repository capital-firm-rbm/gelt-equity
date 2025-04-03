import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import palette from '../styles/colors';
import useResponsive from '../hooks/useResponsive';
import { FaShieldAlt, FaLock, FaUser } from 'react-icons/fa';

const LogIn = () => {
  const { isMobile } = useResponsive();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
    // Add authentication logic here
  };
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div style={{
      background: palette.darkBlue,
      color: 'white',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      position: 'relative',
      overflow: 'hidden'
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
      
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        style={{
          width: '100%',
          maxWidth: '450px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          padding: isMobile ? '30px 20px' : '40px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              backgroundColor: 'rgba(99, 216, 242, 0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px'
            }}
          >
            <FaShieldAlt size={30} color={palette.skyBlue} />
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: 'white',
              textAlign: 'center'
            }}
          >
            Welcome Back
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '16px',
              color: '#cccccc',
              textAlign: 'center',
              maxWidth: '300px'
            }}
          >
            Log in to access your Onyx Equity account
          </motion.p>
        </div>
        
        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
        >
          <motion.div
            variants={itemVariants}
            style={{
              marginBottom: '20px'
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                color: '#cccccc'
              }}
            >
              Email Address
            </label>
            <div style={{
              position: 'relative'
            }}>
              <FaUser 
                size={16} 
                color="#cccccc" 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '15px',
                  transform: 'translateY(-50%)'
                }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '15px 15px 15px 45px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '16px'
                }}
                placeholder="Enter your email"
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            style={{
              marginBottom: '20px'
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                color: '#cccccc'
              }}
            >
              Password
            </label>
            <div style={{
              position: 'relative'
            }}>
              <FaLock 
                size={16} 
                color="#cccccc" 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '15px',
                  transform: 'translateY(-50%)'
                }}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '15px 15px 15px 45px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '16px'
                }}
                placeholder="Enter your password"
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                style={{
                  marginRight: '8px',
                  accentColor: palette.skyBlue
                }}
              />
              <label
                htmlFor="rememberMe"
                style={{
                  fontSize: '14px',
                  color: '#cccccc',
                  cursor: 'pointer'
                }}
              >
                Remember me
              </label>
            </div>
            
            <Link
              to="/forgot-password"
              style={{
                fontSize: '14px',
                color: palette.skyBlue,
                textDecoration: 'none'
              }}
            >
              Forgot Password?
            </Link>
          </motion.div>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: palette.skyBlue,
              color: palette.darkBlue,
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              marginBottom: '25px'
            }}
          >
            Log In
          </motion.button>
          
          <motion.div
            variants={itemVariants}
            style={{
              textAlign: 'center',
              fontSize: '14px',
              color: '#cccccc'
            }}
          >
            Don't have an account?{' '}
            <Link
              to="/register"
              style={{
                color: palette.skyBlue,
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Sign Up
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default LogIn;
