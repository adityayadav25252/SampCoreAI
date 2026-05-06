import React, { useState, useEffect } from "react";
import { ArrowRight, Activity, Heart, Shield, Sparkles } from "lucide-react";

const ProjectCard = ({ title, subtitle, description, features, logo, type }) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div
      className="relative w-fit group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div
        className="relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 transition-all duration-500 ease-out hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)]"
        style={{
          transform: isHovered
            ? `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) translateZ(20px)`
            : "rotateY(0deg) rotateX(0deg) translateZ(0px)",
          transformStyle: "preserve-3d"
        }}
      >

        {/* Shine */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 2}% ${50 + mousePosition.y * 2
              }%, rgba(255,255,255,0.8) 0%, transparent 60%)`
          }}
        />

        {/* Logo */}
        <div className="relative mb-8 text-center">

          <div className="relative w-24 h-24 mx-auto mb-4 group/logo">

            <div className="absolute inset-0 rounded-full border-2 border-dashed border-black/10 animate-spin-slow" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden  shadow-2xl transform transition-transform duration-500 group-hover/logo:scale-110 group-hover/logo:rotate-3">
              <img
                src={logo}
                alt={title}
                className={`w-full h-full object-cover ${type === "service" ? "animate-spin-slow" : ""
                  }`}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/logo:translate-x-full transition-transform duration-1000" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-center text-[#b9643b] tracking-tight">
            {title}
          </h1>

          <p className="text-center text-black/50 text-sm mt-2 font-medium tracking-wide">
            {subtitle}
          </p>

        </div>

        {/* Description */}
        <p className="text-black/60 text-center leading-relaxed text-sm md:text-base mb-8">
          {description}
        </p>

        {/* Features */}
        <div className="mb-8">
          <div className="flex justify-center items-center gap-4 ">

            {features.map((feature, index) => {

              const isActive = activeFeature === index;

              return (
                <div
                  key={index}
                  className={`relative flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-500 cursor-pointer ${isActive
                    ? "bg-[#b9643b] text-white border-black scale-110 shadow-lg"
                    : "bg-white text-black/60 border-black/10 hover:border-black/30"
                    }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <Activity className={`w-4 h-4 ${isActive ? "animate-pulse" : ""}`} />
                  <span className="text-xs font-semibold whitespace-nowrap">
                    {feature}
                  </span>
                </div>
              );

            })}

          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="group/btn relative px-8 py-4 bg-[#1b2b45] text-white rounded-2xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:scale-105">

            <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />

            <Sparkles className="absolute top-2 right-2 w-3 h-3 text-white/50 animate-pulse" />

            <span className="relative flex items-center gap-3">
              Explore Platform
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-2" />
            </span>

          </button>
        </div>

        {/* EKG */}
        {/* Bottom Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">

            {type === "health" && (
              <path
                d="M0,24 L20,24 L30,10 L40,38 L50,24 L70,24 L80,5 L90,43 L100,24 L120,24 L130,15 L140,33 L150,24 L1000,24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                className="animate-ekg"
              />
            )}

            {type === "service" && (
              <path
                d="M0,24 Q50,10 100,24 T200,24 T300,24 T400,24 T500,24 T1000,24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                className="animate-service"
              />
            )}

          </svg>
        </div>

      </div>

      {/* Shadow */}
      <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/10 blur-2xl rounded-full" />

      <style jsx>{`

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ekg {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes service-flow {
  0% { stroke-dashoffset: 600; }
  100% { stroke-dashoffset: 0; }
}

.animate-service {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: service-flow 4s linear infinite;
}
        .animate-ekg {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: ekg 3s linear infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

      `}</style>

    </div>
  );
};

export default ProjectCard;