import { useState, useEffect, useRef } from "react";

const expertiseData = [
  { skill: "React.js", category: "Frontend" },
  { skill: "Next.js", category: "Frontend" },
  { skill: "TypeScript", category: "Frontend" },
  { skill: "UI/UX Design", category: "Frontend" },
  { skill: "Node.js", category: "Backend" },
  { skill: "GraphQL", category: "Backend" },
  { skill: "PostgreSQL", category: "Backend" },
  { skill: "REST APIs", category: "Backend" },
  { skill: "Docker", category: "DevOps" },
  { skill: "AWS Cloud", category: "DevOps" },
  { skill: "CI/CD", category: "DevOps" },
  { skill: "Kubernetes", category: "DevOps" },
];

const categories = ["All", "Frontend", "Backend", "DevOps"];

const quotes = [
  "Building the future, one line of code at a time.",
  "Clean code is not written by following rules. It is written with care.",
  "First, solve the problem. Then, write the code.",
];

export default function ExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [typedQuote, setTypedQuote] = useState("");
  const sectionRef = useRef(null);

  // Scroll visibility trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Staggered card animation on visible
  useEffect(() => {
    if (!isVisible) return;
    setVisibleCards([]);
    filteredSkills.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, i]);
      }, i * 80);
    });
  }, [isVisible]);

  // Reset cards on category change
  useEffect(() => {
    setVisibleCards([]);
    filteredSkills.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, i]);
      }, i * 80);
    });
  }, [activeCategory]);

  // Quote auto-rotate every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const fullText = quotes[quoteIndex];
    setTypedQuote("");
    let i = 0;
    const timer = setInterval(() => {
      setTypedQuote(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [quoteIndex]);

  const filteredSkills =
    activeCategory === "All"
      ? expertiseData
      : expertiseData.filter((e) => e.category === activeCategory);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div
      ref={sectionRef}
      className={`relative border-2 border-[#1a1a1a] bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: "600ms" }}
    >
      {/* Corner Decorations - Responsive sizes */}
      {[
        "absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6",
        "absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6",
        "absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6",
        "absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6",
      ].map((pos, i) => (
        <div key={i} className={`${pos} bg-[#b16848]`} />
      ))}

      {/* Title - Responsive with smaller laptop size */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 tracking-tight text-[#0f0f0f] px-2">
        Our Expertise
      </h2>

      {/* Category Filter - Responsive */}
      <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 mb-6 sm:mb-7 md:mb-8 lg:mb-9 flex-wrap px-1 sm:px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2.5 sm:px-3 md:px-4 lg:px-4 xl:px-5 py-1.5 sm:py-2 border-2 border-[#1a1a1a] font-bold text-[10px] sm:text-xs md:text-sm transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#b16848] text-white"
                : "bg-white text-[#1a1a1a] hover:bg-[#1a1a1a]/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid - Responsive with adjusted laptop sizing */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-3.5 lg:gap-4 max-w-4xl mx-auto px-1 sm:px-2">
        {filteredSkills.map((item, index) => {
          const isSelected = selectedSkills.includes(item.skill);
          const isCardVisible = visibleCards.includes(index);

          return (
            <div
              key={item.skill}
              onClick={() => toggleSkill(item.skill)}
              className={`group relative overflow-hidden border-2 border-[#1a1a1a] p-3 sm:p-3.5 md:p-4 lg:p-4 xl:p-5 text-center font-bold text-xs sm:text-sm md:text-base transition-all duration-300 hover:-translate-y-1 ${
                isSelected ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
              } ${
                isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transition: "opacity 0.4s ease, transform 0.4s ease, background 0.3s" }}
            >
              {/* Fill on hover (only if not selected) */}
              {!isSelected && (
                <div className="absolute inset-0 bg-[#b16848] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              )}
              <span
                className={`relative z-10 ${
                  isSelected ? "text-white" : "text-[#1a1a1a] group-hover:text-white"
                }`}
              >
                {item.skill}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom Quote - Responsive */}
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 pt-4 sm:pt-5 md:pt-6 lg:pt-7 border-t-2 border-[#1a1a1a]/10">
        <blockquote className="text-center min-h-[40px] sm:min-h-[45px] md:min-h-[50px] lg:min-h-[55px]">
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-black italic tracking-tight text-[#0f0f0f] px-3 sm:px-4">
            "{typedQuote}"
            <span className="animate-pulse">|</span>
          </p>
         
        </blockquote>
      </div>
    </div>
  );
}