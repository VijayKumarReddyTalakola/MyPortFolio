import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';
import {motion} from 'framer-motion'

const Profile = () => {
  return (
    <section className="text-gray-600 body-font pt-16 md:pt-16 ">
      <div className="p-5 pt-7 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: 100 }}
          transition={{ duration: 0.7 }}
          className="w-5/6 md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 "
        >
          <img
            className="object-cover border-2 border-white cursor-pointer rounded-full md:hover:scale-110 transition duration-1000 ease-in-out"
            alt="hero"
            src={require("../assets/Images/Me.jpg")}
          />
        </motion.div>
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center">
          <div className="flex gap-5 my-4">
            <motion.a
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-white text-2xl md:text-xl hover:scale-125"
              href="https://github.com/VijayKumarReddyTalakola"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-white text-2xl md:text-xl hover:scale-125"
              href="https://www.linkedin.com/in/talakola-vijay-kumar-reddy-1b5028231/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-white text-2xl md:text-xl hover:scale-125"
              href="https://discord.com/channels/@me"
              rel="noreferrer"
              target="_blank"
            >
              <FaDiscord />
            </motion.a>
          </div>
          <motion.h2
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.7 }}
            className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-white"
          >
            Hello , I am <span className="text-dark-orange">Vijay Kumar</span>
          </motion.h2>
          <div className="text-3xl text-white mb-4 font-medium lg:inline-block">
            <span className="text-darkblue">{"_"}</span>
            <Typewriter
              words={["Web Developer", "UI/UX Designer", "Enthusiastic Dev"]}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>
          <p className="mb-2 text-white text-lg md:text-xl leading-relaxed">
            Knack of building front-end applications using MERN stack.
          </p>
          <p className="text-lg text-white md:text-xl">
            I enjoy designing tech websites.
          </p>
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-7 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
          >
            <button className="inline-flex font-medium text-white bg-black border-2 border-white py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
              >
                Hire Me
              </Link>
            </button>
            <a
              href="https://drive.google.com/drive/u/1/folders/1VLbE3u0gC3x66ClPWCUmcK75DuhTAyKx"
              target="_blank"
              rel="noreferrer"
            >
              <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                Get Resume
              </button>
            </a>
          </motion.div>
        </div>
      </div>
      <div className="mt-3 md:mt-5 lg:mt-9">
        <img src={require("../assets/Images/wave.png")} alt="Vijay" />
      </div>
    </section>
  );
}

export default Profile