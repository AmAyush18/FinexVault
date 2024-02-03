import React from 'react'
import career from '../../assets/conference-2.jpg'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] mx-auto max-w-[1200px] bg-[#262626] mt-12 py-12 px-10 rounded-xl min-h-32">
            <div className="w-full flex justify-end">
                <div className="w-[100%] md:w-[60%] flex flex-col md:relative md:shadow-none shadow-xl">
                    <img src={career} alt="..." className='w-[100%] h-[360px] md:h-[480px] object-cover rounded-t-xl md:rounded-xl shadow-lg' />
                    <div className="md:absolute bottom-[-15%] md:bottom-auto md:top-0 left-0 md:left-[-65%] w-[100%] lg:w-[90%] bg-[#1A1A1A] min-h-12 py-8 md:py-12 px-6 md:px-10 rounded-b-xl md:rounded-l-xl md:rounded-br-[38px]">
                        <h1 className='text-[26px] md:text-[28px] lg:text-[36px] font-[500]'>
                            Welcome to{" "}
                            <span className='text-orange-400'>FinexVault</span>
                            {" "}Careers!
                        </h1>
                        <p className='text-sm mt-5 text-[#B3B3B3] text-justify pr-6'>
                            Join our dynamic team and set sail on a fulfilling adventure in the banking sector. At FinexVault, we are dedicated to cultivating a culture of excellence and offering avenues for professional development. Centered on innovation, top-notch customer service, and unwavering integrity, we are determined to create a meaningful difference in the lives of our customers and communities. Take the plunge today and become an integral part of our mission to redefine the future of banking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero