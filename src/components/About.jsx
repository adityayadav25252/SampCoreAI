import React, { useState, useEffect } from "react";
import ExpertiseSection from "./Abouts/ExpertiseSection";

const AboutDevCube = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const expertise = [
    "Web Development",
    "App Development",
    "Cybersecurity",
    "AI/ML Solutions",
    "Tech Training",
    "Consulting",
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white overflow-hidden">
      {/* Animated Background Grid - Using softer black */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]">
              <span className="text-[#1b2c46]">ABOUT</span>
              <span
                className="text-transparent inline-block ml-2 sm:ml-3"
                style={{ 
                  WebkitTextStroke: window.innerWidth < 640 ? '1.5px #b9643b' : '2px #b9643b',
                  color: 'transparent'
                }}
              >
                US
              </span>
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#4a4a4a] max-w-2xl mx-auto font-light tracking-wide px-4 sm:px-0">
            Transforming Ideas into Digital Reality
          </p>
          <div className="mt-4 sm:mt-6 flex justify-center">
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#1a1a1a] rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <section className="mb-20 sm:mb-24 md:mb-28 lg:mb-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-16 relative z-10">
            {[{
              title: "Our Mission",
              text: "To empower businesses and individuals with innovative technology solutions while cultivating the next generation of tech leaders through education and mentorship programs.",
              delay: "150ms",
            }, {
              title: "Our Vision",
              text: "Creating a world where technology is accessible, understandable, and empowering for everyone, regardless of background or expertise.",
              delay: "300ms",
            }].map((item, idx) => (
              <div
                key={idx}
                className={`group relative p-6 sm:p-8 md:p-10 lg:p-12 border border-black/60 bg-white/80 backdrop-blur-sm
                  shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] 
                  hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.15)] 
                  transition-all duration-700 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <span className="border-line top"></span>
                  <span className="border-line right"></span>
                  <span className="border-line bottom"></span>
                  <span className="border-line left"></span>
                </div>

                <div className="relative z-10">
                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mb-4 sm:mb-5 md:mb-6 tracking-tight text-black group-hover:tracking-wide transition-all duration-700">
                    {item.title}
                  </h2>

                  {/* Text */}
                  <p className="text-sm sm:text-base md:text-lg text-black/60 leading-[1.8] sm:leading-[2] font-light group-hover:text-black/80 transition-colors duration-500">
                    {item.text}
                  </p>

                  {/* Progress line */}
                  <div className="mt-6 sm:mt-7 md:mt-8 relative h-[2px] w-full bg-[#b9643b]/20 overflow-hidden rounded-full">
                    <div className="absolute inset-y-0 left-0 w-0 bg-[#b9643b] group-hover:w-full transition-all duration-1000 ease-out" />
                    <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-[#b9643b]/50 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                  </div>

                  {/* Bottom */}
                  <div className="mt-4 sm:mt-5 md:mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-black/30 group-hover:text-black/60 transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                      <span className="font-medium tracking-wide uppercase text-[8px] sm:text-[10px]">Read more</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>

                    <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black/20"></div>
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black/40"></div>
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black/60"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Inline CSS */}
          <style jsx>{`
            @keyframes shimmer {
              0% { left: -100%; }
              100% { left: 200%; }
            }

            .border-line {
              position: absolute;
              background: #b9643b;
              transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .border-line.top {
              height: 2px;
              width: 0;
              top: 0;
              left: 0;
            }

            .border-line.right {
              width: 2px;
              height: 0;
              top: 0;
              right: 0;
              transition-delay: 0.15s;
            }

            .border-line.bottom {
              height: 2px;
              width: 0;
              bottom: 0;
              right: 0;
              transition-delay: 0.3s;
            }

            .border-line.left {
              width: 2px;
              height: 0;
              bottom: 0;
              left: 0;
              transition-delay: 0.45s;
            }

            .group:hover .border-line.top {
              width: 100%;
            }

            .group:hover .border-line.right {
              height: 100%;
            }

            .group:hover .border-line.bottom {
              width: 100%;
            }

            .group:hover .border-line.left {
              height: 100%;
            }

            /* Mobile touch support */
            @media (max-width: 640px) {
              .border-line {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              }
              
              .group:active .border-line.top,
              .group:active .border-line.bottom {
                width: 100%;
              }
              
              .group:active .border-line.right,
              .group:active .border-line.left {
                height: 100%;
              }
            }

            /* Reduced motion preference */
            @media (prefers-reduced-motion: reduce) {
              .group:hover .border-line,
              .group:active .border-line {
                transition: none;
              }
              
              .group:hover .border-line.top,
              .group:active .border-line.top,
              .group:hover .border-line.bottom,
              .group:active .border-line.bottom {
                width: 100%;
              }
              
              .group:hover .border-line.right,
              .group:active .border-line.right,
              .group:hover .border-line.left,
              .group:active .border-line.left {
                height: 100%;
              }
            }
          `}</style>
        </section>

        {/* Expertise Section - Unchanged but make sure it's responsive */}
        <ExpertiseSection />
      </div>
    </div>
  );
};

export default AboutDevCube;



//  <section className="py-20">
//           <div className="grid md:grid-cols-2 gap-8">

//             {[
//               {
//                 title: "Our Mission",
//                 text: "To empower businesses and individuals with innovative technology solutions while cultivating the next generation of tech leaders through education and mentorship programs.",
//                 icon: <FaBullseye />,
//                 bg: "#1b2c46",
//               },
//               {
//                 title: "Our Vision",
//                 text: "Creating a world where technology is accessible, understandable, and empowering for everyone, regardless of background or expertise.",
//                 icon: <FaEye />,
//                 bg: "#b9643b",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
//               >

//                 {/* Icon */}
//                 <div
//                   className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-4xl shadow-md"
//                   style={{ background: item.bg }}
//                 >
//                   {item.icon}
//                 </div>

//                 {/* Heading */}
//                 <h2 className="mt-7 text-4xl font-bold text-[#1b2c46]">
//                   {item.title}
//                 </h2>

//                 {/* Orange Line */}
//                 <div className="w-16 h-1 bg-[#b9643b] rounded-full mt-4 mb-6"></div>

//                 {/* Text */}
//                 <p className="text-gray-600 leading-8 text-lg">
//                   {item.text}
//                 </p>

//                 {/* Learn More */}
//                 <button className="mt-10 flex items-center gap-3 font-semibold text-[#b9643b] group-hover:gap-5 transition-all">
//                   Learn More
//                   <FaArrowRight />
//                 </button>

//                 {/* Dots */}
//                 <div className="absolute right-6 bottom-6 grid grid-cols-5 gap-2 opacity-20">
//                   {[...Array(25)].map((_, i) => (
//                     <span
//                       key={i}
//                       className="w-1.5 h-1.5 rounded-full bg-[#b9643b]"
//                     />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>