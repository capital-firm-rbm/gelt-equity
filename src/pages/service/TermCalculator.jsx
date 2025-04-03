import React, { useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FaDollarSign, FaPercentage, FaCalendarAlt, FaCoins, FaInfoCircle, FaArrowRight } from 'react-icons/fa';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';
import { Link } from 'react-router-dom';

const TermCalculator = () => {
  const { isMobile } = useResponsive();
  const [loanAmount, setLoanAmount] = useState(1000000); // Default $1M
  const [interestRate, setInterestRate] = useState(5); // Default 5%
  const [termMonths, setTermMonths] = useState(6); // Default 6 months
  const [editingInterest, setEditingInterest] = useState(false);
  const [editingTerm, setEditingTerm] = useState(false);
  const [isPaymentHovered, setIsPaymentHovered] = useState(false);
  
  const interestInputRef = useRef(null);
  const termInputRef = useRef(null);
  const controls = useAnimation();
  
  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const payments = termMonths;
    
    if (monthlyRate === 0) return principal / payments;
    
    const x = Math.pow(1 + monthlyRate, payments);
    return (principal * x * monthlyRate) / (x - 1);
  };
  
  const monthlyPayment = calculateMonthlyPayment();
  
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  // Handle slider change
  const handleSliderChange = (e) => {
    setLoanAmount(Number(e.target.value));
    // Pulse animation for monthly payment
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.4 }
    });
  };
  
  // Handle interest rate edit
  const handleInterestEdit = () => {
    setEditingInterest(true);
    setTimeout(() => {
      interestInputRef.current?.focus();
      interestInputRef.current?.select();
    }, 10);
  };
  
  // Handle term edit
  const handleTermEdit = () => {
    setEditingTerm(true);
    setTimeout(() => {
      termInputRef.current?.focus();
      termInputRef.current?.select();
    }, 10);
  };
  
  // Handle interest rate save
  const handleInterestSave = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setInterestRate(value);
    }
    setEditingInterest(false);
    
    // Pulse animation for monthly payment
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.4 }
    });
  };
  
  // Handle term save
  const handleTermSave = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 120) {
      setTermMonths(value);
    }
    setEditingTerm(false);
    
    // Pulse animation for monthly payment
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.4 }
    });
  };
  
  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, type: "spring" }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };
  
  const sliderThumbSize = isMobile ? 22 : 28;
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariant}
      style={{
        maxWidth: '1200px',
        margin: '0 auto 80px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: isMobile ? '25px 20px' : '40px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      {/* Background glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          position: 'absolute',
          right: '-5%',
          top: '30%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${palette.skyBlueRGBA}, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />
      
      {/* Title Section */}
      <motion.div
        variants={childVariant}
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          position: 'relative',
          zIndex: 1
        }}
      >
        <h2 style={{
          fontSize: isMobile ? '24px' : '32px',
          fontWeight: 'bold',
          marginBottom: '10px',
          color: palette.skyBlue
        }}>
          Business Loan Calculator
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#cccccc',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Estimate your monthly payments based on loan amount, interest rate, and term length
        </p>
      </motion.div>
      
      {/* Calculator Section */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '30px' : '40px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Loan Amount Slider */}
        <motion.div
          variants={childVariant}
          style={{
            flex: isMobile ? 'none' : '1.5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
            <label style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <FaDollarSign /> Loan Amount
            </label>
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                color: ['#ffffff', palette.skyBlue, '#ffffff']
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut"
              }}
              style={{
                fontSize: isMobile ? '20px' : '24px',
                fontWeight: 'bold',
                color: 'white'
              }}
            >
              {formatCurrency(loanAmount)}
            </motion.div>
          </div>
          
          <div style={{
            position: 'relative',
            margin: '10px 0 25px'
          }}>
            <div style={{
              position: 'absolute',
              top: sliderThumbSize/2,
              left: 0,
              right: 0,
              height: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              transform: 'translateY(-50%)',
              zIndex: 0
            }} />
            
            <div style={{
              position: 'absolute',
              top: sliderThumbSize/2,
              left: 0,
              width: `${(loanAmount - 100000) / (20000000 - 100000) * 100}%`,
              height: '8px',
              backgroundColor: palette.skyBlue,
              borderRadius: '4px',
              transform: 'translateY(-50%)',
              zIndex: 1,
              transition: 'width 0.2s'
            }} />
            {/* Slider */}
            <input
              type="range"
              min="100000"
              max="20000000"
              step="50000"
              value={loanAmount}
              onChange={handleSliderChange}
              style={{
                width: '100%',
                appearance: 'none',
                background: 'transparent',
                margin: 0,
                zIndex: 2,
                position: 'relative',
                height: `${sliderThumbSize}px`,
                cursor: 'pointer',
                WebkitAppearance: 'none',
                outline: 'none'
              }}
            />
            
            <style jsx>{`
              input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: ${sliderThumbSize}px;
                width: ${sliderThumbSize}px;
                border-radius: 50%;
                background: ${palette.skyBlue};
                box-shadow: 0 0 15px rgba(99, 216, 242, 0.7), 0 0 5px rgba(0, 0, 0, 0.2);
                cursor: pointer;
                border: 3px solid white;
                transition: all 0.2s ease;
              }
              
              input[type=range]::-webkit-slider-thumb:hover {
                transform: scale(1.1);
              }
              
              input[type=range]::-moz-range-thumb {
                height: ${sliderThumbSize}px;
                width: ${sliderThumbSize}px;
                border-radius: 50%;
                background: ${palette.skyBlue};
                box-shadow: 0 0 15px rgba(99, 216, 242, 0.7), 0 0 5px rgba(0, 0, 0, 0.2);
                cursor: pointer;
                border: 3px solid white;
                transition: all 0.2s ease;
              }
              
              input[type=range]::-moz-range-thumb:hover {
                transform: scale(1.1);
              }
            `}</style>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '14px',
            color: '#aaaaaa'
          }}>
            <span>$100K</span>
            <span>$20M</span>
          </div>
        </motion.div>
        
        {/* Rate and Term Cards */}
        <motion.div
          variants={childVariant}
          style={{
            flex: isMobile ? 'none' : '1',
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column',
            gap: '20px',
            justifyContent: 'center'
          }}
        >
          {/* Interest Rate Card */}
          <motion.div
            variants={cardVariant}
            whileHover="hover"
            whileTap="tap"
            onClick={handleInterestEdit}
            style={{
              flex: '1',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '15px',
              padding: '20px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'rgba(99, 216, 242, 0.15)',
                color: palette.skyBlue
              }}>
                <FaPercentage size={20} />
              </div>
              
              <div style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#dddddd'
              }}>
                Interest Rate
              </div>
              
              <AnimatePresence mode="wait">
                {editingInterest ? (
                  <motion.input
                    ref={interestInputRef}
                    key="interest-input"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    type="number"
                    defaultValue={interestRate}
                    min="0"
                    max="100"
                    step="0.1"
                    onBlur={handleInterestSave}
                    onKeyDown={(e) => e.key === 'Enter' && handleInterestSave(e)}
                    style={{
                      width: '80px',
                      textAlign: 'center',
                      padding: '10px',
                      borderRadius: '8px',
                      border: `2px solid ${palette.skyBlue}`,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color: '#333',
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}
                  />
                ) : (
                  <motion.div
                    key="interest-display"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: 'white'
                    }}
                  >
                    {interestRate}%
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!editingInterest && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    fontSize: '12px',
                    color: '#aaaaaa'
                  }}
                >
                  Double-click to edit
                </motion.div>
              )}
            </div>
          </motion.div>
          
          {/* Term Months Card */}
          <motion.div
            variants={cardVariant}
            whileHover="hover"
            whileTap="tap"
            onClick={handleTermEdit}
            style={{
              flex: '1',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '15px',
              padding: '20px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'rgba(99, 216, 242, 0.15)',
                color: palette.skyBlue
              }}>
                <FaCalendarAlt size={20} />
              </div>
              
              <div style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#dddddd'
              }}>
                Term Length
              </div>
              
              <AnimatePresence mode="wait">
                {editingTerm ? (
                  <motion.input
                    ref={termInputRef}
                    key="term-input"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    type="number"
                    defaultValue={termMonths}
                    min="1"
                    max="120"
                    step="1"
                    onBlur={handleTermSave}
                    onKeyDown={(e) => e.key === 'Enter' && handleTermSave(e)}
                    style={{
                      width: '80px',
                      textAlign: 'center',
                      padding: '10px',
                      borderRadius: '8px',
                      border: `2px solid ${palette.skyBlue}`,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color: '#333',
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}
                  />
                ) : (
                  <motion.div
                    key="term-display"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: 'white'
                    }}
                  >
                    {termMonths} {termMonths === 1 ? 'month' : 'months'}
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!editingTerm && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    fontSize: '12px',
                    color: '#aaaaaa'
                  }}
                >
                  Double-click to edit
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Results Section */}
      <motion.div
        variants={childVariant}
        animate={controls}
        style={{
          marginTop: '40px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '15px',
          padding: '25px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '15px'
        }}>
          <FaCoins size={24} color={palette.skyBlue} />
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#dddddd'
          }}>
            Estimated Monthly Payment
          </h3>
        </div>
        
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ 
            scale: 1,
            transition: { 
              type: "spring", 
              stiffness: 500, 
              damping: 15 
            }
          }}
          onMouseEnter={() => setIsPaymentHovered(true)}
          onMouseLeave={() => setIsPaymentHovered(false)}
          style={{
            fontSize: isMobile ? '32px' : '40px',
            fontWeight: 'bold',
            color: palette.skyBlue,
            textShadow: '0 0 10px rgba(99, 216, 242, 0.3)',
            cursor: 'pointer',
            display: 'inline-block',
            position: 'relative'
          }}
        >
          {formatCurrency(Math.round(monthlyPayment))}
          
          {/* Info icon */}
          <motion.span
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isPaymentHovered ? 1 : 0.6 }}
            style={{
              position: 'absolute',
              top: '2px',
              right: '-24px',
              fontSize: '16px'
            }}
          >
            <FaInfoCircle size={14} color={palette.skyBlue} />
          </motion.span>
          
          {/* Popup modal - updated positioning and z-index */}
          <AnimatePresence>
            {isPaymentHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: {
                    type: 'spring',
                    damping: 20,
                    stiffness: 300
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.8, 
                  y: 10,
                  transition: { duration: 0.2 }
                }}
                style={{
                  position: 'absolute',
                  top: isMobile ? 'auto' : '50%',
                  bottom: isMobile ? 'calc(100% + 15px)' : 'auto',
                  left: isMobile ? '50%' : 'calc(100% + 20px)',
                  transform: isMobile ? 'translateX(-50%)' : 'translateY(-50%)',
                  width: isMobile ? '280px' : '320px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                  padding: '20px',
                  zIndex: 1000,
                  textAlign: 'left',
                  color: '#333'
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    [isMobile ? 'bottom' : 'left']: isMobile ? '-8px' : '-8px',
                    [isMobile ? 'left' : 'top']: isMobile ? '50%' : '50%',
                    marginLeft: isMobile ? '-8px' : '0',
                    marginTop: isMobile ? '0' : '-8px',
                    width: '0',
                    height: '0',
                    borderLeft: isMobile ? '8px solid transparent' : '8px solid transparent',
                    borderRight: isMobile ? '8px solid transparent' : '8px solid white',
                    borderBottom: isMobile ? 'none' : '8px solid transparent',
                    borderTop: isMobile ? '8px solid white' : '8px solid transparent',
                  }}
                />
                
                <motion.h4
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                    color: palette.darkBlue
                  }}
                >
                  Ready for funding?
                </motion.h4>
                
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    fontSize: '14px',
                    marginBottom: '12px',
                    lineHeight: 1.5
                  }}
                >
                  We can approve you for <span style={{ fontWeight: 'bold', color: palette.darkBlue }}>{formatCurrency(loanAmount)}</span> with payments of just <span style={{ fontWeight: 'bold', color: palette.skyBlue }}>{formatCurrency(Math.round(monthlyPayment))}</span> per month!
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    fontSize: '14px',
                    marginBottom: '20px',
                    lineHeight: 1.5
                  }}
                >
                  Our quick and easy application process can have funds in your account within 24-48 hours. No hard credit checks required!
                </motion.p>
                
                <Link to="/apply" style={{ textDecoration: 'none' }}>
                  <motion.button
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.4 }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 5px 15px rgba(99, 216, 242, 0.5)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      backgroundColor: palette.skyBlue,
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 20px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      width: '100%',
                      cursor: 'pointer'
                    }}
                  >
                    Apply Now <FaArrowRight size={12} />
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '14px',
            color: '#aaaaaa',
            marginTop: '10px'
          }}
        >
          Total repayment: {formatCurrency(Math.round(monthlyPayment * termMonths))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TermCalculator;
