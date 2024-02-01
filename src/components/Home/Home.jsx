import React from 'react'
import Hero from './Hero'
import Products from './Products'
import UseCases from './UseCases'

const Home = () => {
  return (
    <div className='w-full'>
      <Hero />
      <Products />
      <UseCases />
    </div>
  )
}

export default Home