

















"use client"

import React, { useState } from 'react'
import { 
  // PhoneCallIcon,   
  MenuIcon, 
  // Timer, 
  // MessageCircleCodeIcon, 
  XIcon 
} from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#services", label: "Service" },
     { href: "/admission", label: "Admission" },
    { href: "/event", label: "Events" },
    { href: "/staff", label: "Staff" },
    { href: "/#contact", label: "Contact" },   

  ];

  return (
    <nav className='fixed w-full bg-white shadow-md shadow-[#e8eaec]   top-0 z-50'
>


      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3   flex justify-between items-center">
        <div className="flex items-center gap-2">
            {/* <Image 
            alt='logo'
            src={"/logo.jpg"}
            width={40}
            height={40}
            /> */}
          <span className='text-lg sm:text-xl font-bold text-neutral-900 tracking-tight'>
            Eljousy
          </span>
        
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <ul className='hidden lg:flex space-x-4 xl:space-x-8 font-medium'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className='text-sm xl:text-base text-neutral-950 hover:text-orange-600 transition-colors'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Login Button - Hidden on mobile */}
        <div className="hidden lg:block">
          <a 
            href="/login" 
            className='text-sm xl:text-base bg-orange-600 text-white px-5 py-3 xl:px-4 xl:py-2 rounded-md hover:bg-orange-800 transition-colors'
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Toggle - Visible only on mobile */}
        <div className="lg:hidden">
          <button 
            onClick={toggleNavbar} 
            className='text-neutral-800 focus:outline-none'
          >
            {mobileOpen ? (
              <XIcon className='text-red-500 w-6 h-6 sm:w-8 sm:h-8' />
            ) : (
              <MenuIcon className='w-6 h-6 sm:w-8 sm:h-8' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      {mobileOpen && (
        <div className='fixed inset-0 bg-white shadow-md shadow-[#e8eaec]  z-40 lg:hidden overflow-y-auto'>
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <span className='text-xl font-bold text-neutral-900'>ELJOUSY</span>
              <button onClick={toggleNavbar}>
                <XIcon className='text-red-500 w-8 h-8' />
              </button>
            </div>

            <ul className='space-y-6 text-center'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className='text-lg sm:text-xl text-neutral-800 hover:text-orange-600'
                    onClick={toggleNavbar}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <a 
                href="/login" 
                className='bg-orange-600 text-white px-6 py-3 rounded-md text-lg'
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}






