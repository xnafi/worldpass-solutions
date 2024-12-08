"use client";

import React, { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface FadeOutProps {
  children: ReactNode;
}

const FadeOut: React.FC<FadeOutProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "10% 80%",
        end: "10% 65%",
        markers: true,
        scrub: true,
      },
    });

    tl.to(childRef.current, {
      opacity: "1",
      yPercent: "100",
      stagger: 0.2,
      duration: 0.8,
      ease: "elastic.inOut",
    });
    tl.from(childRef.current, {
      yPercent: "100",
      opacity: "0.1",
    });

    // if (containerRef.current) {
    //   gsap.fromTo(
    //     containerRef.current.children,
    //     {
    //       opacity: 1,
    //       y: 0,
    //     },
    //     {
    //       opacity: 0,
    //       y: -50,
    //       duration: 1,
    //       stagger: 0.2,
    //       scrollTrigger: {
    //         trigger: containerRef.current,
    //         start: "40% 20%", // Animation starts when top reaches 80% of viewport
    //         end: "40% 20%", // Animation ends when top reaches 20% of viewport
    //         scrub: true,
    //       },
    //     }
    //   );
    // }
  }, []);

  return (
    <div ref={containerRef}>
      <div ref={childRef}>{children}</div>
    </div>
  );
};

export default FadeOut;
