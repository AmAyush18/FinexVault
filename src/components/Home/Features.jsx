import React, { useState } from 'react'
import { onlineBanking, financialSupport, customerSupport } from '../../utils/features'
import { GoArrowUpRight } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";

const Features = () => {

    const [feature, setFeature] = useState('online')

    return (
        <div className='w-full'>
            <div className="w-[90%] mt-8 mx-auto max-w-[1200px] py-8 flex flex-col gap-y-3">
                <h1 className='text-[36px] font-[500]'>
                    Our{" "}
                    <span className='text-orange-400'>Features</span>
                </h1>
                <p className='text-sm md:w-[85%] lg:w-[80%] text-[#E4E4E7] text-justify pr-6'>
                    Discover a myriad of robust functionalities at FinexVault, where you can enjoy a smooth online banking experience, fortified transactions, and tailored financial insights. Our platform is meticulously crafted to elevate and personalize your banking journey, ensuring security and convenience at every step.
                </p>
                <div className="w-full mt-6 flex md:flex-row flex-col gap-y-6 gap-x-12">
                    <div className="flex w-full md:w-[25%] h-fit md:flex-col rounded-lg gap-y-6 py-5 md:justify-normal justify-center gap-x-4 md:py-[48px] px-[24px] bg-[#262626]">
                        <p onClick={() => setFeature('online')} className={`text-sm text-center px-4 py-3 border border-gray-500 border-opacity-20 cursor-pointer rounded-full ${feature === 'online' ? 'bg-[#1c1c1c] text-emerald-500' : ''}`}>
                            Online Banking
                        </p>
                        <p onClick={() => setFeature('financial')} className={`text-sm text-center cursor-pointer px-3 py-3 border border-gray-500 border-opacity-20 rounded-full ${feature === 'financial' ? 'bg-[#1c1c1c] text-emerald-500' : ''}`}>
                            Financial Tools
                        </p>
                        <p onClick={() => setFeature('customer')} className={`text-sm text-center cursor-pointer px-4 py-3 border border-gray-500 border-opacity-20 rounded-full ${feature === 'customer' ? 'bg-[#1c1c1c] text-emerald-500' : ''}`}>
                            Customer Support
                        </p>
                    </div>
                    <div className="w-full">
                        {
                            feature === 'online' && (
                                <div className="w-full flex justify-between flex-wrap">
                                    {
                                        onlineBanking.map((online) => (
                                            <div key={online.id} className="md:w-[49%] w-full mb-4 py-10 bg-[#262626] px-9 rounded-xl">
                                            <div className="flex w-full justify-between items-center">
                                                <p className='text-lg'>
                                                    {online.title}
                                                </p>
                                                <FiCheckCircle className='text-[20px] text-emerald-500 font-[600]' />
                                            </div>
                                            <p className='mt-5 text-[#B3B3B3] text-sm text-justify'>{online.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                        {
                            feature === 'financial' && (
                                <div className="w-full flex justify-between flex-wrap">
                                    {
                                        financialSupport.map((online) => (
                                            <div key={online.id} className="md:w-[49%] w-full mb-4 py-10 bg-[#262626] px-9 rounded-xl">
                                            <div className="flex w-full justify-between items-center">
                                                <p className='text-lg'>
                                                    {online.title}
                                                </p>
                                                <FiCheckCircle className='text-[20px] text-emerald-500 font-[600]' />
                                            </div>
                                            <p className='mt-5 text-[#B3B3B3] text-sm text-justify'>{online.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                        {
                            feature === 'customer' && (
                                <div className="w-full flex justify-between flex-wrap">
                                    {
                                        customerSupport.map((online) => (
                                            <div key={online.id} className="md:w-[49%] w-full mb-4 py-10 bg-[#262626] px-9 rounded-xl">
                                            <div className="flex w-full justify-between items-center">
                                                <p className='text-lg'>
                                                    {online.title}
                                                </p>
                                                <FiCheckCircle className='text-[20px] text-emerald-500 font-[600]' />
                                            </div>
                                            <p className='mt-5 text-[#B3B3B3] text-sm text-justify'>{online.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Features