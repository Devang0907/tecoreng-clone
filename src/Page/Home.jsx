import React from 'react'
import NavigationBar from '../components/NavigationBar'
import LandingComponent from '../components/LandingComponent'
import VideoSection from '../components/VideoSection'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import FeatureSection from '../components/FeatureSection'
import SpecializationSection from '../components/SpecializationSection'
import DevelopmentProcessSection from '../components/DevelopmentProcessSection'

function Home() {
  return (
    <>
    <NavigationBar/>
    <LandingComponent/>
    <VideoSection/>
    <HeroSection/>
    <ServicesSection/>
    <FeatureSection/>
    <SpecializationSection/>
    <DevelopmentProcessSection/>
    </>
    
  )
}

export default Home