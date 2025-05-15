"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function PageTransition() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a[data-transition]") as HTMLAnchorElement;
      if (!link || !link.href.includes(location.host)) return;

      e.preventDefault();
      const url = new URL(link.href);

      const overlay = document.getElementById("page-transition-overlay");
      if (!overlay) return;

      // overlay表示 & 遷移前アニメーション
      gsap.set(overlay, { y: "100%", visibility: "visible" });

      gsap.to(overlay, {
        y: "0%",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          sessionStorage.setItem("pageTransition", "true");
          window.location.href = url.pathname;
        },
      });
    };

    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      id="page-transition-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#132C52",
        zIndex: 9999,
        transform: "translateY(100%)",
        visibility: "hidden",
      }}
    />
  );
}
