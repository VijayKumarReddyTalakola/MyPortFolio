import React from 'react'
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div id="about" className="p-5 mt-5 mx-auto md:mt-3 md:mx-10 lg:mx-32">
        <div className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">About Me</h1>
          <p className="text-lg mx-auto leading-relaxed font-medium text-gray-500 text-center">Why hire me ?</p>
        </div>
        <div className="mx-auto flex lg:flex-row flex-col items-center justify-center">
          <div className="lg:max-w-lg lg:w-3/5 md:w-2/3 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={require('../assets/Images/about.avif')}
            />
          </div>
          <div className="lg:w-3/5 justify-center lg:px-7 lg:py-7 xl:px-10 xl:py-16 md:p-5 flex flex-col items-center  text-left">
            <p className="text-lg leading-relaxed">
              A passionate and dedicated web developer with a strong background in creating visually stunning and highly functional websites with 2 years of experience in the field.<br/><br/>Throughout my career, I have developed proficiency in various web technologies including HTML5, CSS3, JavaScript. I am well-versed in popular frameworks and libraries such as React,Tailwind and Bootstrap allowing me to build robust and responsive websites.<br/><br/> I'm excited to take on new challenges and contribute to innovative projects. Feel free to connect with me through my social media links. 
            </p>
            <div className="mt-7 flex gap-x-5 justify-center text-center">
              <button className="inline-flex font-medium text-white bg-black border-2 border-white py-3 px-10 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                  Hire Me
                </Link>
              </button>
              <a href="Resume.pdf" download="Vijay Kumar.pdf">
                <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-10 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About