import React, { useState } from 'react'
import { faqs } from '../../utils/faqs'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faqs = () => {

  const [allFaqs, setAllFaqs] = useState(false);

  return (
    <div className='w-full'>
        <div className="w-[90%] mt-8 mx-auto max-w-[1200px] py-8 flex flex-col gap-y-3">
            <h1 className='text-[36px] font-[500]'>
                Frequently Asked{" "}
                <span className='text-orange-400'>Questions</span>
            </h1>
            <p className='text-sm md:w-[80%] text-[#E4E4E7]'>
              Still you have any questions? Contact our team via amayush0818@gmail.com.
            </p>
            <div className="w-full flex flex-wrap justify-between mt-10">
              {
                faqs.map((faq, index) => (
                  <div className={`w-full ${index > 1 && !allFaqs && 'hidden'} md:w-[48%] px-[32px] py-[32px] mb-4 border border-gray-500 border-opacity-20 rounded-2xl`}>
                      <p className='text-[16px]'>
                          {faq.question}
                      </p>
                      <div className='w-full bg-gray-500 bg-opacity-20 h-[1px] my-[24px]' />
                      <p className='mt-5 text-[#B3B3B3] text-sm text-justify'>{faq.answer}</p>
                  </div>
                ))
              }
              <div className="w-full mt-4 flex justify-center">
                <span onClick={() => setAllFaqs(true)} className={`${allFaqs ? 'hidden' : 'flex'} text-sm px-6 cursor-pointer bg-[#262626] py-3 rounded-full items-center gap-x-2`}>Load more FAQs <IoIosArrowDown className='text-[20px]' /> </span>
                <span onClick={() => setAllFaqs(false)} className={`${allFaqs ? 'flex' : 'hidden'} text-sm px-6 cursor-pointer bg-[#262626] py-3 rounded-full items-center gap-x-2`}>Show less FAQs <IoIosArrowUp className='text-[20px]' /> </span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Faqs