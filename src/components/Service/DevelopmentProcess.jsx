import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Lottie from 'lottie-react';
import {
  Search, PenTool, Code2, Rocket, ChevronRight,
  Zap, Layers, Cpu, Database, Cloud, Smartphone,
  GitBranch, Bot, Workflow, Boxes, Network, MemoryStick
} from 'lucide-react';

// Custom hook for scroll-triggered animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return { ref, isInView };
};

// Process Step Component with Lottie-style animations using Framer Motion
const ProcessStep = ({ step, index, isLast }) => {
  const { ref, isInView } = useScrollAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const icons = [Search, PenTool, Code2, Rocket];
  const Icon = icons[index];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex items-start gap-8 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline Line */}
      {!isLast && (
        <motion.div
          className="absolute left-[28px] top-[80px] w-[2px] bg-neutral-800"
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
          style={{ height: "calc(100% - 80px)" }}
        />
      )}

      {/* Animated Icon Container */}
      <motion.div
        className="relative z-10 flex-shrink-0"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-14 h-14 rounded-full bg-white border-2 border-black flex items-center justify-center relative overflow-hidden">
          {/* Animated fill effect */}
          <motion.div
            className="absolute inset-0 bg-[#b9643b]"
            initial={{ y: "100%" }}
            animate={isHovered ? { y: "0%" } : { y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          <Icon
            className={`w-6 h-6 relative z-10 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-black'}`}
          />
        </div>

        {/* Pulse animation ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-black"
          animate={isInView ? {
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5]
          } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
        />
      </motion.div>

      {/* Content Card */}
      <motion.div
        className="flex-1 pb-16"
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="bg-neutral-50 border border-neutral-200 p-8 rounded-none relative overflow-hidden group-hover:border-black transition-colors duration-300">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#b9643b]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#b9643b]" />

          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#b9643b]">
              Step 0{index + 1}
            </span>
            <motion.div
              className="h-[1px] bg-black flex-1 origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            />
          </div>

          <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 text-black">
            {step.title}
          </h3>

          <p className="text-neutral-600 leading-relaxed font-light">
            {step.description}
          </p>

          {/* Animated underline */}
          <motion.div
            className="h-[2px] bg-black mt-6 origin-left"
            initial={{ scaleX: 0 }}
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Tech Stack Item with 3D tilt effect
const TechItem = ({ tech, index }) => {
  const { ref, isInView } = useScrollAnimation();

  const techIcons = {
    // === Original Stack ===
    'HTML5/CSS3': Layers,
    'JavaScript': Zap,
    'React.js': Cpu,
    'Node.js': Database,
    'Python': Code2,
    'MongoDB': Database,
    'AWS/Azure': Cloud,
    'Android/iOS': Smartphone,

    // === AI Agent Layer (New) ===
    'LangChain': GitBranch,    // agent orchestration
    'LangGraph': Network,      // multi-agent graph flows
    'AutoGen': Bot,          // Microsoft multi-agent
    'CrewAI': Boxes,        // role-based agent crews
    'OpenAI API': Cpu,          // GPT-4o / function calling
    'Claude API': Cpu,          // Anthropic backbone
    'Vector DB': Database,     // Pinecone / Qdrant
    'RAG Pipeline': Search,       // retrieval-augmented gen
    'Tool Use/MCP': Workflow,     // agent tool-calling
    'n8n / Make': Workflow,     // no-code automation
    'FastAPI': Rocket,       // Python agent API
    'Redis/Queues': MemoryStick,  // async memory & queues
  };

  const Icon = techIcons[tech] || Code2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateX: -90 }}
      animate={isInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -90 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 50
      }}
      className="perspective-1000"
    >
      <div className="bg-white border border-neutral-300 p-6 flex flex-col items-center gap-3 hover:border-[#b9643b] hover:shadow-[4px_4px_0px_0px_rgba(185,100,59,1)] transition-all duration-300 cursor-pointer group">
        <Icon className="w-8 h-8 text-neutral-400 group-hover:text-black transition-colors duration-300" />
        <span className="text-sm font-mono uppercase tracking-wider text-center group-hover:font-bold transition-all duration-300">
          {tech}
        </span>
      </div>
    </motion.div>
  );
};

// Main Component
const DevelopmentProcess = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const processSteps = [
    {
      title: "Discovery & Analysis",
      description: "We begin by understanding your business goals, target audience, and technical requirements through comprehensive discussions and research."
    },
    {
      title: "Planning & Design",
      description: "Our team creates detailed project plans, wireframes, and design mockups for your approval before starting development."
    },
    {
      title: "Development",
      description: "Using agile methodologies, we develop your solution with regular updates and opportunities for feedback at every stage."
    },
    {
      title: "Testing & Deployment",
      description: "Rigorous testing across devices and platforms ensures quality, followed by smooth deployment and launch."
    }
  ];

 const technologies = [
  "HTML5/CSS3", "JavaScript", "React.js", "Node.js",
  "Python", "MongoDB", "AWS/Azure", "Android/iOS",
  // AI Agent layer
   "AutoGen", 
    "RAG Pipeline",
  "Tool Use/MCP", "FastAPI"
];

  return (
    <section ref={containerRef} className="relative  min-h-screen overflow-hidden">
      

      <div className="relative z-10 max-w-6xl mx-auto px-6   lg:py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center "
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 "
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >

           <span className="text-4xl py-3 mb-10 font-mono uppercase tracking-[0.3em] text-black font-bold border-b-4 border-t-4 border-[#b9643b]">
  How We Work
</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black  uppercase tracking-tighter mb-6 text-black">
            Our Development<br />
            <span className="relative inline-block">
              Process
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.path
                  d="M0,6 Q50,0 100,6 T200,6"
                  fill="none"
                  stroke="#b9643b"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
              </motion.svg>
            </span>
          </h2>

          <p className="text-lg text-black  max-w-2xl mx-auto font-normal leading-relaxed">
            A Structured Approach to Excellence. We follow a meticulous development process
            to ensure every project meets the highest standards of quality, performance, and user satisfaction.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="mb-12">
          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center  gap-4 mb-12">
            <motion.div
              className="h-[2px] bg-black flex-1"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
            <h3 className="text-2xl font-bold uppercase tracking-tight text-[#b9643b]">
              Technologies We Use
            </h3>
            <motion.div
              className="h-[2px] bg-black flex-1"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <TechItem key={tech} tech={tech} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative inline-flex items-center gap-3 bg-[#b9643b] text-white px-8 py-4 font-mono uppercase tracking-wider overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 ">More Technologies </span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.span>

            {/* Hover fill effect */}
            <motion.div
              className="absolute inset-0 bg-neutral-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>


    </section>
  );
};

export default DevelopmentProcess;