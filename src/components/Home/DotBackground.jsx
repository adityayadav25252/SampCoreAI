import { useEffect, useRef } from "react";

export default function DotBackground() {
  const dotLayerRef = useRef(null);
  const orangeLayerRef = useRef(null);

  useEffect(() => {
    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation (lerp) for buttery feel
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (orangeLayerRef.current) {
        orangeLayerRef.current.style.maskImage = `radial-gradient(circle 140px at ${currentX}px ${currentY}px, white, transparent)`;
        orangeLayerRef.current.style.webkitMaskImage = `radial-gradient(circle 140px at ${currentX}px ${currentY}px, white, transparent)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Base Dot Background */}
      <div
        ref={dotLayerRef}
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1.5px, transparent 3px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Orange Hover Effect */}
      <div
        ref={orangeLayerRef}
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #b9643b 2px, transparent 2px)",
          backgroundSize: "32px 32px",
          willChange: "mask-image, -webkit-mask-image",
        }}
      />
    </div>
  );
}