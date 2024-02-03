import React from 'react'
import security from '../../assets/security.jpg'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] mx-auto max-w-[1200px] bg-[#262626] mt-12 py-12 px-10 rounded-xl min-h-32">
            <div className="w-full flex justify-end">
                <div className="w-[100%] md:w-[60%] flex flex-col md:relative md:shadow-none shadow-xl">
                    <img src={security} alt="..." className='w-[100%] h-[360px] md:h-[480px] object-cover rounded-t-xl md:rounded-xl shadow-lg' />
                    <div className="md:absolute bottom-[-15%] md:bottom-auto md:top-0 left-0 md:left-[-65%] w-[100%] lg:w-[90%] bg-[#1A1A1A] min-h-12 py-8 md:py-12 px-6 md:px-10 rounded-b-xl md:rounded-l-xl md:rounded-br-[38px]">
                        <h1 className='text-[26px] md:text-[28px] lg:text-[36px] font-[500]'>
                            Your Safety is Our {" "}
                            <span className='text-orange-400'>Utmost Priority!</span>
                        </h1>
                        <p className='text-sm mt-5 text-[#B3B3B3] text-justify pr-6'>
                            At FinexVault, we prioritize the security of your financial information. Our commitment is evident through robust security measures and advanced technologies, ensuring the protection of your personal and financial data. Bank with confidence, knowing that your security is our topmost priority.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero