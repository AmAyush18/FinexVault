import React, { useEffect } from 'react'
import Hero from './Hero'
import Values from './Values'
import Benefits from './Benefits'
import Openings from './Openings'
import Faqs from '../Home/Faqs'
import InviteBanner from './InviteBanner'

const Careers = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
    scrollToTop();
  }, []);

  return (
    <div className='w-full'>
      <Hero />
      <Values />
      <Benefits />
      <Openings />
      <Faqs />
      <InviteBanner />
    </div>
  )
}

export default Careers