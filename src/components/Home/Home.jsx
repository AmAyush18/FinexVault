import React, { useEffect } from 'react'
import Hero from './Hero'
import Products from './Products'
import UseCases from './UseCases'
import Features from './Features'
import Faqs from './Faqs'
import InviteBanner from './InviteBanner'

const Home = () => {

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    }
    scrollToTop();
  }, []);

  return (
    <div className='w-full'>
      <Hero />
      <Products />
      <UseCases />
      <Features />
      <Faqs />
      <InviteBanner />
    </div>
  )
}

export default Home