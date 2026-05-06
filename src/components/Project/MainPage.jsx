import React, { useRef, useEffect } from 'react'

// ─── Data ────────────────────────────────────────────────────────────────────

const detailedServices = [
  {
    title: 'Web Development',
    description: 'Cutting-edge websites with modern frameworks and pixel-perfect design.',
    icon: '🌐',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications that users love to use every day.',
    icon: '📱',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    title: 'Backend & APIs',
    description: 'Robust, scalable server infrastructure and REST / GraphQL APIs.',
    icon: '⚙️',
    tags: ['Node.js', 'Python', 'PostgreSQL'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Automated pipelines and cloud deployments built for reliability.',
    icon: '☁️',
    tags: ['AWS', 'Docker', 'CI/CD'],
  },
]

const expertiseItems = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Happy Clients',      value: '85+'  },
  { label: 'Years Experience',   value: '7+'   },
  { label: 'Team Members',       value: '20+'  },
]

const processSteps = [
  { step: '01', title: 'Discovery',    desc: 'We learn your goals, users, and constraints.' },
  { step: '02', title: 'Design',       desc: 'Wireframes and high-fidelity prototypes.' },
  { step: '03', title: 'Development',  desc: 'Agile sprints with regular demos.' },
  { step: '04', title: 'Launch',       desc: 'Deployment, monitoring, and ongoing support.' },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

const ServiceCard = ({ service, index }) => (
  <div
    className="group border border-black p-6 rounded-xl hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="text-3xl mb-4">{service.icon}</div>
    <h3 className="text-lg font-bold mb-2 tracking-tight">{service.title}</h3>
    <p className="text-sm leading-relaxed opacity-70 mb-4">{service.description}</p>
    <div className="flex flex-wrap gap-2">
      {service.tags.map((tag) => (
        <span
          key={tag}
          className="text-xs px-2 py-1 border border-current rounded-full group-hover:border-white"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

const ExpertiseSection = () => (
  <section className="py-20 border-t border-black/10">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-5xl font-black tracking-tighter mb-12">
        BY THE{' '}
        <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>
          NUMBERS
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {expertiseItems.map(({ label, value }) => (
          <div key={label}>
            <p className="text-5xl font-black tracking-tighter">{value}</p>
            <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const DevelopmentProcess = () => (
  <section className="py-20 bg-black text-white">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-black tracking-tighter mb-12 text-center">
        OUR{' '}
        <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
          PROCESS
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map(({ step, title, desc }) => (
          <div key={step} className="border border-white/20 rounded-xl p-6 hover:border-white transition">
            <p className="text-4xl font-black text-white/20 mb-3">{step}</p>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * splitText — wraps every character in an animated span.
 * Each character fades + slides in with a staggered delay.
 */
const splitText = (text) =>
  text.split('').map((char, i) => (
    <span
      key={i}
      className="inline-block animate-fadeUp"
      style={{
        animationDelay: `${i * 40}ms`,
        animationFillMode: 'both',
      }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

// ─── Main Component ───────────────────────────────────────────────────────────

const MainPage = () => {
  const heroRef  = useRef(null)
  const titleRef = useRef(null)

  // Optional: simple scroll-reveal on hero
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      el.style.opacity    = '1'
      el.style.transform  = 'translateY(0)'
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <>
      {/* Keyframe injection */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .animate-fadeUp { animation: fadeUp 0.5s ease both; }
        .stroke-text    { -webkit-text-stroke: 2px black; color: transparent; }
      `}</style>

      {/* ── Hero ── */}
      <section ref={heroRef} className="text-center relative pt-36 px-6">

        {/* Badge */}
        <span className="inline-block px-4 py-2 mb-8 text-xs font-medium tracking-widest uppercase bg-[#b9643b] text-white rounded-full">
          Welcome to the Project Page
        </span>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8"
          style={{ perspective: '1000px' }}
        >
         <span
  className="block text-transparent"
  style={{ WebkitTextStroke: '2px #b9643b' }}
>
  {splitText('Client')} {splitText(' & ')} {splitText('Own ')}
</span>
        <span className="block text-[#1b2b45]">
  {splitText('Projects')}
</span>
        </h1>

        {/* Sub-copy */}
        <p className="max-w-xl mx-auto mb-10 text-xl text-gray-600 leading-relaxed">
         From deep-dive client case studies to our internal products — we build with purpose.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          <button className="px-10 py-4 text-sm font-bold bg-[#b9643b] text-white rounded-lg hover:bg-gray-800 transition">
            Client Cases →
          </button>
          <button className="px-8 py-4 text-sm font-bold border border-black rounded-lg hover:bg-black hover:text-white transition flex items-center gap-2">
            Our Own Projects
          </button>
        </div>

       
      </section>
    </>
  )
}

export default MainPage