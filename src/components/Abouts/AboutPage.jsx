import { useEffect, useRef, useLayoutEffect } from 'react';
import {
  ArrowRight, CheckCircle, Globe, Smartphone, Shield,
  Brain, GraduationCap, Users, Target, Eye, Award,
  Star, Zap, Code, Sparkles, ChevronRight, Infinity,
  Cpu, Network, Database, Lock, Cloud, Gauge
} from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { gsap } from "gsap";
import ExpertiseSection from "../Abouts/ExpertiseSection";
import JeevanDevLogo from '../Home/JeevanDevLogo';

const AboutPage = () => {
  const sectionRefs = useRef([]);
  const parallaxRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Parallax effect
    const handleParallax = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        parallaxRef.current.style.transform = `translate3d(0, ${rate * 0.1}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  const journey = [
    { year: "2019", title: "Founded", desc: "Started with a vision to transform digital landscapes", icon: Star },
    { year: "2021", title: "Global Expansion", desc: "Opened offices in 3 countries, serving 50+ clients", icon: Globe },
    { year: "2023", title: "Innovation Hub", desc: "Launched R&D center for emerging technologies", icon: Cpu },
    { year: "2024", title: "Excellence Award", desc: "Recognized as top tech solutions provider", icon: Award }
  ];

  const values = [
    {
      title: "Innovation First",
      desc: "Pushing boundaries with cutting-edge technology",
      icon: Zap
    },
    {
      title: "Quality Assured",
      desc: "Enterprise-grade standards in every project",
      icon: Shield
    },
    {
      title: "Client Success",
      desc: "Partnership-driven approach to growth",
      icon: Users
    },
    {
      title: "Knowledge Sharing",
      desc: "Empowering through education and mentorship",
      icon: GraduationCap
    }
  ];

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
      const titleChars = titleRef.current?.querySelectorAll('.char');
      if (titleChars) {
        gsap.fromTo(
          titleChars,
          { y: 100, opacity: 0, rotateX: -90 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.03, ease: "power4.out", delay: 0.5 }
        );
      }

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

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: Code },
    { number: "98%", label: "Client Retention", icon: Users },
    { number: "8+", label: "Years Excellence", icon: Award },
    { number: "24/7", label: "Premium Support", icon: Gauge }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div 
        ref={parallaxRef}
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
            radial-gradient(circle, rgba(0,0,0,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 20px 20px'
        }}
      ></div>

      {/* Animated Gradient Orbs - Hidden on mobile for performance */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden hidden md:block">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section ref={heroRef} className="text-center relative mt-24 sm:mt-28 md:mt-32 px-4 sm:px-6">
          <h1 
            ref={titleRef} 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tighter mb-4 sm:mb-6 md:mb-8"
            style={{ perspective: '1000px' }}
          >
            <span className="block text-[#1b2b45]">{splitText("Transforming")}</span>
            <span className="block overflow-hidden text-transparent stroke-text" 
              style={{ WebkitTextStroke: '2px #b16848', color: 'transparent' }}>
              {splitText("Ideas into")}
            </span>
            <span className="block text-[#1b2b45]">{splitText("Digital Reality")}</span>
          </h1>

          <p className="hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-2 sm:px-4">
            A premier technology solutions provider specializing in building cutting-edge
            digital experiences that define the future.
          </p>
        </section>

        {/* Mission & Vision with 3D Effect */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {[
                { icon: Target, title: "Our Mission", desc: "To empower businesses and individuals with innovative technology solutions while cultivating the next generation of tech leaders through comprehensive training.", features: ["Empowering innovation", "Developing future leaders"] },
                { icon: Eye, title: "Our Vision", desc: "To become a global leader in technology solutions and education, creating a world where technology is accessible and understandable to everyone.", features: ["Global leadership", "Technology for all"] }
              ].map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index + 10] = el)}
                  className="opacity-0 translate-y-8 scale-95 transition-all duration-1000 group"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-[#b16848] hover:border-black transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
                    
                    <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-[#b16848] text-white rounded-2xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8 relative z-10 group-hover:rotate-12 transition-transform duration-500">
                      <item.icon size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 relative z-10">{item.title}</h2>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 relative z-10">
                      {item.desc}
                    </p>

                    <div className="space-y-2 sm:space-y-3 relative z-10">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <div className="w-5 sm:w-6 h-5 sm:h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle size={12} className="sm:w-3.5 sm:h-3.5 text-gray-700" />
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ExpertiseSection />
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
              Our <span className="text-[#b16848]">Core Values</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index + 20] = el)}
                  className="opacity-0 translate-y-8 transition-all duration-1000 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-[#b16848] hover:shadow-xl transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-[#b16848]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#b16848] group-hover:text-white transition-all duration-300">
                    <value.icon className="w-6 sm:w-7 h-6 sm:h-7 text-[#b16848] group-hover:text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index + 30] = el)}
                  className="opacity-0 translate-y-8 transition-all duration-1000 text-center"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <stat.icon className="w-8 sm:w-10 h-8 sm:h-10 text-[#b16848]" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2b45]">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Parallax */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-[#1b2b45] transform -skew-y-2 sm:-skew-y-3 scale-110"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 px-2">
              Let's collaborate and bring your vision to life with cutting-edge technology.
            </p>
            <button className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 text-sm sm:text-base">
              <span className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" size={18} />
            </button>
          </div>
        </section>

        <JeevanDevLogo />
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .stroke-text {
          -webkit-text-stroke: 2px black;
          color: transparent;
          transition: all 0.5s ease;
        }
        
        .stroke-text:hover {
          color: black;
          -webkit-text-stroke: 0px;
        }

        /* Mobile responsive stroke text */
        @media (max-width: 640px) {
          .stroke-text {
            -webkit-text-stroke: 1.5px #b16848;
          }
        }

        @media (max-width: 480px) {
          .stroke-text {
            -webkit-text-stroke: 1px #b16848;
          }
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .perspective {
          perspective: 1000px;
        }

        /* Better text rendering */
        .char {
          display: inline-block;
          white-space: pre;
        }

        /* Prevent horizontal scroll */
        * {
          max-width: 100%;
          box-sizing: border-box;
        }

        /* Better touch targets on mobile */
        button, 
        .cursor-pointer {
          min-height: 44px;
          min-width: 44px;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;