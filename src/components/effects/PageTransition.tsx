"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

export default function PageTransition() {
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a[data-transition]") as HTMLAnchorElement;
      if (!link || !link.href.includes(location.host)) return;

      e.preventDefault();
      const url = new URL(link.href);
      setIsAnimating(true);

      // 遷移アニメーション
      const overlay = document.getElementById("page-transition-overlay");
      if (overlay) {
        gsap.fromTo(
          overlay,
          { y: "100%", opacity: 1 },
          {
            y: "0%",
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
              // router.push(url.pathname);
              window.location.href = url;
              setIsAnimating(false);
            },
          }
        );
      }
    };

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, [router]);

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
        pointerEvents: isAnimating ? "auto" : "none",
      }}
    />
  );
}
