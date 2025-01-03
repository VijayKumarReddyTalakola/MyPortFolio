import React, { useState, useEffect } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      data-aos="zoom-in"
      data-aos-duration="300"
      data-aos-once="true"
      className={`${
        showButton ? "fixed bottom-3 right-4" : "hidden"
      } bg-dark-orange p-1 rounded-full text-white shadow-lg transition duration-900`}
    >
      <FaCircleArrowUp className="w-6 h-6 lg:w-8 lg:h-8" />
    </button>
  );
};

export default ScrollToTopButton;
