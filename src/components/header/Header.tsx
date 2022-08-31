import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [openMenu, setOpenMenu] = useState<Boolean>()

  const renderNavMenu = () => {
    return (
        <ul className='hidden md:flex inline'>
            <li className='mx-1 py-5 border-b-[5px] border-transparent hover:border-gray-800 transition-all'><Link className='px-3 lg:px-5 py-5 transition-all' to={'/industries'}>Industries</Link></li>
            <li className='mx-1 py-5 border-b-[5px] border-transparent hover:border-gray-800 transition-all'><Link className='px-3 lg:px-5 py-5 transition-all' to={'/services'}>Services</Link></li>
            <li className='mx-1 py-5 border-b-[5px] border-transparent hover:border-gray-800 transition-all'><Link className='px-3 lg:px-5 py-5 transition-all' to={'/about-us'}>About Us</Link></li>
        </ul>
    )
  }

  const renderMobileMenu = () => {
    return (
        <ul className={`-z-10 absolute grid grid-rows-3 md:hidden bg-gray-100 drop-shadow-lg inset-x-0 ${openMenu ? 'bottom-[5rem]':'-bottom-[10.1rem]'} transition-all`}>
            <li className='inline-flex p-3 border hover:bg-gray-200 text-xl'><Link className='w-full' to={'/industries'}>Industries</Link></li>
            <li className='inline-flex p-3 border hover:bg-gray-200 text-xl'><Link className='w-full' to={'/services'}>Services</Link></li>
            <li className='inline-flex p-3 border hover:bg-gray-200 text-xl'><Link className='w-full' to={'/about-us'}>About Us</Link></li>
        </ul>
    )
  }

  return (
    <header className="z-20 relative">
        <div className='grid grid-cols-2 items-center drop-shadow-lg bg-gray-100 px-3 sm:px-8 lg:px-16 transition-all'>
            <div className='flex'>
                <Link to={'/'}><h1 className='whitespace-nowrap md:whitespace-normal text-xl font-light py-5'>Consulting Company</h1></Link>
            </div>
            <div className='relative justify-self-end pl-5'>
                {renderNavMenu()}            {
                    openMenu ? 
                    <FaBars className='-z-20 block md:hidden cursor-pointer text-3xl' onClick={() => setOpenMenu(!openMenu)}/>
                    :
                    <FaTimes className='-z-20 block md:hidden cursor-pointer text-3xl' onClick={() => setOpenMenu(!openMenu)}/>
                }
            </div>
        </div>
        {renderMobileMenu()}
    </header>
  )
}

export default Header
