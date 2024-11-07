"use client";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function LocoWraper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: "horizontal",
        touchMultiplier: 1,
        lerp: 0.1,
        scrollFromAnywhere: true,
        gestureDirection: "vertical",
        smartphone: true,

        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
}
