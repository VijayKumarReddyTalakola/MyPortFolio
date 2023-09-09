import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm( "service_9inzcz7", "template_lg8ahdf", formRef.current, "_8hE7B_7PzOSTxPxm" )
      .then(
        (result) => {
          toast.success("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Unable to send message!");
        }
      );
  };

  return (
    <section className="text-gray-600 body-font ">
      <div className="p-5 mx-auto text-center md:mt-5 md:mx-16 lg:mx-32 xl:mx-56">
        <div  className="flex flex-col text-center w-full mb-4 ">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            Contact Me
          </h1>
        </div>
        <div id="contact" className="flex flex-col gap-2 md:flex-row w-full mx-auto rounded-xl bg-darkblue p-4 md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10">
          <div className="p-2 w-full text-center lg:p-5 xl:p-7 md:w-1/2 lg:w-4/6">
            <h1 data-aos="zoom-in-down" data-aos-duration="1000" data-aos-once="false" className="hidden md:block text-2xl lg:text-3xl text-dark-orange mb-3 md:mb-4">
              Get In Touch
            </h1>
            <div data-aos="zoom-in-down" data-aos-duration="1000" data-aos-once="false" className="flex gap-5 mb-4 justify-center md:mb-5">
              <SocialHandles/>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5">
              <FaPhoneAlt className="text-white lg:text-base" />
              <p className="text-white md:text-lg ">+91 9515643851</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5">
              <FaEnvelope className="text-white lg:text-base" />
              <a href="mailto:talakolavijaykumar@gmail.com" className="text-white md:text-lg">talakolavijaykumar@gmail.com</a>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" className="flex gap-3 md:gap-2 lg:gap-5">
              <FaMapMarkerAlt className="text-white text-3xl sm:text-2xl" />
              <a href="https://goo.gl/maps/2ZrHxjNjvwuwenXq6" target="_blank" rel="noreferrer" className="leading-normal text-start text-white md:text-lg">4-126 ,Mallavaram, PedaPalakaluru , Guntur, Andhra Pradesh , India - 522005.</a>
            </div>
          </div>
          <form data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" ref={formRef} onSubmit={handleSubmit} className="flex bg-whitesmoke flex-col p-2 rounded-lg md:w-1/2 md:p-4 lg:px-5 lg:py-7 lg:m-4 lg:w-3/5">
            <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="p-2 w-full">
              <input required placeholder="Name" type="text" name="user_name" className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="p-2 w-full">
              <input required placeholder="Email" type="email" name="user_email" className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="p-2 w-full">
              <textarea required placeholder="Message" name="message" className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black p-2 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1500" data-aos-once="false" className="p-2 w-full">
              <button className=" font-medium mx-auto my-3 text-white bg-dark-orange border-0 py-2 px-12 focus:outline-none hover:scale-110 hover:bg-orange-600 transition duration-500 rounded-xl text-lg">
                Send
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;