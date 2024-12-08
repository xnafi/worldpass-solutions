// "use client";
import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface FadeInProps {
  children: ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(textRef.current, {
        x: 200,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <span ref={textRef}>{children}</span>
    </div>
  );
};

export default FadeIn;
