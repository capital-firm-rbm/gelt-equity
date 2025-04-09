import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import WelcomeSection from './pages/home/WelcomeSection'
import IntroductionSection from './pages/home/IntroductionSection'
import InformationalSection from './pages/home/InformationalSection'
import TestimonialSection from './pages/home/TestimonialSection'
import ReferenceCardSection from './pages/home/ReferenceCardSection'
import ContactInfoSection from './pages/home/ContactInfoSection'
import OurStory from './pages/about/OurStory'
import Careers from './pages/about/Careers'
import Resources from './pages/resources/Resources'
import Blog from './pages/resources/Blog'
import Guides from './pages/resources/Guides'
import FAQ from './pages/resources/FAQ'
import Press from './pages/company/Press'
import ContactUs from './pages/contact us/ContactUs'
import BusinessLoans from './pages/business loans/BusinessLoans'
import Service from './pages/service/Service'
import Affiliates from './pages/affiliates/Affiliates'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import TermsOfService from './pages/legal/TermsOfService'
import Disclosures from './pages/legal/Disclosures'
import Sitemap from './pages/Sitemap'
import LogIn from './pages/LogIn'
import Apply from './pages/Apply'
import ScrollToTop from './components/ScrollToTop'

function HomePage() {
  return (
    <>
      <WelcomeSection />
      <IntroductionSection />
      <InformationalSection />
      <TestimonialSection />
      <ReferenceCardSection />
      <ContactInfoSection />
    </>
  )
}

const App = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* About section */}
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/careers" element={<Careers />} />
        
        {/* Company section */}
        <Route path="/company/press" element={<Press />} />
        
        {/* Resources section */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/guides" element={<Guides />} />
        <Route path="/resources/faq" element={<FAQ />} />
        
        {/* Main sections */}
        <Route path="/business-loans" element={<BusinessLoans />} />
        <Route path="/service" element={<Service />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/contact" element={<ContactUs />} />
        
        {/* Legal section */}
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal/terms-of-service" element={<TermsOfService />} />
        <Route path="/legal/disclosures" element={<Disclosures />} />
        <Route path="/sitemap" element={<Sitemap />} />
        
        {/* Login section */}
        <Route path="/login" element={<LogIn />} />
        
        {/* Apply section */}
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
