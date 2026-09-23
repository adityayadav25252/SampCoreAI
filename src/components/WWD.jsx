import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    number: "00",
    title: "WHAT WE BUILD",
    subtitle:
      "We build digital products that turn ambitious ideas into useful, scalable experiences.",
    body:
      "From the first interaction to the final release, we design and engineer products people want to use.",
  },
  {
    number: "01",
    title: "MOBILE APPLICATIONS",
    subtitle:
      "Native and cross-platform mobile experiences built for speed, clarity, and everyday use.",
    body:
      "iOS, Android, product strategy, UX, engineering, analytics, and everything between the idea and the store.",
  },
  {
    number: "02",
    title: "WEB APPLICATIONS",
    subtitle:
      "Fast, expressive web products designed around real users and real business problems.",
    body:
      "We combine thoughtful interfaces with robust frontend and backend systems that are ready to grow.",
  },
  {
    number: "03",
    title: "INTERNAL PRODUCTS",
    subtitle:
      "Powerful internal tools that make teams faster, clearer, and less dependent on spreadsheets.",
    body:
      "We turn complicated workflows into simple products that teams actually enjoy using.",
  },
  {
    number: "04",
    title: "NON-PROFIT TECH ORGANIZATION",
    subtitle:
      "Technology with a purpose beyond the product itself.",
    body:
      "We partner with people solving meaningful problems and use design and engineering to amplify their reach.",
  },
];

/* =====================================================
   FIXED NUMBER
   Number ki position kabhi move nahi hogi.
   Sirf 00 -> 01 -> 02 -> 03 -> 04 change hoga.
===================================================== */

