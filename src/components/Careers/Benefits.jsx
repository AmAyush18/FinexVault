import React from 'react'
import { GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const benefits = [
    {
        id: `BEN001`,
        title: `Competitive Compensation`,
        description: `At FinexVault, we provide a competitive salary package that recognizes the skills and expertise of our employees. We believe in rewarding exceptional performance and offering opportunities for financial growth. Your hard work is valued, and we ensure that you are fairly compensated for your valuable contributions.`,
        roundedStyle: `rounded-tl-[38px] rounded-tr-xl rounded-bl-xl rounded-br-[38px]`,
        icon: <GiReceiveMoney className='text-emerald-500 text-[22px]' />,
    },
    {
        id: `BEN002`,
        title: `Health and Wellness`,
        description: `Your well-being is a top priority at FinexVault. Enjoy comprehensive health and wellness benefits designed to support a healthy lifestyle. We offer a range of programs and services to ensure that you have the resources you need to maintain both physical and mental well-being, fostering a healthy and thriving work environment.`,
        roundedStyle: `rounded-tr-[38px] rounded-tl-xl rounded-br-xl rounded-bl-[38px]`,
        icon: <MdOutlineHealthAndSafety className='text-emerald-500 text-[22px]' />,
    },
    {
        id: `BEN003`,
        title: `Retirement Planning`,
        description: `Plan for your future with confidence at FinexVault. Our thoughtful retirement benefits are designed to ensure financial security in the long run. We understand the importance of planning for retirement, and we provide the necessary support and resources to help you build a secure financial foundation for your post-work years.`,
        roundedStyle: `rounded-bl-[38px] rounded-br-xl rounded-tl-xl rounded-tr-[38px]`,
        icon: <GiTakeMyMoney className='text-emerald-500 text-[22px]' />,
    },
    {
        id: `BEN004`,
        title: `Work-Life Balance`,
        description: `Maintaining a healthy balance between your professional and personal life is crucial at FinexVault. We understand the importance of work-life balance in fostering overall well-being and happiness. Our flexible work arrangements and supportive policies are designed to help you achieve harmony between your professional and personal commitments.`,
        roundedStyle: `rounded-tl-[38px] rounded-tr-xl rounded-bl-xl rounded-br-[38px]`,
        icon: <LiaBalanceScaleSolid className='text-emerald-500 text-[22px]' />,
    },
];


const Benefits = () => {
    return (
        <div className='w-full'>
            <div className="w-[90%] mx-auto max-w-[1200px] py-8 mt-8 flex flex-col gap-y-5">
                <h1 className='text-[36px] font-[500]'>
                    Our{" "}
                    <span className='text-orange-400'>Benefits</span>
                </h1>
                <p className='text-sm md:w-[85%] lg:w-[80%] text-[#E4E4E7] text-justify pr-6'>
                    At FinexVault, we prioritize the welfare and success of our team members. Our commitment extends to providing a robust array of benefits crafted to enhance both their personal and professional development.
                </p>
                <div className="w-full mt-4 flex flex-wrap justify-between py-5 md:flex-row flex-col gap-y-4">
                    <div className="w-full flex justify-between flex-wrap">
                        {
                            benefits.map((benefit) => (
                                <div key={benefit.id} className={`md:w-[49%] w-full mb-6 py-10 bg-[#262626] px-9 ${benefit.roundedStyle}`}>
                                <div className="flex w-full gap-x-4 items-center">
                                    <div className="px-2 py-2 rounded-full bg-emerald-300 bg-opacity-5">
                                        <div className="px-3 py-3 rounded-full bg-emerald-200 bg-opacity-5">
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    <p className='text-lg'>
                                        {benefit.title}
                                    </p>
                                </div>
                                <p className='mt-5 text-[#B3B3B3] text-sm text-justify'>{benefit.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits