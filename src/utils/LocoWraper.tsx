"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";


export default function LocoWraper({
  children,
}: {
  children: React.ReactNode;
  }) {
    const lenis = useLenis(({ scroll }) => {
      // called every scroll
    });
  return (
    <main>
      <ReactLenis root>{children}</ReactLenis>
    </main>
  );
}
