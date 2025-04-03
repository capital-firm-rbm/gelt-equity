import React from 'react';
import { motion } from 'framer-motion';
import palette from '../../styles/colors';
import useResponsive from '../../hooks/useResponsive';

const Disclosures = () => {
  const { isMobile, isTablet } = useResponsive();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div style={{
      background: palette.darkBlue,
      color: 'white',
      width: '100%',
      minHeight: '100vh'
    }}>
      <div style={{
        padding: isMobile ? '40px 20px' : '80px 20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: isMobile ? '32px' : '42px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: palette.skyBlue
          }}>
            Disclosures
          </h1>
          
          <p style={{
            fontSize: '16px',
            marginBottom: '40px',
            color: '#cccccc'
          }}>
            Last Updated: April 1, 2023
          </p>
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}
        >
          <section>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: 'white'
            }}>
              General Disclosures
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc'
            }}>
              Onyx Equity provides business financing solutions through various products and services. The information provided on our website is for general informational purposes only and should not be considered as financial advice. We recommend consulting with qualified financial and legal professionals before making any financial decisions for your business.
            </p>
          </section>
          
          <section>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: 'white'
            }}>
              Loan Disclosures
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc',
              marginBottom: '15px'
            }}>
              All business loans and financing products are subject to credit approval and underwriting. Terms, conditions, and rates may vary based on creditworthiness, qualifications, and collateral requirements. Annual Percentage Rates (APR) may range from 6.99% to 29.99% depending on product type, term, amount, credit profile, and other factors.
            </p>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc'
            }}>
              Sample calculation: A $100,000 business term loan with a 3-year term and a 12% APR would have 36 scheduled monthly payments of $3,321.11. Actual loan offers may differ from this example.
            </p>
          </section>
          
          <section>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: 'white'
            }}>
              Third-Party Relationships
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc'
            }}>
              Onyx Equity may partner with third-party lenders and financial institutions to provide certain financing options. These relationships may involve compensation to Onyx Equity for referrals. We strive to work only with reputable partners who offer competitive rates and terms, but we encourage all clients to review all terms and conditions carefully before accepting any financing offers.
            </p>
          </section>
          
          <section>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: 'white'
            }}>
              Regulatory Information
            </h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc'
            }}>
              Onyx Equity complies with all applicable federal and state laws and regulations regarding business lending and financing. We are committed to responsible lending practices and transparent disclosures. Our lending operations may be subject to oversight by various regulatory bodies depending on the specific products and jurisdictions involved.
            </p>
          </section>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              marginTop: '30px',
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#cccccc',
              fontStyle: 'italic'
            }}>
              Equal Credit Opportunity: Onyx Equity is an equal opportunity lender and does not discriminate on the basis of race, color, religion, national origin, sex, marital status, age, or because all or part of the applicant's income derives from any public assistance program, or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Disclosures; 