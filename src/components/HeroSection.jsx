import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import DotBackground from "../components/Home/DotBackground";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section 
      onMouseMove={(e) => {
        document.dispatchEvent(new CustomEvent("dot-move", {
          detail: { x: e.clientX, y: e.clientY }
        }));
      }}
      className="relative min-h-screen flex items-center justify-center text-center bg-transparent text-black px-4 sm:px-6 md:px-8"
    >
      <DotBackground />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto py-8 sm:py-12 md:py-16">
        {/* Badge */}
        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 text-[10px] sm:text-xs font-medium tracking-widest uppercase bg-[#b9643b] text-white rounded-full">
          Welcome to the Future
        </span>

        {/* Title */}
        <h1 className="fantasy text-[#1b2c46] leading-[1.1] mb-4 sm:mb-6 text-[clamp(2rem,7vw,5rem)]">
          WE BUILD{" "}
          <span 
            className="text-transparent stroke-text inline-block" 
            style={{ 
              WebkitTextStroke: isMobile ? "1px #b9643b" : "2px #b9643b", 
              color: "transparent" 
            }}
          >
            {splitText("DIGITAL EXCELLENCE")}
          </span>{" "}
          THAT INSPIRES
        </h1>

        {/* Subtitle */}
        <p className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2">
          Transforming ideas into powerful digital experiences with cutting-edge technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 px-2">
          <button className="w-full sm:w-auto px-6 sm:px-10 md:px-13 py-3 sm:py-4 text-xs sm:text-sm font-bold bg-[#b9643b] text-white rounded-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105">
            EXPLORE OUR WORK →
          </button>

          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold border-2 border-[#b9643b] rounded-lg hover:bg-black hover:text-white transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            START YOUR PROJECT
            <FontAwesomeIcon icon={faPaperPlane} className="text-sm sm:text-base" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;