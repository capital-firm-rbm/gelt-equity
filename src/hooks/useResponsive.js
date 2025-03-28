import { useState, useEffect } from 'react';

const useResponsive = () => {
  // Define breakpoints
  const breakpoints = {
    mobile: 480, // Mobile devices
    tablet: 768, // Tablets
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Update device type based on window width
    if (windowWidth <= breakpoints.mobile) {
      setDeviceType('mobile');
    } else if (windowWidth <= breakpoints.tablet) {
      setDeviceType('tablet');
    } else {
      setDeviceType('desktop');
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth, breakpoints.mobile, breakpoints.tablet]);

  return {
    windowWidth,
    isMobile: windowWidth <= breakpoints.mobile,
    isTablet: windowWidth > breakpoints.mobile && windowWidth <= breakpoints.tablet,
    isDesktop: windowWidth > breakpoints.tablet,
    deviceType,
  };
};

export default useResponsive; 