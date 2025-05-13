"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function WorksSlide() {
  const wrapperRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const list = listRef.current;

    // if (!wrapper || !list) return;

    gsap.to(list, {
      x: () => -(list.clientWidth - wrapper.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: ".works",
        start: "top top",
        end: () => `+=${list.clientWidth - wrapper.clientWidth}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

  }, []);

  return (
      <div className="works__list-wrap" ref={wrapperRef}>
        <ul className="works__list" ref={listRef}>
          <li>
            <div className="works__list-img"></div>
            <p className="works__list-ttl">Card</p>
          </li>
          <li>
            <div className="works__list-img"></div>
            <p className="works__list-ttl">Card</p>
          </li>
          <li>
            <div className="works__list-img"></div>
            <p className="works__list-ttl">Card</p>
          </li>
          <li>
            <div className="works__list-img"></div>
            <p className="works__list-ttl">Card</p>
          </li>
          <li>
            <div className="works__list-img"></div>
            <p className="works__list-ttl">Card</p>
          </li>
        </ul>
      </div>
  );
}
