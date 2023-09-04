import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { BiMenu } from  'react-icons/bi'
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white body-font fixed inset-x-0 z-50 bg-darkblue">
      <div className="mx-auto py-3 px-5 flex flex-row justify-between items-center md:p-5">
        <Link spy={true} smooth={true} offset={-100} duration={750} to ='home' className="flex justify-center items-center">
          <motion.img 
          initial={{ x:-100 }}
          whileInView={{ x:0 ,scale:1.25 }}
          transition={{ duration: 0.7}}
          className='w-12 h-12 ml-3 cursor-pointer rounded-lg scale-125 lg:scale-150 md:ml-10' src={require('../assets/Images/Name.png')} alt="Vijay" />
        </Link>
        <motion.nav
          initial={{ x:100 }}
          whileInView={{ x: 0 }}
          transition={{ duration:0.7 }}
          className="hidden md:ml-auto md:flex flex-wrap items-center text-xl justify-center">
          <Link spy={true} smooth={true} offset={-100} duration={750} to ='home' className="mr-5 cursor-pointer hover:text-dark-orange md:mr-12">Home</Link>
          <Link spy={true} smooth={true} offset={-100} duration={750} to ='about' className="mr-5 cursor-pointer hover:text-dark-orange md:mr-12">About</Link>
          <Link spy={true} smooth={true} offset={-100} duration={750} to ='skills' className="mr-5 cursor-pointer hover:text-dark-orange md:mr-12">Skills</Link>
          <Link spy={true} smooth={true} offset={-100} duration={750} to ='projects' className="mr-5 cursor-pointer hover:text-dark-orange md:mr-12">Projects</Link>
          <Link spy={true} smooth={true} offset={-100} duration={750} to ='contact' className="mr-5 cursor-pointer hover:text-dark-orange md:mr-12">Contact</Link>
        </motion.nav>
        <div className="md:hidden mr-2">
          <BiMenu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform transition md:hidden">
            <div className="rounded-lg bg-darkblue shadow-lg p-5" >
              <div className="flex items-center justify-between">
                <Link onClick={()=>setIsMenuOpen(false)} spy={true} smooth={true} offset={-100} duration={750} to ='home' className="flex items-center">
                  <img className='w-12 h-12 ml-3 cursor-pointer scale-125 lg:ml-10' src={require('../assets/Images/Name.png')} alt="Vijay" />
                </Link>
                <div className="mr-1">
                  <button type="button" onClick={toggleMenu} className="inline-flex items-center justify-center rounded-md p-2">
                    <MdClose className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <nav className="flex flex-col gap-y-7 text-2xl my-7">
                <Link onClick={()=>setIsMenuOpen(false)} spy={true} smooth={true} offset={-100} duration={750} to ='home' className="cursor-pointer hover:text-dark-orange">Home</Link>
                <Link onClick={()=>setIsMenuOpen(false)} spy={true} smooth={true} offset={-100} duration={750} to ='about' className="cursor-pointer hover:text-dark-orange">About</Link>
                <Link onClick={()=>setIsMenuOpen(false)} spy={true} smooth={true} offset={-100} duration={750} to ='skills' className="cursor-pointer hover:text-dark-orange">Skills</Link>
                <Link onClick={()=>setIsMenuOpen(false)} spy={true} smooth={true} offset={-100} duration={750} to ='projects' className="cursor-pointer hover:text-dark-orange">Projects</Link>
                <Link onClick={()=>setIsMenuOpen(false)} spy={true} smooth={true} offset={-100} duration={750} to ='contact' className="cursor-pointer hover:text-dark-orange">Contact</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar