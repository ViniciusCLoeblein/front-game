'use client'

import React from 'react'
import NavbarComponent from './components/navbar'
import SidebarComponent from './components/sidebar'

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <NavbarComponent open={open} setOpen={setOpen} />
      <SidebarComponent open={open} setOpen={setOpen} />
    </>
  )
}
export default Navbar
