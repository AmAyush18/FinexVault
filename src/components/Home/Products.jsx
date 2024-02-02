import React, { useState } from 'react'
import { FaBuilding, FaMoneyBillAlt, FaRegCreditCard } from 'react-icons/fa';
import { FaBriefcase } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { HiBanknotes } from "react-icons/hi2";

const individuals = [
    {
        id: `PROIND001`,
        title: `Checking Accounts`,
        description: `Experience seamless and convenient access to your funds through our diverse range of checking account options. Benefit from essential features, including online and mobile banking, debit cards, and complimentary ATM access.`,
        icon: <FaBriefcase className='text-[22px] text-emerald-500' />
    },
    {
        id: `PROIND002`,
        title: `Savings Accounts`,
        description: `Cultivate your savings with our competitive interest rates and versatile savings account choices. Whether you're saving for a specific goal or aiming to grow your wealth over time, we offer the ideal account to match your needs.`,
        icon: <MdAccountBalance className='text-[22px] text-emerald-500' />
    },
    {
        id: `PROIND003`,
        title: `Loans and Mortgages`,
        description: `Turn your aspirations into reality with our flexible loan and mortgage solutions. From personal loans to home mortgages, our seasoned loan officers are here to assist you through the application process and secure the necessary funds.`,
        icon: <HiBanknotes className='text-[22px] text-emerald-500' />
    },
];


const businesses = [
    {
        id: `PROBUS001`,
        title: `Business Accounts`,
        description: `Streamline your business finances with our diverse range of account options. Enjoy seamless access to funds, online banking tools, and dedicated business support.`,
        icon: <FaBuilding className='text-[22px] text-emerald-500' />
    },
    {
        id: `PROBUS002`,
        title: `Savings Solutions`,
        description: `Boost your business's financial growth with competitive interest rates and flexible savings options. Whether for future investments or working capital, we have the right solution for your business.`,
        icon: <FaMoneyBillAlt className='text-[22px] text-emerald-500' />
    },
    {
        id: `PROBUS003`,
        title: `Business Financing`,
        description: `Fuel the growth of your business with tailored financing solutions. From small business loans to equipment financing, our experienced advisors guide you through securing the funding your business needs.`,
        icon: <FaRegCreditCard className='text-[22px] text-emerald-500' />
    },
];

const Products = () => {
    const [individual, setIndividual] = useState(true)

  return (
    <div className='w-full'>
        <div className="w-[90%] mt-8 mx-auto max-w-[1200px] py-8 flex flex-col gap-y-3">
            <h1 className='text-[36px] font-[500]'>
                Our{" "}
                <span className='text-orange-400'>Products</span>
            </h1>
            <div className='w-full flex flex-col md:flex-row justify-between gap-y-3 gap-x-3 md:items-center'>
                <p className='text-sm md:w-[65%] text-[#E4E4E7] text-justify pr-6'>
                    Explore a variety of tailored and adaptable banking products at FinexVault, crafted to meet your distinct financial requirements and aspirations.
                </p>
                <div className="md:w-fit px-2 flex justify-around py-2 rounded-full bg-[#1C1C1C]">
                    <p onClick={() => setIndividual(true)} className={`text-sm text-center px-2 cursor-pointer py-2 rounded-full ${individual ? 'bg-emerald-600' : ''}`}>
                        For Individuals
                    </p>
                    <p onClick={() => setIndividual(false)} className={`text-sm text-center cursor-pointer px-2 py-2 rounded-full ${!individual ? 'bg-emerald-600' : ''}`}>
                        For Buisnesses
                    </p>
                </div>
            </div>
            <div className="w-full mt-12 flex flex-wrap gap-x-2 gap-y-3 justify-between">
                {
                    individual ? (
                        <>
                            {
                                individuals.map((prod) => (
                                    <div key={prod.id} className={`md:w-[48%] lg:w-[31%] w-[100%] mb-2 flex flex-col items-center gap-y-3 px-5 shadow-xl py-6`}>
                                        <div className="px-2 py-2 rounded-full bg-emerald-300 bg-opacity-5">
                                            <div className="px-3 py-3 rounded-full bg-emerald-200 bg-opacity-5">
                                                {prod.icon}
                                            </div>
                                        </div>
                                        <p className='text-[18px] font-[500] text-center'>{prod.title}</p>
                                        <p className='text-sm text-[#B3B3B3] font-[400] text-center'>{prod.description}</p>
                                    </div>
                                ))
                            }    
                        </>
                    ) : (
                        <>
                            {
                                businesses.map((prod) => (
                                    <div key={prod.id} className={`md:w-[48%] lg:w-[31%] w-[100%] mb-2 flex flex-col items-center gap-y-3 px-5 shadow-xl py-6`}>
                                        <div className="px-2 py-2 rounded-full bg-emerald-300 bg-opacity-5">
                                            <div className="px-3 py-3 rounded-full bg-emerald-200 bg-opacity-5">
                                                {prod.icon}
                                            </div>
                                        </div>
                                        <p className='text-[18px] font-[500] text-center'>{prod.title}</p>
                                        <p className='text-sm text-[#B3B3B3] font-[400] text-center'>{prod.description}</p>
                                    </div>
                                ))
                            }
                        </>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Products