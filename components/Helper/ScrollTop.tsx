/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';


const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  },[]);

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
        behavior: "smooth",
    })
  }

  return <div className='flex bottom-4 animate-pulse right-4'>
    {isVisible && (
      <button onClick={ScrollTop} className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none">
        <FaArrowUp />
      </button>
      )}
    </div>;
}




export default ScrollTop