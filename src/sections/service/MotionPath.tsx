"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { motion } from 'framer-motion';

gsap.registerPlugin(MotionPathPlugin);

export default function MotionPath() {
  const dotRef = useRef(null);

  useEffect(() => {
    gsap.to(dotRef.current, {
      duration: 5,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: "#myPath",
        align: "#myPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });
  }, []);

  return (
    <div>
      {/* <svg width="400" height="200" viewBox="0 0 400 200">
        <path id="myPath" d="M20,100 Q200,0 380,100 T760,100" fill="none" stroke="" />
      </svg>

      <div ref={dotRef} className="dot"></div> */}

      <motion.div
        drag
        dragConstraints={{ top: 0, left: 0, right: 200, bottom: 200 }}
        style={{
          width: 100,
          height: 100,
        }}
        className="dot"
      >
        <span>drag me!</span>
      </motion.div>
    </div>
  );
}