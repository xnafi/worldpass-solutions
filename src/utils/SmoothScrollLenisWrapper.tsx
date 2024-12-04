"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrollLenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.04 }}>
      {children}
    </ReactLenis>
  );
}
