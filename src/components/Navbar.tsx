'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/logo.jpg";

const sections = [
  {sectionLink: '/', name: 'Home'},
  {sectionLink: 'careers', name: 'Careers'}
]

export function Navbar (){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="bg-white">
      <div className="px-8 mx-auto border">
        <div className="flex justify-between">
          <div>
            <Image 
              src={logo}
              alt='Shawn Logo'
              height={60}
              priority={true}  
            />
          </div>

          <div className='hidden md:flex items-center space-x-4'>
            {sections.map((section: any, index: number) => (
              <Link className='py-5 px-3 hover:text-gray-800' href={section.sectionLink} key={index}>{section.name}</Link>
            ))}
          </div>
          
          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => toggleMenu()}>
              <Image 
                src='/menu.svg'
                alt='menu'
                width={40}
                height={40}
              />
            </button>
          </div>

        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={isMenuOpen ? '': 'hidden'}>
        {sections.map((section: any, index: number) => (
          <Link className='block py-3 px-4 hover:bg-gray-200' href={section.sectionLink} key={index}>{section.name}</Link>
        ))}
      </div>
    </nav>
  )
}
