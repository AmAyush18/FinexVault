import React, { useEffect } from 'react'
import Hero from './Hero'
import Protect from './Protect'
import Faqs from '../Home/Faqs'

const Security = () => {

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
    scrollToTop();
  }, []);

  return (
    <div className='w-full'>
      <Hero />
      <Protect />
      <Faqs />
    </div>
  )
}

export default Security