import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import palette from '../styles/colors';
import useResponsive from '../hooks/useResponsive';
import { FaUser, FaBuilding, FaPhone, FaEnvelope, FaDollarSign, FaInfoCircle, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Apply = () => {
  const { isMobile } = useResponsive();
  const [currentStep, setCurrentStep] = useState(1);
  const [formComplete, setFormComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    yearsInBusiness: '',
    monthlyRevenue: '',
    loanAmount: '',
    loanPurpose: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setFormComplete(true);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormComplete(true);
    console.log("Form submitted:", formData);
    // Submit logic here
  };
  
  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  // Form step display
  const renderFormStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="form-step"
          >
            <motion.h2 
              variants={itemVariant}
              style={{
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: palette.skyBlue,
                textAlign: 'center'
              }}
            >
              Personal Information
            </motion.h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <motion.div variants={itemVariant}>
                <label style={labelStyle}>
                  First Name <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <div style={inputContainerStyle}>
                  <FaUser style={iconStyle} />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    placeholder="John"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <label style={labelStyle}>
                  Last Name <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <div style={inputContainerStyle}>
                  <FaUser style={iconStyle} />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    placeholder="Doe"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <label style={labelStyle}>
                  Email Address <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <div style={inputContainerStyle}>
                  <FaEnvelope style={iconStyle} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    placeholder="john@example.com"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <label style={labelStyle}>
                  Phone Number <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <div style={inputContainerStyle}>
                  <FaPhone style={iconStyle} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    placeholder="(555) 555-5555"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
        
      case 2:
        return (
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="form-step"
          >
            <motion.h2 
              variants={itemVariant}
              style={{
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: palette.skyBlue,
                textAlign: 'center'
              }}
            >
              Business Information
            </motion.h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <motion.div variants={itemVariant}>
                <label style={labelStyle}>
                  Business Name <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <div style={inputContainerStyle}>
                  <FaBuilding style={iconStyle} />
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    placeholder="Your Business Inc."
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <label style={labelStyle}>
                  Business Type <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <div style={inputContainerStyle}>
                  <FaInfoCircle style={iconStyle} />
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                  >
                    <option value="">Select Type</option>
                    <option value="sole_proprietorship">Sole Proprietorship</option>
                    <option value="partnership">Partnership</option>
                    <option value="llc">LLC</option>
                    <option value="corporation">Corporation</option>
                    <option value="nonprofit">Non-Profit</option>
                  </select>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <label style={labelStyle}>
                  Years in Business <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <div style={inputContainerStyle}>
                  <FaInfoCircle style={iconStyle} />
                  <select
                    name="yearsInBusiness"
                    value={formData.yearsInBusiness}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                  >
                    <option value="">Select Years</option>
                    <option value="less_than_1">Less than 1 year</option>
                    <option value="1_to_2">1-2 years</option>
                    <option value="3_to_5">3-5 years</option>
                    <option value="6_to_10">6-10 years</option>
                    <option value="more_than_10">More than 10 years</option>
                  </select>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <label style={labelStyle}>
                  Monthly Revenue <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <div style={inputContainerStyle}>
                  <FaDollarSign style={iconStyle} />
                  <select
                    name="monthlyRevenue"
                    value={formData.monthlyRevenue}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                  >
                    <option value="">Select Revenue</option>
                    <option value="less_than_10k">Less than $10,000</option>
                    <option value="10k_to_25k">$10,000 - $25,000</option>
                    <option value="25k_to_50k">$25,000 - $50,000</option>
                    <option value="50k_to_100k">$50,000 - $100,000</option>
                    <option value="more_than_100k">More than $100,000</option>
                  </select>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
        
      case 3:
        return (
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="form-step"
          >
            <motion.h2 
              variants={itemVariant}
              style={{
                fontSize: isMobile ? '24px' : '32px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: palette.skyBlue,
                textAlign: 'center'
              }}
            >
              Funding Details
            </motion.h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <motion.div variants={itemVariant}>
                <label style={labelStyle}>
                  Loan Amount <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <div style={inputContainerStyle}>
                  <FaDollarSign style={iconStyle} />
                  <select
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                  >
                    <option value="">Select Amount</option>
                    <option value="less_than_25k">Less than $25,000</option>
                    <option value="25k_to_50k">$25,000 - $50,000</option>
                    <option value="50k_to_100k">$50,000 - $100,000</option>
                    <option value="100k_to_250k">$100,000 - $250,000</option>
                    <option value="250k_to_500k">$250,000 - $500,000</option>
                    <option value="more_than_500k">More than $500,000</option>
                  </select>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <label style={labelStyle}>
                  Loan Purpose <span style={{ color: palette.skyBlue }}>*</span>
                </label>
                <div style={inputContainerStyle}>
                  <FaInfoCircle style={iconStyle} />
                  <select
                    name="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                  >
                    <option value="">Select Purpose</option>
                    <option value="expansion">Business Expansion</option>
                    <option value="equipment">Equipment Purchase</option>
                    <option value="inventory">Inventory</option>
                    <option value="working_capital">Working Capital</option>
                    <option value="debt_refinancing">Debt Refinancing</option>
                    <option value="real_estate">Real Estate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariant}
                style={{ gridColumn: isMobile ? 'auto' : '1 / span 2' }}
              >
                <label style={labelStyle}>
                  Additional Comments
                </label>
                <div style={{
                  ...inputContainerStyle,
                  alignItems: 'flex-start',
                  padding: '12px 16px',
                }}>
                  <FaInfoCircle style={{...iconStyle, marginTop: '10px'}} />
                  <textarea
                    name="comments"
                    rows="5"
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      padding: '8px 0'
                    }}
                    placeholder="Tell us more about your funding needs..."
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
        
      default:
        return null;
    }
  };
  
  // Success screen
  const renderSuccess = () => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          textAlign: 'center'
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6, times: [0, 0.7, 1] }}
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '60px',
            backgroundColor: 'rgba(99, 216, 242, 0.15)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '30px'
          }}
        >
          <FaCheckCircle size={60} color={palette.skyBlue} />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: 'white'
          }}
        >
          Application Submitted!
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: '18px',
            color: '#cccccc',
            maxWidth: '600px',
            marginBottom: '30px'
          }}
        >
          Thank you for applying for funding with Gelt Capital USA Capital. We've received your application and a funding specialist will contact you within 24 hours to discuss next steps.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: palette.skyBlue,
                color: palette.darkBlue,
                border: 'none',
                borderRadius: '30px',
                padding: '15px 30px',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Return to Home <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    );
  };
  
  // Styled components
  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '14px'
  };
  
  const inputContainerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '8px',
    padding: '0 16px'
  };
  
  const iconStyle = {
    color: palette.darkBlue,
    opacity: 0.6,
    marginRight: '10px',
    minWidth: '16px'
  };
  
  const inputStyle = {
    width: '100%',
    padding: '12px 0',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#333',
    fontSize: '16px',
    outline: 'none'
  };
  
  // Progress indicator
  const ProgressIndicator = () => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '40px'
      }}>
        {[1, 2, 3].map((step) => (
          <div key={step} style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <motion.div
              initial={false}
              animate={{
                backgroundColor: step <= currentStep ? palette.skyBlue : 'rgba(255, 255, 255, 0.2)',
                scale: step === currentStep ? 1.1 : 1
              }}
              whileHover={{ scale: 1.1 }}
              onClick={() => step < currentStep && setCurrentStep(step)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: step <= currentStep ? palette.darkBlue : '#fff',
                fontWeight: 'bold',
                cursor: step < currentStep ? 'pointer' : 'default',
                transition: 'all 0.3s ease',
                boxShadow: step === currentStep ? '0 0 15px rgba(99, 216, 242, 0.7)' : 'none'
              }}
            >
              {step}
            </motion.div>
            
            {step < 3 && (
              <div style={{
                flex: 1,
                height: '4px',
                width: '80px',
                backgroundColor: step < currentStep ? palette.skyBlue : 'rgba(255, 255, 255, 0.2)',
                margin: '0 10px',
                borderRadius: '2px',
                transition: 'background-color 0.3s ease'
              }} />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{
      background: palette.darkBlue,
      color: 'white',
      width: '100%',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      paddingBottom: '60px'
    }}>
      {/* Main Content */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: isMobile ? '40px 20px' : '80px 40px',
        position: 'relative',
        zIndex: 5
      }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: isMobile ? '36px' : '48px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '10px',
            color: 'white'
          }}
        >
          Apply for Funding
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '40px',
            color: '#cccccc',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}
        >
          Complete the application below to get started with your business funding journey
        </motion.p>
        
        {/* Main Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: isMobile ? '30px 20px' : '40px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            zIndex: 10
          }}
        >
          {!formComplete ? (
            <form onSubmit={handleSubmit}>
              {!isMobile && <ProgressIndicator />}
              
              {renderFormStep()}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '30px',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '15px' : '0'
                }}
              >
                {currentStep > 1 && (
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      padding: '12px 25px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      order: isMobile ? 2 : 1
                    }}
                  >
                    Previous
                  </motion.button>
                )}
                
                <div style={{ flex: 1 }} />
                
                <motion.button
                  type={currentStep === 3 ? 'submit' : 'button'}
                  onClick={currentStep < 3 ? nextStep : undefined}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '12px 30px',
                    backgroundColor: palette.skyBlue,
                    color: palette.darkBlue,
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    order: isMobile ? 1 : 2,
                    width: isMobile ? '100%' : 'auto'
                  }}
                >
                  {currentStep === 3 ? 'Submit Application' : 'Continue'} 
                  <FaArrowRight />
                </motion.button>
              </motion.div>
            </form>
          ) : (
            renderSuccess()
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Apply;
