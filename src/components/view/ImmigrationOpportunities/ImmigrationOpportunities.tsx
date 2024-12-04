"use client";
import immigrationOpportunitiesData from "@/data/immigrationOpportunitiesData";
import CardWithZoom from "../CardWithZoom/CardWithZoom";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeOut from "@/utils/FadeOut";

gsap.registerPlugin(ScrollTrigger);

const ImmigrationOpportunities = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "40% 35%",
        end: "40% 20%",
        markers: true,
        scrub: true,
      },
    });
    tl.to(textRef.current, {
      y: -500,
    });
  });
  return (
    <section
      ref={containerRef}
      className="immigration-opportunities-section py-4 px-4 grid place-items-center bg-black w-full"
      data-scroll-section
    >
      <div className="max-w-[1200px] mx-auto h-full lg:h-screen grid place-items-center">
        <h2 ref={textRef} className="headings font-bold text-center mb-2">
          Immigration Opportunities
        </h2>
        <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-around items-center">
          {immigrationOpportunitiesData?.map((opportunity) => (
            <FadeOut key={opportunity.id}>
              <div className="relative w-64 h-80 overflow-hidden rounded-lg cursor-pointer">
                <Link href={opportunity?.action?.link}>
                  <CardWithZoom
                    name={opportunity.title}
                    imageSrc={opportunity.image}
                  />
                </Link>
              </div>
            </FadeOut>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImmigrationOpportunities;
