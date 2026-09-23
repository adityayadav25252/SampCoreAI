import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
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
        document.dispatchEvent(
          new CustomEvent("dot-move", {
            detail: { x: e.clientX, y: e.clientY },
          })
        );
      }}
      className="relative min-h-screen flex items-center justify-center text-center bg-transparent text-black px-4 sm:px-6 md:px-8"
    >
      <DotBackground />

      <div className="relative z-10 w-full max-w-5xl mx-auto py-8 sm:py-12 md:py-16">
        {/* Badge */}
        <span className="inline-block px-4 py-2 mb-6 sm:mb-8 text-xs font-semibold tracking-wide bg-[#b9643b] text-white rounded-full">
          Welcome to the Future
        </span>

        {/* Title */}
        <h1 className="fantasy text-[#1b2c46] leading-[1.1] mb-4 sm:mb-6 text-[clamp(2rem,7vw,5rem)]">
          We Build{" "}
          <span
            className="text-transparent stroke-text inline-block"
            style={{
              WebkitTextStroke: isMobile
                ? "1px #b9643b"
                : "2px #b9643b",
              color: "transparent",
            }}
          >
            {splitText("Digital Excellence")}
          </span>{" "}
          That Inspires
        </h1>

        {/* Subtitle */}
        <p className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2">
          Transforming ideas into powerful digital experiences with
          cutting-edge technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-2">
          <button
            type="button"
            className="w-full sm:w-auto min-w-[210px] px-7 py-3.5 text-sm font-bold bg-[#b9643b] text-white rounded-lg transition-all duration-300 hover:bg-[#1b2c46] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b9643b] focus-visible:ring-offset-2 flex items-center justify-center gap-2"
          >
            Explore Our Work
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-sm"
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            className="w-full sm:w-auto min-w-[210px] px-7 py-3.5 text-sm font-bold border-2 border-[#b9643b] text-[#1b2c46] rounded-lg transition-all duration-300 hover:bg-[#1b2c46] hover:border-[#1b2c46] hover:text-white hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b9643b] focus-visible:ring-offset-2 flex items-center justify-center gap-2"
          >
            Start Your Project
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-sm"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;