"use client";

import { useEffect } from "react";

export default function StarBackground() {
  useEffect(() => {
    const stars = document.querySelector(".stars-bg");
    if (!stars) return;

    const createStar = () => {
      const starEl = document.createElement("span");
      starEl.className = "star";
      const size = Math.random() * (2 - 1) + 1;
      starEl.style.width = `${size}px`;
      starEl.style.height = `${size}px`;
      starEl.style.left = `${Math.random() * 100}%`;
      starEl.style.top = `${Math.random() * 100}%`;
      starEl.style.animationDelay = `${Math.random() * 10}s`;
      stars.appendChild(starEl);
    };

    for (let i = 0; i <= 10; i++) {
      createStar();
    }
  }, []);

  return null;
}
