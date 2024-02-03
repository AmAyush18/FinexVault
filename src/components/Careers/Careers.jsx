import React from 'react'
import Hero from './Hero'
import Values from './Values'
import Benefits from './Benefits'
import Openings from './Openings'
import Faqs from '../Home/Faqs'
import InviteBanner from './InviteBanner'

const Careers = () => {
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