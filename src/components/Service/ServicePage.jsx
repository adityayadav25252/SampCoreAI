import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Navbar from '../Navbar';
import { detailedServices } from "../ServicesSection";
import { ServiceCard } from "../ServicesSection";
import ExpertiseSection from '../Abouts/ExpertiseSection';
import DevelopmentProcess from '../Service/DevelopmentProcess';
import Footer from '../Footer';
import JeevanDevLogo from '../Home/JeevanDevLogo'


const ServicePage = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  // Split text into characters for animation
  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block" style={{ transformStyle: 'preserve-3d' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const titleChars = titleRef.current.querySelectorAll('.char');
      gsap.fromTo(
        titleChars,
        { y: 100, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.03, ease: "power4.out", delay: 0.5 }
      );

      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100  text-black relative overflow-hidden ">
      {/* Dot Background */}
      <div
        className="fixed inset-0 opacity-80"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="relative z-10 ">
        {/* Hero Section */}
        <Navbar />
        <section ref={heroRef} className="text-center relative pt-35  ">
          <section >
            <span className="inline-block px-4 py-2 mb-2 text-xs font-medium tracking-widest uppercase bg-[#b8643b] text-white rounded-full">
              Welcome to the Severice Page
            </span>

            <h1
              ref={titleRef}
              className="text-6xl md:text-8xl lg:text-8xl mt-5 font-bold leading-[0.9] tracking-tighter mb-8 "
              style={{ perspective: '1000px' }}
            >

           <span
  className="block text-transparent stroke-text"
  style={{ WebkitTextStroke: '2px #b8643b', color: 'transparent' }}
>
  {splitText("Professional ")} {splitText("Technology")}
</span>
              <span className="block  text-[#1b2b45]">{splitText("Services")}</span>
            </h1>

           <p className="max-w-xl mx-auto mb-10 text-xl text-gray-600 leading-relaxed">
          Building cutting-edge websites, apps, and software solutions while empowering businesses with expert services
        </p>

            <div className="flex flex-wrap justify-center gap-4">
                <button className="px-13 py-4 text-sm font-bold bg-[#b9643b] text-white rounded-lg hover:bg-gray-800 transition">
            EXPLORE OUR WORK  →
          </button> 

              <button className="px-8 py-3 text-sm font-bold border border-black rounded-lg hover:bg-black hover:text-white transition flex items-center gap-2">
                START YOUR PROJECT
              </button>
            </div>

          </section>

          <section className="relative min-h-screen text-[#1b2b45] overflow-hidden selection:bg-black selection:text-white px-15">
            <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
              <div className="flex flex-col items-center mb-16">
                <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                  SERVICES <span className="text-transparent" style={{ WebkitTextStroke: '2px #b8643b' }}>FEATURES</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {detailedServices.map((service, index) => (
                  <ServiceCard key={index} service={service} index={index} />
                ))}
              </div>
            </div>
          </section>
        </section>
         
          <DevelopmentProcess />
        <JeevanDevLogo />
      </div>

      {/* Global Styles */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px black;
          color: transparent;
          transition: all 0.5s ease;
        }
        
        .stroke-text:hover {
          color: black;
          -webkit-text-stroke: 0px;
        }
      `}</style>
    </div>
  );
};

export default ServicePage;