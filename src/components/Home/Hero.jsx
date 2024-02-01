import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import bank from '../../assets/piggy-bank.jpg'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] mx-auto mt-8 max-w-[1200px] flex flex-col md:flex-row justify-between py-8">
            <div className="w-full md:w-[40%] lg:w-[50%] py-6 flex flex-col gap-y-2 md:gap-y-3 lg:gap-y-4">
                <p className='py-1 w-fit px-3 rounded-full flex gap-x-2 font-[300] text-xs items-center bg-[#262626]'>
                    <IoIosCheckmarkCircle className='text-emerald-500 text-[22px]' />
                    No LLC Required. No Credit Check.
                </p>
                <h1 className='text-[30px] lg:text-[36px] font-[500]'>
                    Welcome to FinexVault Empowering Your{" "}
                    <span className='text-orange-400'>Financial Journey</span>
                </h1>
                <div className="w-full md:w-[0%] my-2 md:my-0">
                    <img src={bank} alt="..." className='w-full h-[480px] md:h-[0%] object-cover rounded-3xl' />
                </div>
                <p className='text-sm text-[#E4E4E7] text-justify pr-6'>
                    At FinexVault, our goal is to offer inclusive banking solutions, empowering individuals and businesses to reach their financial aspirations. We are dedicated to providing personalized and inventive services, prioritizing the unique needs of our customers.
                </p>
                <Link className='w-fit mt-4 px-6 py-3 rounded-full text-sm text-white bg-emerald-600'>
                    Open Account
                </Link>
            </div>
            <div className="w-[0%] md:w-[60%] lg:w-[50%] px-4">
                <img src={bank} alt="..." className='w-full h-[0%] md:h-[480px] object-cover rounded-3xl' />
            </div>
        </div>
    </div>
  )
}

export default Hero