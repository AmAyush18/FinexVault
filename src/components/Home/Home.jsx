import React from 'react'
import Hero from './Hero'
import Products from './Products'
import UseCases from './UseCases'
import Features from './Features'

const Home = () => {
  return (
    <div className='w-full'>
      <Hero />
      <Products />
      <UseCases />
      <Features />
    </div>
  )
}

export default Home