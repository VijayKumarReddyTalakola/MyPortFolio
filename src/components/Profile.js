import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';

const Profile = () => {
  return (
    <section className="text-gray-600 body-font pt-16 md:pt-16 ">
      <div className="p-5 pt-10 mx-auto gap-2 flex flex-col md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        <div className="w-5/6 md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-20 lg:p-5 lg:w-1/4 ">
          <img
            className="object-cover border-2 border-white cursor-pointer rounded-full hover:scale-110 transition duration-1000 ease-in-out"
            alt="hero"
            src={require("../assets/Images/Me.jpg")}
          />
        </div>
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center">
          <div className="flex gap-5 my-4">
            <a className="text-white text-2xl md:text-xl hover:scale-125" href="https://github.com/VijayKumarReddyTalakola" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a className="text-white text-2xl md:text-xl hover:scale-125" href="https://www.linkedin.com/in/talakola-vijay-kumar-reddy-1b5028231/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a className="text-white text-2xl md:text-xl hover:scale-125" href="https://discord.com/channels/@me" rel="noreferrer" target="_blank"><FaDiscord /></a>
          </div>
          <h2 className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-white">
            Hello , I am  <span className='text-dark-orange'>Vijay Kumar</span>
          </h2>
          <div className="text-3xl text-white mb-4 font-medium lg:inline-block">
            <span className='text-darkblue'>{"_"}</span>
            <Typewriter words={['Web Developer','UI/UX Designer','Enthusiastic Dev']} loop={false} typeSpeed={100} deleteSpeed={100} delaySpeed={1000}/>
          </div>
          <p className="mb-2 text-white text-lg md:text-xl leading-relaxed">
            Knack of building front-end applications using MERN stack.
          </p>
          <p className="text-lg text-white md:text-xl">I enjoy designing tech websites.</p>
          <div className="mt-7 flex gap-x-5 justify-center">
            <button className="inline-flex font-medium text-white bg-black border-2 border-white py-3 px-10 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md">
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={750}>
                Hire Me
              </Link>
            </button>
            <a href="https://drive.google.com/file/d/1VDFZqQAfik85oeIKQh5IqwyrDFaIqyVd/view?usp=sharing" target='_blank' rel='noreferrer' >
              <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-10 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:flex mt-5 md:mt-0 lg:mt-7">
        <img src={require('../assets/Images/wave.png')} alt="Vijay" />
      </div>
    </section>
  );
}

export default Profile