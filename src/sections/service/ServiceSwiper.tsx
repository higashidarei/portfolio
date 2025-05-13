"use client";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Mousewheel } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function ServiceSwiper() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      modules: [Mousewheel],
      direction: "vertical",
      slidesPerView: 1,
      autoHeight: true,
      mousewheel: {
        releaseOnEdges: true,
      },
    });

    // let isScrolling = false;

    // swiper.on("slideChangeTransitionStart", () => {
    //   isScrolling = true;
    //   swiper.allowSlideNext = false;
    //   swiper.allowSlidePrev = false;
    // });

    // swiper.on("slideChangeTransitionEnd", () => {
    //   isScrolling = false;
    //   swiper.allowSlideNext = true;
    //   swiper.allowSlidePrev = true;
    // });
  }, []);

  return (
    <div className="swiper" ref={swiperRef}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <h3>Web Development</h3>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
        <div className="swiper-slide">
          <h3>Web Design</h3>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
        <div className="swiper-slide">
          <h3>UI/UX Design</h3>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>
    </div>
  );
}
