import React from 'react'
import { Link } from 'react-router-dom'

const InviteBanner = () => {
  return (
    <div className='w-full mb-14'>
        <div className="w-[90%] mx-auto max-w-[1200px] mt-8 px-10 py-10 bg-[#262626] rounded-2xl flex flex-col md:flex-row justify-center md:justify-between gap-y-7 gap-x-6">
            <div className="w-full md:w-[75%] lg:w-[80%] flex flex-col gap-y-4">
                <h1 className='text-[24px] lg:text-[28px] font-[400]'>
                    Start your financial career with {" "}
                    <span className='text-orange-400'>FinexVault today!</span>
                </h1>
                <p className='text-sm text-[#B3B3B3]'>
                Embark on a rewarding journey and shape your career with FinexVault, where innovation meets opportunity. Join us today and be part of a dynamic team shaping the future of digital banking.
                </p>
            </div>
            <div className="w-full md:w-[25%] lg:w-[20%] flex justify-center items-center">
                <Link to={"#"} className='px-5 py-3 bg-emerald-500 text-sm w-fit h-fit rounded-full'>Explore Now</Link>
            </div>
        </div>
    </div>
  )
}

export default InviteBanner