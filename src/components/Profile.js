import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section
      id="home"
      className="text-gray-600 bg-darkblue body-font pt-16 lg:min-h-75vh"
    >
      <div className="p-5 mx-auto gap-2 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 "
        >
          <img
            className="object-cover object-center bg-[#b9aeb6] border-2 border-white pointer-events-none rounded-full backdrop-contrast-200 backdrop-brightness-200"
            alt={ProfileData.name}
            src={ProfileData.img}
          />
        </div>
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center xl:scale-105">
          <SocialHandles />
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-white"
          >
            Hello , I am{" "}
            <span className="text-dark-orange">{ProfileData.name}</span>
          </h2>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-3xl text-white mb-4 font-medium lg:inline-block"
          >
            &nbsp;
            <Typewriter
              words={ProfileData.professions}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>
          {ProfileData.info?.map((item, index) => (
            <p
              key={index}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="false"
              className="mb-2 text-white text-lg md:text-xl leading-relaxed"
            >
              {item}
            </p>
          ))}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="mt-4 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
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
            <a href={ProfileData.resume} target="_blank" rel="noreferrer">
              <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Profile;
