import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const navOptions = [
  {
    id: `NAV001`,
    title: `Home`,
    url: `/`,
  },
  {
    id: `NAV002`,
    title: `Careers`,
    url: `/career`,
  },
  {
    id: `NAV003`,
    title: `About`,
    url: `/about`,
  },
  {
    id: `NAV004`,
    title: `Security`,
    url: `/security`,
  },
]
const Header = () => {
  return (
    <div className='w-full'>
      <div className="w-[90%] max-w-[1200px] mx-auto mt-5 py-3 flex justify-between bg-[#1C1C1C] px-4 rounded-full">
        <div className="flex gap-x-2">
          <img src={logo} alt="..." className='w-[32px] h-[32px] object-cover' />
          <h2 className='text-[22px] font-[500]'>FinexVault</h2>
        </div>
        <div className="flex gap-x-2">
          {
            navOptions.map((nav) => (
              <NavLink key={nav.id} to={nav.url} className={({isActive}) => `px-3 py-2 hover:text-orange-400 ${isActive ? "bg-[#262626] rounded-full text-orange-400" : ""} text-sm`}>
                {nav.title}
              </NavLink>
            ))
          }
        </div>
        <div className="flex gap-x-2">
          <NavLink to={"/signup"} className={({isActive}) => `px-3 py-2 ${isActive ? "bg-[#262626] rounded-full" : ""} text-sm`}>
            Sign up
          </NavLink>
          <NavLink to={"/signin"} className={`px-3 py-2 bg-emerald-600 rounded-full text-sm`}>
            Sign in
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default Header