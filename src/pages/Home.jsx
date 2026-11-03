import React from 'react'
import HeroSection from '../components/Sections/HeroSection'
import VideoSection from '../components/Sections/VideoSection'
import LessonsSection from '../components/Sections/LessonsSection'
import SkillsSection from '../components/Sections/SkillsSection'
import MentorSection from '../components/Sections/MentorSection'
import SubscribeSection from '../components/Sections/SubscribeSection'
import FooterSection from '../components/Sections/FooterSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <LessonsSection />
      <SkillsSection />
      <MentorSection />
      <SubscribeSection />
      <FooterSection />
    </>
  )
}

export default Home