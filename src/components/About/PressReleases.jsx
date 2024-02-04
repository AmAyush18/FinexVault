import React from 'react'
import { pressReleases } from '../../utils/pressReleases'

const PressReleases = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] mx-auto max-w-[1200px] py-8 mt-8 flex flex-col gap-y-5">
            <h1 className='text-[36px] font-[500]'>
                Press{" "}
                <span className='text-orange-400'>Releases</span>
            </h1>
            <p className='text-sm md:w-[85%] lg:w-[80%] text-[#E4E4E7] text-justify pr-6'>
                Stay informed about the latest developments and exciting news at FinexVault by exploring our press releases. Stay tuned for updates on our journey, innovations, and significant milestones in the world of finance.
            </p>

            <div className="mt-4 flex flex-wrap justify-between py-5 md:flex-row flex-col gap-y-4">
                {
                    pressReleases.map(({id, title, date, description, thumbnail}) => (
                        <div key={id} className="w-full md:w-[48%] py-8 px-7 flex flex-col bg-[#1C1C1C] border-gray-400 border-opacity-5 border rounded-t-3xl rounded-b-xl gap-y-3 justify-center mb-5">
                            <img src={thumbnail} alt="" className='w-full h-[320px] object-cover' />
                            <h2 className='text-[20px] font-[500]'>{title}</h2>
                            <p className='text-sm text-[#B3B3B3]'>{description}</p>
                        </div>
                    ))
                }
            </div>
            
        </div>
    </div>
  )
}

export default PressReleases