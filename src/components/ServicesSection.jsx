import React, { useState, useEffect, useRef } from "react";

const services = [
  {
    id: "01",
    title: "WEB DEV",
    desc: "Architecting high-performance digital experiences with cutting-edge frameworks and ruthless efficiency.",
  },
  {
    id: "02",
    title: "APP DEV",
    desc: "Native-feeling cross-platform solutions engineered for seamless interaction and robust scalability.",
  },
  {
    id: "03",
    title: "CYBERSEC",
    desc: "Fortifying digital infrastructure against modern threats with proactive defense mechanisms.",
  },
  {
    id: "04",
    title: "AI / ML",
    desc: "Implementing neural networks and intelligent automation to transform raw data into strategic assets.",
  },
];

export const detailedServices = [
  {
    id: "01",
    title: "Custom Solutions",
    desc: "Tailored to your specific business needs and requirements. We don't believe in one-size-fits-all approaches.",
  },
  {
    id: "02",
    title: "Timely Delivery",
    desc: "We respect deadlines and deliver projects on time without compromising on quality or features.",
  },
  {
    id: "03",
    title: "24/7 Support",
    desc: "Round-the-clock technical support and maintenance services for all our solutions.",
  },
  {
    id: "04",
    title: "Quality Assurance",
    desc: "Rigorous testing and quality checks to ensure bug-free and high-performance solutions.",
  },
];

// Custom Hook for scramble effect
const useScramble = (text, isHovering) => {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\_#@&";

  useEffect(() => {
    if (!isHovering) {
      setDisplay(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2; // Speed of decode
    }, 30);

    return () => clearInterval(interval);
  }, [isHovering, text]);

  return display;
};

export const ServiceCard = ({ service, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const scrambledTitle = useScramble(service.title, isHovering);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      className="group relative border rounded-2xl border-black bg-white p-8 flex flex-col justify-between h-[400px] overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg) scale(${isHovering ? 1.02 : 1})`,
        boxShadow: isHovering
          ? "10px 10px 0px 0px #b9643b"
          : "4px 4px 0px 0px #b9643b",
      }}
    >
      {/* Top Section: ID & Icon */}
      <div className="flex justify-between items-start">
        <span className="font-mono text-sm border border-black px-2 py-1 bg-black text-white">
          {service.id}
        </span>

      </div>

      {/* Middle Section: Title & Desc */}
      <div className="mt-8">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter font-mono h-16 flex items-center">
          {scrambledTitle}
        </h2>
        <div className="w-full h-[1px] bg-black mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        <p className="text-gray-600 font-medium leading-relaxed group-hover:text-black transition-colors duration-300">
          {service.desc}
        </p>
      </div>

      {/* Bottom Section: Action */}
      <div className="mt-auto pt-6 flex items-center gap-4 group/btn cursor-pointer">
        <span className="font-mono text-sm font-bold uppercase tracking-widest relative overflow-hidden">
          <span className="block transform group-hover/btn:-translate-y-full transition-transform duration-300">Read More</span>
          <span className="absolute top-0 left-0 block transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300">Read More</span>
        </span>
        <div className="w-8 h-[1px] bg-black group-hover:w-16 transition-all duration-300"></div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen text-black overflow-hidden selection:bg-black selection:text-white  px-15"

    >


      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-4 " >

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10 border-b-2 border-[#b9643b] pb-8 gap-8">
          <div className="max-w-2xl">

            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              <span className="text-[#1b2c46]">OUR</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '2px #b9643b' }}
              >
                SERVICE
              </span>
            </h1>

          </div>
        </div>


        {/* Re-implementing Grid for the specific Card Component above */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Marquee Footer */}


      </div>

      {/* CSS for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;