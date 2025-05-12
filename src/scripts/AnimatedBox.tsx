"use client"; // 👈 これが絶対に必要！

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function AnimatedBox() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, { x: 150, duration: 1.5 });
    }
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "hotpink",
        marginTop: 40,
      }}
    >
      box
    </div>
  );
}
