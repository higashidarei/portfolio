"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WorksSlide() {
  const wrapperRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const wrapper = wrapperRef.current;
    const list = listRef.current;

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

    ScrollTrigger.create({
      trigger: ".contact",
      start: "top center",
      end: "bottom bottom-=50",
      toggleClass: { targets: "body", className: "colored" }
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
