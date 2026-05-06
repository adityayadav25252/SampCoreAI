import React from "react";
import Navbar from "../Navbar";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJsonwebtokens,
  SiVercel,
  SiPostgresql,
  SiRedis,
  SiDocker
} from "react-icons/si";


import { FaAws } from "react-icons/fa";

import AnimatedSection from "./AnimatedSection";
import TechTag from "./TechTag";
import ProcessStep from "./ProcessStep";
import ProjectCard from "./OwnProjectCard";
import MainPage from "./MainPage";
import JeevanDevLogo from "../Home/JeevanDevLogo";

const ProjectsPage = () => {

  const projects = [
    {
      title: "Apna Ideal",
      tagline: "Educational Platform • Live",
      link: "https://apnaideal.com",
      problem:
        "Students and young professionals struggled to find structured high-quality learning resources for tech careers.",
      solution:
        "We built Apna Ideal — a curated tech learning platform with a minimalist interface and smart content categories.",
      prototype: "Explore the live platform and experience the learning flow firsthand.",
      stats: {
        users: "200+",
        label: "Active Learners"
      },
      resources: [
        { title: "View Case Study" },
        { title: "Read Documentation" }
      ],
      process: [
        { title: "Discovery & Research", desc: "User interviews and market analysis" },
        { title: "Design", desc: "Wireframes and UX flow in Figma" },
        { title: "Development", desc: "React + Node full-stack build" },
        { title: "Testing", desc: "Quality assurance before launch" }
      ],
      tech: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "JWT", icon: <SiJsonwebtokens /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Figma", icon: <FaFigma /> }
      ]
    },

    {
      title: "Jira Utility",
      tagline: "Automation Tool • Private Beta",
      link: null,
      problem:
        "A software agency struggled with repetitive role assignment tasks in Jira. Admins spent around 8 hours weekly manually configuring roles and permissions.",
      solution:
        "We developed a custom Jira Utility add-on that automates role assignment and synchronizes project permissions using templates.",
      prototype: "Currently in private beta — contact us to request access.",
      stats: {
        users: "8hrs",
        label: "Saved Per Week"
      },
      resources: [
        { title: "Request Access" },
        { title: "View Demo" }
      ],
      process: [
        { title: "Analysis", desc: "Mapped Jira permission schemes with admins" },
        { title: "Design", desc: "Created template configuration UI" },
        { title: "Development", desc: "Node backend using Jira REST API and webhooks" },
        { title: "Testing", desc: "Sandbox testing with mock Jira projects" },
        { title: "Rollout", desc: "Phased deployment with training sessions" }
      ],
      tech: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "AWS", icon: <FaAws /> }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      <div
        className="fixed inset-0 opacity-80"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className="relative z-10">
        <Navbar />

        <MainPage />
        <main className="max-w-7xl mx-auto px-6 py-20">

          {/* Page Title */}
          <AnimatedSection className="text-center mb-10 mt-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-[#b9643b]">
              Client Projects
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto font-bold">
              Real problems, tailored solutions — from discovery to deployment.
            </p>
          </AnimatedSection>



          {/* Projects Loop */}
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <section className="border border-gray-200 rounded-2xl p-8 md:p-12 bg-white shadow-sm mb-16 hover:border-gray-400 transition">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">

                  <div>
                    <h2 className="text-3xl text-[#b9643b] md:text-4xl font-bold mb-2">
                      {project.title}
                    </h2>

                    <p className="text-gray-500 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      {project.tagline}
                    </p>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
                    >
                      Visit Platform
                    </a>
                  )}

                </div>

                {/* Grid */}
                <div className="grid lg:grid-cols-2 gap-12">

                  {/* LEFT SIDE */}
                  <div className="space-y-10">

                    {/* Problem */}
                    <div>
                      <h3 className="text-xl text-[#b9643b] font-bold mb-3">
                        Client Problem
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-xl text-[#b9643b] font-bold mb-3">
                        Our Solution
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Process */}
                    <div>
                      <h3 className="text-xl text-[#b9643b] font-bold mb-6">
                        Process
                      </h3>

                      {project.process.map((step, i) => (
                        <ProcessStep
                          key={i}
                          number={i + 1}
                          title={step.title}
                          description={step.desc}
                          delay={i * 200}
                          isLast={i === project.process.length - 1}
                        />
                      ))}

                    </div>

                  </div>

                  {/* RIGHT SIDE */}
                  <div>

                    <h3 className="text-lg font-bold  text-[#b9643b] mb-4 uppercase tracking-wider text-sm">
                      Tech Stack
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

                      {project.tech.map((tech, i) => (
                        <TechTag
                          key={i}
                          tech={tech}
                          delay={i * 80}
                        />
                      ))}

                    </div>
                    {/* Prototype */}
                    {/* Prototype */}
                    <div className="mt-8 mb-4 p-5 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <p className="text-xs font-semibold text-[#b9643b] uppercase tracking-widest">
                          Live Preview
                        </p>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {project.prototype}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { value: project.stats.users, label: project.stats.label },
                        { value: "98%", label: "Uptime" },
                        { value: "4.8★", label: "Avg Rating" },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="bg-gray-50 border border-gray-200 rounded-xl p-4"
                        >
                          <p className="text-2xl font-bold text-black tracking-tight">
                            {stat.value}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Resources */}
                    <div className="border border-gray-200 rounded-xl p-5">
                      <p className="text-xs font-semibold text-[#b9643b] uppercase tracking-widest mb-3">
                        Project Resources
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.resources.map((res, i) => (
                          <button
                            key={i}
                            className="text-sm px-4 py-2 rounded-full border border-gray-300 text-black hover:bg-black hover:text-white transition"
                          >
                            {res.title}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>




                </div>

              </section>

            </AnimatedSection>
          ))}


          <div >

            <div className="w-full flex justify-center">

              {/* Our Own Projects Section */}
              <AnimatedSection className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl text-[#b9643b] font-bold mb-3 inline-block">
                  Our Own Projects
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto font-semibold">
                  Products we are building internally to solve real-world problems.
                </p>
              </AnimatedSection>
            </div>

            <div className="flex flex-col md:flex-row gap-10 justify-center">
              {/* Jeevan Dev */}
              <ProjectCard
                type="health"
                title="Jeevan Dev"
                subtitle="HEALTH & MEDICAL PLATFORM (ON-GOING)"
                logo="/video/jeevan.gif"
                description="An innovative platform for reliable health information and expert medical articles. Currently expanding content and adding tele-consultation features."
                features={[
                  "Expert Articles",
                  "Trustworthy Info",
                  "Health Database"
                ]}
              />

              {/* Service Mania */}
              <ProjectCard
                type="service"
                title="Service Mania"
                subtitle="Service Marketplace"
                logo="img/Service Mania.png"
                description="Connects users with verified professionals for home tutoring, gym training, caretaking, and physiotherapy. Features instant booking and WhatsApp support."
                features={[
                  "Verified Professionals",
                  "Instant Booking",
                  "WhatsApp Support"
                ]}
              />
            </div>

          </div>
        </main>
   <JeevanDevLogo />
      </div>
    </div>
  );
};

export default ProjectsPage;