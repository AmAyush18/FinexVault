import React from 'react'
import { values } from '../../utils/values'

const Values = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] mx-auto max-w-[1200px] py-8 mt-8 flex flex-col gap-y-5">
            <h1 className='text-[36px] font-[500]'>
                Our{" "}
                <span className='text-orange-400'>Values</span>
            </h1>
            <p className='text-sm md:w-[85%] lg:w-[80%] text-[#E4E4E7] text-justify pr-6'>
                At FinexVault, our principles serve as the bedrock of our organization, steering our actions with purpose. We are steadfast in maintaining the utmost integrity, providing unparalleled service, and fostering a culture of innovation. These core values not only define our organizational ethos but also influence our collaborative efforts in realizing our objectives.
            </p>
            <div className="mt-4 flex flex-wrap justify-between py-5 md:flex-row flex-col gap-y-4">
                {
                    values.map((value) => (
                        <div key={value.id} className="w-full md:w-[48%] border-l border-l-emerald-500 py-2 px-5 flex flex-col gap-y-3 justify-center mb-5">
                            <h2 className='text-[32px] text-[#4C4C4D] font-[500]'>{value.title}</h2>
                            <p className='text-sm text-[#B3B3B3]'>{value.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Values