function FixedNumber({ activeIndex }) {
  const numberRef = useRef(null);
  const previousIndex = useRef(activeIndex);

  useLayoutEffect(() => {
    if (!numberRef.current) return;

    const el = numberRef.current;

    if (previousIndex.current === activeIndex) {
      el.textContent = sections[activeIndex]?.number || "00";
      return;
    }

    previousIndex.current = activeIndex;

    gsap.killTweensOf(el);

    gsap.to(el, {
      opacity: 0,
      duration: 0.12,
      ease: "power2.out",

      onComplete: () => {
        el.textContent = sections[activeIndex]?.number || "00";

        gsap.to(el, {
          opacity: 1,
          duration: 0.16,
          ease: "power2.out",
        });
      },
    });
  }, [activeIndex]);

  return (
    <div
      className="
        fixed
        left-[5vw]
        top-1/2
        z-[500]
        flex
        h-[34vw]
        w-[36vw]
        -translate-y-1/2
        items-center
        justify-start
        overflow-hidden
        pointer-events-none

        max-md:left-[10px]
        max-md:top-[42%]
        max-md:h-[55vw]
        max-md:w-[90vw]
        max-md:opacity-[0.12]
      "
    >
      <span
        ref={numberRef}
        className="
          block
          whitespace-nowrap
          text-[clamp(14rem,30vw,38rem)]
          font-extrabold
          leading-[0.65]
          tracking-[-0.1em]
          text-[#080808]
          will-change-[opacity]
        "
      >
        00
      </span>
    </div>
  );
}

/* =====================================================
   PRODUCT SECTION
===================================================== */

function ProductSection({ item, index }) {
  const sectionRef = useRef(null);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);
  const bodyRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* INITIAL STATES */

      gsap.set(titleRef.current, {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(subtitleRef.current, {
        y: 40,
        opacity: 0,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(bodyRef.current, {
        y: 35,
        opacity: 0,
      });

      gsap.set(progressRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      /* =================================================
         MASTER TIMELINE

         PHASE 1
         Heading

         PHASE 2
         Subtitle

         PHASE 3
         Line + body
      ================================================= */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1250",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* ===========================
         PHASE 1
      =========================== */

      tl.to(
        titleRef.current,
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        0
      );

      /* ===========================
         PHASE 2
      =========================== */

      tl.to(
        subtitleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "+=0.15"
      );

      /* ===========================
         PHASE 3
         Orange line
      =========================== */

      tl.to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.7,
          ease: "power2.inOut",
        },
        "+=0.2"
      );

      /* ===========================
         PHASE 3
         Body
      =========================== */

      tl.to(
        bodyRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2"
      );

      /* Progress */

      tl.to(
        progressRef.current,
        {
          scaleX: 1,
          duration: 1,
          ease: "none",
        },
        0
      );

      /* Hold */

      tl.to(
        {},
        {
          duration: 0.7,
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        relative
        h-screen
        min-h-[680px]
        w-full
        overflow-hidden

        ${
          index === 4
            ? "bg-[#ff5a00] text-white"
            : "bg-[#f8f7f3] text-[#080808]"
        }
      `}
    >
      <div
        className="
          relative
          grid
          h-full
          w-full
          grid-cols-[42%_58%]
          items-center
          px-[6vw]
          py-[12vh]

          max-md:block
          max-md:px-[20px]
          max-md:py-[15vh]
        "
      >
        {/* LEFT SPACE */}

        <div className="h-full w-full max-md:hidden" />

        {/* RIGHT CONTENT */}

        <div
          className="
            relative
            z-10
            max-w-[800px]
            pl-[3vw]
            pr-[7vw]

            max-md:w-full
            max-md:max-w-none
            max-md:px-0
            max-md:pt-[17vh]
          "
        >
          {/* TITLE */}

          <h2
            ref={titleRef}
            className="
              m-0
              max-w-[800px]
              text-[clamp(3.2rem,7.2vw,9.5rem)]
              font-extrabold
              uppercase
              leading-[0.86]
              tracking-[-0.07em]

              max-md:text-[clamp(3rem,14vw,6rem)]
            "
          >
            {item.title}
          </h2>

          {/* ORANGE LINE */}

          <div
            ref={lineRef}
            className={`
              mt-[38px]
              h-[5px]
              w-full
              origin-left

              max-md:my-[25px]
              max-md:h-[3px]

              ${
                index === 4
                  ? "bg-white"
                  : "bg-[#ff5a00]"
              }
            `}
          />

          {/* SUBTITLE */}

          <p
            ref={subtitleRef}
            className="
              m-0
              max-w-[650px]
              text-[clamp(1.25rem,2vw,2rem)]
              leading-[1.15]
              tracking-[-0.035em]

              max-md:text-[1.2rem]
            "
          >
            {item.subtitle}
          </p>

          {/* BODY */}

          <p
            ref={bodyRef}
            className={`
              mt-[26px]
              max-w-[570px]
              text-[15px]
              leading-[1.55]

              max-md:text-[14px]

              ${
                index === 4
                  ? "text-white/70"
                  : "text-[#77746e]"
              }
            `}
          >
            {item.body}
          </p>
        </div>
      </div>

      {/* BOTTOM PROGRESS */}

      <div
        ref={progressRef}
        className={`
          absolute
          bottom-0
          left-0
          h-[4px]
          w-full
          origin-left

          ${
            index === 4
              ? "bg-white"
              : "bg-[#ff5a00]"
          }
        `}
      />
    </section>
  );
}

/* =====================================================
   WHY JOIN US
===================================================== */

function WhyJoinUs() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".join-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".join-copy", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        flex
        min-h-screen
        items-center
        bg-[#080808]
        px-[7vw]
        py-[10vw]
        text-white

        max-md:px-[20px]
      "
    >
      <div className="max-w-[1200px]">

        <span
          className="
            mb-8
            block
            font-mono
            text-[12px]
            tracking-[0.12em]
            text-[#ff5a00]
          "
        >
          05
        </span>

        <h2
          className="
            join-title
            m-0
            text-[clamp(4rem,12vw,13rem)]
            font-extrabold
            leading-[0.8]
            tracking-[-0.08em]

            max-md:text-[18vw]
          "
        >
          WHY JOIN US
        </h2>

        <p
          className="
            join-copy
            my-[50px]
            mb-[35px]
            max-w-[650px]
            text-[clamp(1.1rem,1.7vw,1.5rem)]
            leading-[1.35]
            text-[#aaa]
          "
        >
          Come build things that matter with a team
          that cares about craft, technology, and
          the people using what we make.
        </p>

        <a
          href="#top"
          className="
            inline-flex
            items-center
            gap-3
            font-mono
            text-[11px]
            uppercase
            tracking-[0.08em]
            text-white
            no-underline
          "
        >
          Back to top

          <span className="text-[18px] text-[#ff5a00]">
            ↗
          </span>
        </a>

      </div>
    </section>
  );
}

/* =====================================================
   APP
===================================================== */

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  /* ===================================================
     ACTIVE SECTION

     00
     ↓
     01
     ↓
     02
     ↓
     03
     ↓
     04
  =================================================== */

  useLayoutEffect(() => {
    const triggers = [];

    sections.forEach((_, index) => {
      const section = document.querySelector(
        `.product-section-${index}`
      );

      if (!section) return;

      const trigger = ScrollTrigger.create({
        trigger: section,

        start: "top center",

        end: "bottom center",

        onEnter: () => {
          setActiveIndex(index);
        },

        onEnterBack: () => {
          setActiveIndex(index);
        },
      });

      triggers.push(trigger);
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <main id="top" className="relative w-full">

      {/* HEADER */}

      <header
        className="
          fixed
          left-0
          top-0
          z-[1000]
          flex
          w-full
          items-center
          justify-between
          px-[34px]
          py-6
          text-white
          mix-blend-difference
          pointer-events-none

          max-md:px-[20px]
          max-md:py-[18px]
        "
      >
        <div
          className="
            font-mono
            text-[11px]
            font-medium
            tracking-[0.12em]
          "
        >
          STUDIO
          <span className="text-[#ff5a00]">
            /
          </span>
          00
        </div>

        <div
          className="
            font-mono
            text-[10px]
            font-medium
            tracking-[0.12em]

            max-md:hidden
          "
        >
          DIGITAL PRODUCTS
        </div>
      </header>


      {/* ============================================
          FIXED NUMBER

          IMPORTANT:
          Iski position kabhi change nahi hogi.
      ============================================ */}

      <FixedNumber
        activeIndex={activeIndex}
      />


      {/* ============================================
          INTRO
      ============================================ */}

      <section
        className="
          flex
          h-screen
          min-h-[680px]
          flex-col
          justify-end
          gap-2.5
          bg-[#f8f7f3]
          px-[34px]
          pb-[34px]
          font-mono
          text-[10px]
          font-medium
          tracking-[0.1em]

          max-md:min-h-[600px]
          max-md:px-[20px]
          max-md:pb-6
        "
      >
        <span>
          SCROLL TO EXPLORE
        </span>

        <span
          className="
            text-2xl
            leading-none
            animate-bounce
          "
        >
          ↓
        </span>
      </section>


      {/* ============================================
          PRODUCT SECTIONS
      ============================================ */}

      {sections.map((item, index) => (
        <div
          key={item.number}
          className={`product-section-${index}`}
        >
          <ProductSection
            item={item}
            index={index}
          />
        </div>
      ))}


      {/* ============================================
          WHY JOIN US
      ============================================ */}

      <WhyJoinUs />

    </main>
  );
}