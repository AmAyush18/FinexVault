import React from 'react'
import mission from '../../assets/mission.jpg'
import vision from '../../assets/vision.jpg'

const Mission = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] mx-auto max-w-[1200px] py-8 mt-8 flex flex-col gap-y-5">

            <h1 className='text-[36px] font-[500]'>
                Mission & {" "}
                <span className='text-orange-400'>Vision</span>
            </h1>
            <p className='text-sm md:w-[85%] lg:w-[80%] text-[#E4E4E7] text-justify pr-6'>
                We aspire to be a trailblazing force in the industry, propelled by innovation, integrity, and inclusivity. Our vision is to forge a brighter financial future for individuals and businesses, underpinned by a steadfast commitment to customer satisfaction and community development.
            </p>

            <div className="w-full mt-8 flex md:flex-row flex-col justify-between items-center">
                <div className="w-[100%] md:w-[42%] lg:w-[35%] px-10 pt-12 bg-[#262626] rounded-t-[30px] rounded-b-xl">
                    <img src={mission} alt=".." className='w-[100%] h-[360px] object-cover rounded-t-3xl' />
                </div>
                <div className='w-[100%] md:w-[58%] lg:w-[65%] md:pl-10 flex flex-col gap-y-3 py-2 md:border-l border-l-emerald-500'>
                    <h2 className='text-[28px] font-[400]'>Mission</h2>
                    <p className='text-sm font-[400] text-[#B3B3B3]'>
                        At FinexVault, we are on a mission to empower our customers for financial success. Committed to providing innovative banking solutions tailored to their unique needs, we strive to foster enduring relationships. With personalized services, expert guidance, and cutting-edge technology, we aim to become their trusted partner, supporting them in navigating their financial journey and turning their dreams into reality.
                    </p>
                </div>
            </div>
            
            <div className="w-full flex md:flex-row flex-col-reverse justify-between items-center">
                <div className='w-[100%] md:w-[58%] lg:w-[65%] md:pr-10 flex flex-col gap-y-3 py-2 md:border-r border-r-emerald-500'>
                    <h2 className='text-[28px] font-[400]'>Vision</h2>
                    <p className='text-sm font-[400] text-[#B3B3B3]'>
                        At FinexVault, we are on a mission to empower our customers for financial success. Committed to providing innovative banking solutions tailored to their unique needs, we strive to foster enduring relationships. With personalized services, expert guidance, and cutting-edge technology, we aim to become their trusted partner, supporting them in navigating their financial journey and turning their dreams into reality.
                    </p>
                </div>
                <div className="w-[100%] md:w-[42%] lg:w-[35%] px-10 pt-12 bg-[#262626] rounded-t-[30px] rounded-b-xl">
                    <img src={vision} alt=".." className='w-[100%] h-[360px] object-cover rounded-t-3xl' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission