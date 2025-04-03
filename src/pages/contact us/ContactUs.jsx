import React from 'react';
import ContactInfoSection from '../home/ContactInfoSection';
import palette from '../../styles/colors';

const ContactUs = () => {
  return (
    <div style={{
      background: palette.darkBlue,
      width: '100%',
      minHeight: '100vh'
    }}>
      <ContactInfoSection />
    </div>
  );
};

export default ContactUs;
