import React, { useEffect } from 'react'
import Hero from './Hero'
import Mission from './Mission'
import PressReleases from './PressReleases'

const About = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
    scrollToTop();
  }, []);

  return (
    <div className='w-full'>
      <Hero />
      <Mission />
      <PressReleases />
    </div>
  )
}

export default About