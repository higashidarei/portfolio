"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function MvAnimation() {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const itemRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // txt分離アニメーション
    tl.to(h1Ref.current, {
      y: "-230px",
      duration: 1.8,
      ease: "power2.inOut",
      delay: 2.4, // CSSアニメーション終了を待つ
    });

    // subtxtを出現しながら下に移動
    tl.to(h2Ref.current, {
      opacity: 1,
      y: "230px",
      duration: 1.8,
      ease: "power2.inOut",
    }, "<"); // h1Refと同時スタート

    tl.to(itemRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.8,
      ease: "power2.inOut",
    }, "<0.3");

    gsap.to(circleRef.current, {
      scale: 2,
      scrollTrigger: {
        trigger: circleRef.current,
        start: "bottm",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
      ease: "power2.out"
    });
  }, []);

  return (
    <div>
      <div className="circle" ref={circleRef}>
        <div className="circle-animation"></div>
      </div>
      <div className="mv__txt-area">
        <h1 className="mv__txt" ref={h1Ref}>
          <span>P</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>f</span>
          <span>o</span>
          <span>l</span>
          <span>i</span>
          <span>o</span>
        </h1>

        <p className="mv__subtxt" ref={h2Ref}>
          Portfolio
        </p>

        <div className="mv__item" ref={itemRef}>
          <img src="./images/mv-item.png" alt="" />
        </div>
      </div>
    </div>
  );
}
