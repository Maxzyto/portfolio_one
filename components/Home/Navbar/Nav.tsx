"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';

// define props 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = {
  openNav: () => void;
}
const Nav = ({ openNav }: Props) => {

  const [navBg, setNavBG] = useState(false)
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBG(true);
      }
      if (window.scrollY < 90) {
        setNavBG(false);
      }
    }
    window.addEventListener("scroll", handler)
    return () => {
      
    window.removeEventListener("scroll", handler);
    }
  }, [])
  return (
    <div className={`fixed ${navBg ? "bg-[#240b39]" : "fixed"} h-[12vh] z-[10]  w-full transition-all duration-200 `}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] mx-auto ">
        {/* { LOGO } */}
        <Image
          src="/images/Logo.png"
          alt="LOGO"
          width={100}
          height={100}
          className="ml-[-1.5rem] sm:ml-0 "
        />
        {/* { Nav Links } */}
        <div className='flex items-center space-x-10'>
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav_link">{navlink.label} </p>
                </Link>
              );
            })}
          </div>

          {/* {Button} */}
          <button className='md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg '>
              Offer me a Job
          </button>

          {/* {Burger} */}
          <HiBars3BottomRight
            onClick={openNav}
            className='w-8 h-8 cursor-pointer text-white lg:hi' />
        </div>
      </div>
    </div>
  );
}

export default Nav