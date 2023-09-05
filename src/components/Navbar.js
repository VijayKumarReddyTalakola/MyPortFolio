import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const links = [
  {
    "title" : "Home",
    "link" : "home"
  },
  {
    "title" : "About",
    "link" : "about"
  },
  {
    "title" : "Skills",
    "link" : "skills"
  },
  {
    "title" : "Projects",
    "link" : "projects"
  },
  {
    "title" : "Contact",
    "link" : "contact"
  }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white body-font fixed inset-x-0 z-50 bg-darkblue">
      <div className="mx-auto py-3 px-5 flex flex-row justify-between items-center md:p-5">
        <Link data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" spy={true} smooth={true} offset={-100} duration={750} to="home" className="flex justify-center items-center">
          <img className="w-12 h-12 ml-3 cursor-pointer rounded-lg scale-125 lg:scale-150 lg:ml-10" src={require("../assets/Images/Name.png")} alt="Vijay"/>
        </Link>
        <nav data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" className="hidden md:ml-auto md:flex flex-wrap items-center text-xl justify-center">
          {
            links.map((item)=>{
              return (
              <Link key={item.name} spy={true} smooth={true} offset={-100} duration={750} to={item.link} className="mr-5 cursor-pointer hover:text-dark-orange md:mr-12">
                {item.title}
              </Link>
              )
            })
          }
          <a href="https://drive.google.com/drive/u/1/folders/1VLbE3u0gC3x66ClPWCUmcK75DuhTAyKx" target="_blank" rel="noreferrer">
            <button className=" text-white bg-dark-orange py-1 px-4 focus:outline-none hover:text-dark-orange hover:bg-white rounded-lg text-lg">
              Resume
            </button>
          </a>
        </nav>
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" className="md:hidden mr-2">
          <BiMenu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transition ease-in-out duration-1000 md:hidden">
            <div className="rounded-lg bg-darkblue shadow-lg p-5">
              <div className="flex items-center justify-between">
                <Link data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" onClick={() => setIsMenuOpen(false)} spy={true} smooth={true} offset={-100} duration={750} to="home" className="flex items-center">
                  <img className="w-12 h-12 ml-3 cursor-pointer scale-125 lg:ml-10 lg:scale-150" src={require("../assets/Images/Name.png")} alt="Vijay"/>
                </Link>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="false" className="mr-1">
                  <button type="button" onClick={toggleMenu} className="inline-flex items-center justify-center rounded-md p-2">
                    <MdClose className="h-6 w-6 text-white" aria-hidden="true"/>
                  </button>
                </div>
              </div>
              <nav data-aos="zoom-in-down" data-aos-duration="1000" data-aos-once="false" className="flex flex-col gap-y-7 text-2xl my-3">
                {
                  links.map((item)=>{
                    return (
                      <Link onClick={() => setIsMenuOpen(false)} spy={true} smooth={true} offset={-100} duration={750} to={item.link} className="cursor-pointer hover:text-dark-orange">
                        {item.title}
                      </Link>                      
                    )
                  })
                }
                <a href="https://drive.google.com/drive/u/1/folders/1VLbE3u0gC3x66ClPWCUmcK75DuhTAyKx" target="_blank" rel="noreferrer">
                  <button onClick={() => setIsMenuOpen(false)} className="font-medium text-white bg-dark-orange py-2 px-4 focus:outline-none  hover:text-dark-orange hover:bg-white rounded-xl text-lg">
                    Resume
                  </button>
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;