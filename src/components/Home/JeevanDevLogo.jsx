"use client";
import { useEffect, useRef } from "react";
import "../Home/JeevanDevLogo.css";

export default function JeevanDevLogo() {
  const hlRef = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });
  const cur = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const hl = hlRef.current;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const onLeave = () => {
      mouse.current.x = -999;
      mouse.current.y = -999;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      cur.current.x = lerp(cur.current.x, mouse.current.x, 0.08);
      cur.current.y = lerp(cur.current.y, mouse.current.y, 0.08);

      const rect = hl.getBoundingClientRect();
      const relX = cur.current.x - rect.left;
      const relY = cur.current.y - rect.top;

      if (mouse.current.x === -999) {
        hl.style.setProperty("--x", "-999px");
        hl.style.setProperty("--y", "-999px");
      } else {
        hl.style.setProperty("--x", `${relX}px`);
        hl.style.setProperty("--y", `${relY}px`);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div>
      <div className="meta-bar">
        <span>EST. 2024</span>
        <div className="dot-line"></div>
        <span>BHOPAL, MP — INDIA</span>
        <div className="dot-line"></div>
        <span>DIGITAL EXCELLENCE</span>
      </div>
    <div
      className="container"
      style={{
        position: "relative",
        height: "30vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
      >
      <h1 className="text base">SAMPCORE AI</h1>
      <h1 className="text highlight" ref={hlRef}>SAMPCORE AI</h1>
      </div>
    </div>
  );
}