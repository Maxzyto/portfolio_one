"use client";

import React, { useState } from 'react'
import Nav from './Nav'
import MobleNav from './MobleNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const shownNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={shownNavHandler} />
      <MobleNav showNav={showNav} closeNave={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav