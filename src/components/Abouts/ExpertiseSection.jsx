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

const categories = ["Frontend", "Backend", "DevOps"];

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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Staggered card animation on visible
  useEffect(() => {
    if (!isVisible) return;
    filteredSkills.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, i]);
      }, i * 80);
    });
  }, [isVisible, activeCategory]);

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
    }, 4000);
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
    }, 30);
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
      className={`relative border-2 border-[#1a1a1a] bg-white p-12 md:p-8 mt-40 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: "600ms" }}
    >
      {/* Corner Decorations */}
      {["absolute -top-3 -left-3", "absolute -top-3 -right-3", "absolute -bottom-3 -left-3", "absolute -bottom-3 -right-3"].map(
        (pos, i) => (
          <div key={i} className={`${pos} w-6 h-6 bg-[#b16848]`} />
        )
      )}

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-black text-center mb-8 tracking-tight text-[#0f0f0f]">
        Our Expertise
      </h2>

      {/* Category Filter */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 border-2 border-[#1a1a1a] font-bold text-sm transition-all duration-200 ${activeCategory === cat
                ? "bg-[#b16848] text-white"
                : "bg-white text-[#1a1a1a] hover:bg-[#1a1a1a]/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {filteredSkills.map((item, index) => {
          const isSelected = selectedSkills.includes(item.skill);
          const isCardVisible = visibleCards.includes(index);

          return (
            <div
              key={item.skill}
              onClick={() => toggleSkill(item.skill)}
              className={`group relative overflow-hidden border-2 border-[#1a1a1a] p-6 text-center font-bold text-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 ${isSelected ? "bg-[#1a1a1a] text-white" : "bg-white text-[#1a1a1a]"
                } ${isCardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transition: "opacity 0.4s ease, transform 0.4s ease, background 0.3s" }}
            >
              {/* Fill on hover (only if not selected) */}
              {!isSelected && (
                <div className="absolute inset-0 bg-[#b16848] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              )}
              <span
                className={`relative z-10 ${isSelected ? "text-white" : "text-[#1a1a1a] group-hover:text-white"
                  }`}
              >
                {item.skill}
                {isSelected && <span className="ml-2 text-xs">✓</span>}
              </span>
            </div>
          );
        })}
      </div>

      {/* Selected Count */}
      {selectedSkills.length > 0 && (
        <p className="text-center mt-6 text-sm text-[#1a1a1a]/50 font-medium">
          {selectedSkills.length} skill{selectedSkills.length > 1 ? "s" : ""} selected
        </p>
      )}

      {/* Bottom Quote */}
      <div className="mt-16 pt-8 border-t-2 border-[#1a1a1a]/10">
        <blockquote className="text-center min-h-[60px]">
          <p className="text-2xl md:text-3xl font-black italic tracking-tight text-[#0f0f0f]">
            "{typedQuote}"
            <span className="animate-pulse">|</span>
          </p>
          <div className="mt-4 flex justify-center gap-2">
            {quotes.map((_, i) => (
              <div
                key={i}
                onClick={() => setQuoteIndex(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === quoteIndex ? "bg-[#1a1a1a] scale-125" : "bg-[#1a1a1a]/30"
                  }`}
              />
            ))}
          </div>
        </blockquote>
      </div>
    </div>
  );
}