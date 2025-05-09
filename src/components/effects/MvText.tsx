"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MvText() {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // txt分離アニメーション
    tl.to(h1Ref.current, {
      y: "-150px",
      duration: 1.8,
      ease: "power2.inOut",
      delay: 2.4, // CSSアニメーション終了を待つ
    });

    // subtxtを出現しながら下に移動
    tl.to(h2Ref.current, {
      opacity: 1,
      y: "150px",
      duration: 1.8,
      ease: "power2.inOut",
    }, "<"); // h1Refと同時スタート
  }, []);

  return (
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

      <h1 className="mv__subtxt" ref={h2Ref}>
        Portfolio
      </h1>
    </div>
  );
}
