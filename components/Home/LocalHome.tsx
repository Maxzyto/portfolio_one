"use client"

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import { About } from './About/About'
import Service from './services/Service'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Reviews from './Reviews/Reviews'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import AOS from "aos";
import "aos/dist/aos.css";

function LocalHome() {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 100,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      })
    }

    initAOS();
})

  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Service />
      <Project />
      <Skills />
      <Reviews />
      <Blog />
      <Contact />
    </div>
  )
}

export default LocalHome