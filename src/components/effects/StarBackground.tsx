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
      starEl.style.position = "absolute";
      stars.appendChild(starEl);
    };

    for (let i = 0; i <= 20; i++) {
      createStar();
    }

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 50;
      const y = (e.clientY / innerHeight - 0.5) * 50;
      stars.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
