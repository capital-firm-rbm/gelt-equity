import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import WelcomeSection from './pages/home/WelcomeSection'
import IntroductionSection from './pages/home/IntroductionSection'
import InformationalSection from './pages/home/InformationalSection'
import TestimonialSection from './pages/home/TestimonialSection'
import AsSeenOnSection from './pages/home/AsSeenOnSection'
import ReferenceCardSection from './pages/home/ReferenceCardSection'
import ContactInfoSection from './pages/home/ContactInfoSection'

function App() {
  return (
    <>
      <NavBar />
      <WelcomeSection />
      <IntroductionSection />
      <InformationalSection />
      <TestimonialSection />
      <AsSeenOnSection />
      <ReferenceCardSection />
      <ContactInfoSection />
      <Footer />
    </>
  )
}

export default App
