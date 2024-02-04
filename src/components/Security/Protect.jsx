import React from 'react'
import { BsShieldLock, BsGraphUp  } from 'react-icons/bs';
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { FaMobileAlt } from "react-icons/fa";

const securities = [
    {
        id: `SEC001`,
        title: `Secure Online Banking Platform`,
        description: `Experience the confidence of banking securely with our state-of-the-art online platform, equipped with advanced security features and encryption.`,
        icon: <BsShieldLock className='text-emerald-500 text-[22px]' />,
    },
    {
        id: `SEC002`,
        title: `Multi-Factor Authentication`,
        description: `Enhance your account security with Multi-Factor Authentication (MFA), adding an extra layer of protection to your FinexVault account.`,
        icon: <AiOutlineSafetyCertificate className='text-emerald-500 text-[22px]' />,
    },
    {
        id: `SEC003`,
        title: `Fraud Monitoring`,
        description: `Rest easy knowing that our vigilant Fraud Monitoring system actively detects and prevents unauthorized activities, ensuring the safety of your transactions.`,
        icon: <BsGraphUp className='text-emerald-500 text-[22px]' />,
    },
    {
        id: `SEC004`,
        title: `Secure Mobile Banking`,
        description: `Bank on the go with confidence. Our Secure Mobile Banking ensures the safety of your financial transactions anytime, anywhere, directly from your mobile device.`,
        icon: <FaMobileAlt className='text-emerald-500 text-[22px]' />,
    },
];

const Protect = () => {
    return (
        <div className='w-full'>
            <div className="w-[90%] mx-auto max-w-[1200px] py-8 mt-8 flex flex-col gap-y-5">
                <h1 className='text-[36px] font-[500]'>
                    How We{" "}
                    <span className='text-orange-400'>Protect You</span>
                </h1>
                <p className='text-sm md:w-[85%] lg:w-[80%] text-[#E4E4E7] text-justify pr-6'>
                    At FinexVault, the security and confidentiality of your financial information are paramount. Our cutting-edge encryption technology and rigorous data protection measures guarantee the constant safeguarding of your assets and transactions, providing you with peace of mind at all times.
                </p>
                
                <div className="w-full mt-6 flex flex-wrap justify-between md:flex-row bg-[#1C1C1C] !pt-[46px] pb-[32px] px-[36px] bg-opacity-90 rounded-2xl flex-col gap-y-4">
                    <div className="w-full flex justify-between flex-wrap">
                        {
                            securities.map(({id, icon, title, description}) => (
                                <div key={id} className={`md:w-[49%] w-full mb-6 py-10 bg-[#262626] rounded-xl border border-gray-400 border-opacity-5 px-8`}>
                                <div className="flex w-full gap-x-4 items-center">
                                    <div className="px-2 py-2 rounded-full bg-emerald-300 bg-opacity-5">
                                        <div className="px-3 py-3 rounded-full bg-emerald-200 bg-opacity-5">
                                            {icon}
                                        </div>
                                    </div>
                                    <p className='text-lg'>
                                        {title}
                                    </p>
                                </div>
                                <p className='mt-5 text-[#B3B3B3] text-sm text-justify'>{description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Protect