"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MotionPath from "@/sections/service/MotionPath";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Web Development",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  },
  {
    title: "Web Design",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  },
  {
    title: "UI/UX Design",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
];

export default function ServiceSlide() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // 初期表示：すべて非表示、最初だけ表示
    slidesRef.current.forEach((slide, i) => {
      gsap.set(slide, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        opacity: i === 0 ? 1 : 0,
        zIndex: slides.length - i,
      });
    });

    // ScrollTrigger 全体設定
    ScrollTrigger.create({
      trigger: ".service",
      pin: wrapper,
      pinSpacing: true,
      start: "top top",
      end: `+=${window.innerHeight * (slides.length - 1)}`,
      scrub: true,
      // markers:true,
      onUpdate: (self) => {
        const rawIndex = self.progress * slides.length;
        const index = Math.min(Math.floor(rawIndex), slides.length - 1);
        slidesRef.current.forEach((slide, i) => {
          gsap.to(slide, {
            autoAlpha: i === index ? 1 : 0,
            duration: 0.3,
            overwrite: true,
          });
        });
      },

    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="service-pin-wrapper" ref={wrapperRef}>
      <h2 className="heading-A">Service</h2>
      <ul className="service__list">
        {slides.map((s, i) => (
          <li
            className="service__item"
            key={i}
            ref={(el) => {
              if (el) slidesRef.current[i] = el;
            }}
          >
            <div>
              <h3>{s.title}</h3>
              <p>{s.content}</p>
            </div>
            <div>
              <MotionPath />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
