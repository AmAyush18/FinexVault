import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx' 

const navOptions = [
  {
    id: `NAV001`,
    title: `Home`,
    url: `/`,
  },
  {
    id: `NAV002`,
    title: `Careers`,
    url: `/careers`,
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMenuOpen(false)
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='w-full'>
      <div className="w-[90%] max-w-[1200px] mx-auto mt-5 py-4 flex justify-between bg-[#1C1C1C] px-6 rounded-full">
        <div className="flex gap-x-2">
          <img src={logo} alt="..." className='w-[32px] h-[32px] object-cover' />
          <h2 className='text-[22px] font-[500]'>FinexVault</h2>
        </div>
        <div className="hidden md:flex gap-x-2">
          {
            navOptions.map((nav) => (
              <NavLink key={nav.id} to={nav.url} className={({isActive}) => `px-3 py-2 hover:text-orange-400 ${isActive ? "bg-[#262626] rounded-full text-orange-400" : ""} text-sm`}>
                {nav.title}
              </NavLink>
            ))
          }
        </div>
        <div className="hidden md:flex gap-x-2">
          <NavLink to={"/signup"} className={`px-3 py-2 hover:text-orange-400 text-sm`}>
            Sign up
          </NavLink>
          <NavLink to={"/signin"} className={`px-3 py-2 bg-emerald-600 rounded-full text-sm`}>
            Sign in
          </NavLink>
        </div>
        <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate focus:outline-none"
            >
              {isMenuOpen ? (
                <RxCross2 className="text-[18px]" />
              ) : (
                <FaBars className="text-[18px]" />
              )}
            </button>
        </div>
        <div
          className={`space-y-4 w-[90%] max-w-[1200px] rounded-b-xl mx-auto px-4 md:hidden mt-16 py-7 bg-[#1C1C1C] ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navOptions.map((nav) => (
            <NavLink key={nav.id} to={nav.url} className={({isActive}) => `px-3 py-2 hover:text-orange-400 ${isActive ? " text-orange-400" : ""} w-full text-sm flex flex-col justify-center items-center`}>
                <p>{nav.title}</p>
            </NavLink>
          ))}
          <div className="flex flex-col justify-center items-center gap-y-4">
            <NavLink to={"/signin"} className={({isActive}) => `px-3 py-2 hover:text-orange-400 ${isActive ? "text-orange-400" : ""} w-full text-sm flex flex-col justify-center items-center`}>
              Sign in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header