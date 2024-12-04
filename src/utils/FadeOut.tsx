"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeOutProps {
  children: ReactNode;
}

const FadeOut: React.FC<FadeOutProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -50,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "40% 20%", // Animation starts when top reaches 80% of viewport
            end: "40% 20%", // Animation ends when top reaches 20% of viewport
            scrub: true,
          },
        }
      );
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default FadeOut;
