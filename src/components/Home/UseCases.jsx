import React from 'react'
import { FaRegSave, FaRegChartBar, FaBusinessTime, FaMoneyCheckAlt } from 'react-icons/fa';
import { FaBriefcase } from "react-icons/fa6";
import { HiBanknotes, HiHome } from "react-icons/hi2";
import { Link } from 'react-router-dom';

import { IoSchoolOutline } from "react-icons/io5";
import { AiOutlineCreditCard } from "react-icons/ai";

const individuals = [
    {
        id: `PROIND001`,
        title: `Managing Personal Finances`,
        icon: <FaBriefcase className='text-[22px] text-orange-400' />
    },
    {
        id: `PROIND002`,
        title: `Saving for the Future`,
        icon: <FaRegSave className='text-[22px] text-orange-400' />
    },
    {
        id: `PROIND003`,
        title: `Homeownership`,
        icon: <HiHome className='text-[22px] text-orange-400' />
    },
    {
        id: `PROIND004`,
        title: `Education Funding`,
        icon: <IoSchoolOutline className='text-[22px] text-orange-400' />
    },
];

const businesses = [
    {
        id: `PROBUS001`,
        title: `Startups and Entrepreneurs`,
        icon: <FaRegChartBar className='text-[22px] text-orange-400' />
    },
    {
        id: `PROBUS002`,
        title: `Cash Flow Management`,
        icon: <FaBusinessTime className='text-[22px] text-orange-400' />
    },
    {
        id: `PROBUS003`,
        title: `Business Expansion`,
        icon: <FaMoneyCheckAlt className='text-[22px] text-orange-400' />
    },
    {
        id: `PROBUS004`,
        title: `Payment Solutions`,
        icon: <AiOutlineCreditCard className='text-[22px] text-orange-400' />
    },
];

const UseCases = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] mt-8 mx-auto max-w-[1200px] py-8 flex flex-col gap-y-3">
            <h1 className='text-[36px] font-[500]'>
                Use{" "}
                <span className='text-orange-400'>Cases</span>
            </h1>
            <p className='text-sm text-[#E4E4E7] text-justify pr-6 md:w-[67.5%]'>
                At FinexVault, we address the varied requirements of both individuals and businesses, providing an extensive array of financial solutions to meet diverse needs.
            </p>
            <div className="mt-6 w-full flex flex-col gap-y-6">
                <div className="w-full flex md:flex-row flex-col gap-x-4 gap-y-4">
                    <div className="w-[100%] md:w-[48%]  px-6 py-9 bg-[#1C1C1C] bg-blend-exclusion rounded-2xl">
                        <div className="w-full flex flex-wrap gap-x-2 gap-y-3 justify-between">
                            {
                                individuals.map((prod) => (
                                    <div key={prod.id} className={`w-[48%] mb-2 flex flex-col items-center bg-[#1A1A1A] rounded-xl gap-y-3 px-5 shadow-xl py-6`}>
                                        <div className="px-2 py-2 rounded-full bg-orange-300 bg-opacity-5">
                                            <div className="px-3 py-3 rounded-full bg-orange-200 bg-opacity-5">
                                                {prod.icon}
                                            </div>
                                        </div>
                                        <p className='text-sm font-[500] text-center'>{prod.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[50%] flex flex-col justify-between px-5">
                        <h2 className='text-2xl font-[500]'>
                            For Individuals
                        </h2>
                        <p className='text-sm mt-2 text-[#B3B3B3] text-justify pr-2 md:pr-6'>
                            For individuals, our mortgage services pave the path to homeownership, while our adaptable personal loans offer crucial assistance throughout various life milestones. Additionally, we emphasize retirement planning, securing a financially sound future for our valued customers.
                        </p>
                        <div className="w-full mt-10 flex justify-between gap-x-2 md:gap-x-4">
                            <div className="w-[33%] flex flex-col">
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-emerald-500 font-[600]'>64%</h1>
                                <p className='text-xs md:text-sm mt-2 text-[#B3B3B3] md:pr-6'>
                                    Secure Retirement Planning
                                </p>
                            </div>
                            <div className="w-[33%] flex flex-col">
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-emerald-500 font-[600]'>88%</h1>
                                <p className='text-xs md:text-sm mt-2 text-[#B3B3B3] md:pr-6'>
                                    Manageable Debt Consolidation
                                </p>
                            </div>
                            <div className="w-[33%] flex flex-col">
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-emerald-500 font-[600]'>92%</h1>
                                <p className='text-xs md:text-sm mt-2 text-[#B3B3B3] md:pr-6'>
                                    Reducing financial burdens
                                </p>
                            </div>
                        </div>
                        <div className='w-fit mt-5 bg-[#1C1C1C] text-sm px-4 py-3 rounded-full'>
                            <Link to={"#"}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex md:flex-row flex-col-reverse gap-x-4 gap-y-4">
                    <div className="w-[100%] md:w-[50%] flex flex-col justify-between px-5">
                        <h2 className='text-2xl font-[500]'>
                            For Businesses
                        </h2>
                        <p className='text-sm mt-2 text-[#B3B3B3] text-justify pr-2 md:pr-6'>
                            For businesses, we foster growth through working capital solutions that enhance cash flow optimization. Our customized financing options drive the expansion of your business. Whatever your financial aspirations, FinexVault is dedicated to offering the essential tools and support needed to attain them.
                        </p>
                        <div className="w-full mt-10 flex justify-between gap-x-4">
                            <div className="w-[33%] flex flex-col">
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-emerald-500 font-[600]'>76%</h1>
                                <p className='text-xs md:text-sm mt-2 text-[#B3B3B3] md:pr-6'>
                                    Cash Flow Management
                                </p>
                            </div>
                            <div className="w-[33%] flex flex-col">
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-emerald-500 font-[600]'>83%</h1>
                                <p className='text-xs md:text-sm mt-2 text-[#B3B3B3] md:pr-6'>
                                    Drive Business Expansion
                                </p>
                            </div>
                            <div className="w-[33%] flex flex-col">
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-emerald-500 font-[600]'>59%</h1>
                                <p className='text-xs md:text-sm mt-2 text-[#B3B3B3] md:pr-6'>
                                    Streamline payroll processing
                                </p>
                            </div>
                        </div>
                        <div className='w-fit mt-5 bg-[#1C1C1C] text-sm px-4 py-3 rounded-full'>
                            <Link to={"#"}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[48%]  px-6 py-9 bg-[#1C1C1C] bg-blend-exclusion rounded-2xl">
                        <div className="w-full flex flex-wrap gap-x-2 gap-y-3 justify-between">
                            {
                                businesses.map((prod) => (
                                    <div key={prod.id} className={`w-[48%] mb-2 flex flex-col items-center bg-[#1A1A1A] rounded-xl gap-y-3 px-5 shadow-xl py-6`}>
                                        <div className="px-2 py-2 rounded-full bg-orange-300 bg-opacity-5">
                                            <div className="px-3 py-3 rounded-full bg-orange-200 bg-opacity-5">
                                                {prod.icon}
                                            </div>
                                        </div>
                                        <p className='text-sm font-[500] text-center'>{prod.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UseCases

