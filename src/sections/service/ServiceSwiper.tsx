// components/ServiceSwiper.tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Web Development",
    content: "テキストテキストテキストテキストテキストテキスト..."
  },
  {
    title: "Web Design",
    content: "テキストテキストテキストテキストテキストテキスト..."
  },
  {
    title: "UI/UX Design",
    content: "テキストテキストテキストテキストテキストテキスト..."
  }
];

export default function ServiceSwiper() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // 初期表示設定
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

    // ScrollTrigger
    ScrollTrigger.create({
      trigger: ".service",
      pin: wrapper,
      pinSpacing: true,
      start: "top top",
      end: () => wrapper?.scrollHeight || window.innerHeight,
      scrub: true,
      onUpdate: (self) => {
        const index = Math.floor(self.progress * slides.length);
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
      <div className="access-wrapper">
        {slides.map((s, i) => (
          <div
            className="access-slide"
            key={i}
            ref={(el) => el && (slidesRef.current[i] = el)}
          >
            <h3>{s.title}</h3>
            <p>{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
