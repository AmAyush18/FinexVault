import React, { useState } from 'react'
import { openings } from '../../utils/openings'
import { ImBriefcase } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Openings = () => {
    const [allJobs, setAllJobs] = useState(false)

    return (
        <div className='w-full'>
            <div className="w-[90%] mx-auto max-w-[1200px] py-8 mt-8 flex flex-col gap-y-5">
                <h1 className='text-[36px] font-[500]'>
                    Job{" "}
                    <span className='text-orange-400'>Openings</span>
                </h1>
                <p className='text-sm md:w-[85%] lg:w-[80%] text-[#E4E4E7] text-justify pr-6'>
                    Discover thrilling career opportunities at FinexVault, where we highly value talent, innovation, and a genuine passion for customer service. Become an integral part of our team and contribute to shaping a brighter future in the dynamic banking industry. Join us on this exciting journey of growth and excellence!
                </p>
                <div className="mt-4 flex flex-wrap justify-between py-5 md:flex-row flex-col gap-y-4">
                    <div className="w-full flex justify-between flex-wrap">
                        {
                            openings.map(({id, role, location, department, description, requirementsAndQualifications}, index) => (
                                <div key={id} className={`md:w-[49%] w-full ${!allJobs && index > 1 && 'hidden'} flex flex-col gap-y-3 mb-6 py-8 bg-[#1C1C1C] px-9 rounded-xl border border-gray-400 border-opacity-5`}>
                                    <h3 className='text-xl font-[600]'>
                                        {role}
                                    </h3>
                                    <div className='w-full flex flex-wrap gap-x-4 gap-y-3'>
                                        <p className='px-4 py-2 bg-[#1A1A1A] text-[#B3B3B3] text-sm rounded-full'>Department: {" " +department}</p>
                                        <p className='px-4 py-2 bg-[#1A1A1A] text-[#B3B3B3] text-sm rounded-full'>Location:{" "+location}</p>
                                    </div>
                                    <p className='text-[16px] mt-4 font-[500] capitalize'>About this job</p>
                                    <p className='text-[#B3B3B3] text-sm rounded-full text-justify md:text-left lg:text-justify'>{description}</p>
                                    <p className='text-[16px] mt-4 font-[500] capitalize'>Requirements & Qualifications</p>
                                    <div className="w-full flex flex-col gap-y-2">
                                        {
                                            requirementsAndQualifications.map((raq, index) => (
                                                <div key={id+index} className="flex gap-x-2 items-start">
                                                    <div className='w-fit'>
                                                        <ImBriefcase width={18} height={18} className='text-[#B3B3B3]' />
                                                    </div>
                                                    <p className='text-[#B3B3B3] text-sm rounded-full text-justify md:text-left lg:text-justify'>{raq}</p>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <Link className='w-fit mt-4 text-sm px-5 py-3 bg-emerald-500 rounded-full'>
                                        Apply Now
                                    </Link>
                                </div>
                            ))
                        }
                        <div className="w-full mt-4 flex justify-center">
                            <span onClick={() => setAllJobs(true)} className={`${allJobs ? 'hidden' : 'flex'} text-sm px-6 cursor-pointer bg-[#262626] py-3 rounded-full items-center gap-x-2`}>Show All Jobs <IoIosArrowDown className='text-[20px]' /> </span>
                            <span onClick={() => setAllJobs(false)} className={`${allJobs ? 'flex' : 'hidden'} text-sm px-6 cursor-pointer bg-[#262626] py-3 rounded-full items-center gap-x-2`}>Show less Jobs <IoIosArrowUp className='text-[20px]' /> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Openings