"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/style.scss";
import type { ReactNode } from "react";
import ClientLayoutWrapper from "src/components/layout/ClientLayoutWrapper";
import StarBackground from "@/components/effects/StarBackground";
import PageTransition from "@/components/effects/PageTransition";

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const overlay = document.getElementById("page-transition-overlay");
    const hasTransition = sessionStorage.getItem("pageTransition") === "true";

    document.body.style.visibility = "visible";

    if (overlay && hasTransition) {
      gsap.set(overlay, { y: "0%", visibility: "visible" });

      gsap.to(overlay, {
        y: "-100%",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          overlay.style.visibility = "hidden";
          sessionStorage.removeItem("pageTransition");
        },
      });
    } else {
      if (overlay) overlay.style.visibility = "hidden";
    }
  }, []);

  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <PageTransition />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        <StarBackground />
      </body>
    </html>
  );
}
