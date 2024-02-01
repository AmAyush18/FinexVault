import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdCall, MdLocationPin  } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const navOptions = [
  {
    id: `FNAV001`,
    title: `Home`,
    url: `/`,
  },
  {
    id: `FNAV002`,
    title: `Careers`,
    url: `/careers`,
  },
  {
    id: `FNAV003`,
    title: `About`,
    url: `/about`,
  },
  {
    id: `FNAV004`,
    title: `Security`,
    url: `/security`,
  },
]
const Footer = () => {
  return (
    <div className='w-full bg-[#262626]'>
      <div className="w-[90%] max-w-[1200px] mx-auto mt-5 py-8 flex flex-col justify-center items-center gap-y-4 px-6 rounded-full">
        <div className="flex gap-x-2">
          <img src={logo} alt="..." className='w-[32px] h-[32px] object-cover' />
          <h2 className='text-[22px] font-[500]'>FinexVault</h2>
        </div>
        <div className="flex gap-x-4">
          {
            navOptions.map((nav) => (
              <NavLink key={nav.id} to={nav.url} className={({isActive}) => `px-3 py-2 hover:text-orange-400 ${isActive ? "text-orange-400" : ""} text-sm`}>
                {nav.title}
              </NavLink>
            ))
          }
        </div>
        <div className="flex gap-x-3 mt-4 mb-2 items-center">
          <div className="flex gap-x-2 items-center">
            <FaEnvelope className='text-[16px] text-emerald-500' />
            <p className='text-sm font-[500]'>amayush18@gmail.com</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <MdCall className='text-[16px] text-emerald-500' />
            <p className='text-sm font-[500]'>+91 xxxx xx6360</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <MdLocationPin className='text-[16px] text-emerald-500' />
            <p className='text-sm font-[500]'>Bharat</p>
          </div>
        </div>
        <div className="w-[90%] max-w-[1200px] mx-auto mt-6 py-4 flex justify-between bg-[#1C1C1C] px-4 rounded-full">
          <div className="flex gap-x-2">
            <div className="flex gap-x-2 items-center px-2 py-2 rounded-full cursor-pointer bg-orange-400 w-[32px] h-[32px]">
              <FaFacebook className='text-[16px] text-[#262626]' />
            </div>
            <div className="flex gap-x-2 items-center px-2 py-2 rounded-full cursor-pointer bg-orange-400 w-[32px] h-[32px]">
              <FaLinkedin className='text-[16px] text-[#262626]' />
            </div>
            <div className="flex gap-x-2 items-center px-2 py-2 rounded-full cursor-pointer bg-orange-400 w-[32px] h-[32px]">
              <FaXTwitter className='text-[16px] text-[#262626]' />
            </div>
          </div>
          <div className="flex gap-x-2 text-[#B3B3B3] items-center text-sm">
            &copy; FinexVault. All Rights Reserved
          </div>
          <div className="flex gap-x-2 text-[#B3B3B3] items-center">
            <NavLink to={"#"} className={`py-2 text-sm`}>
              Privacy Policy
            </NavLink>
             |
            <NavLink to={"#"} className={`py-2 text-sm`}>
              Terms of Service
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer