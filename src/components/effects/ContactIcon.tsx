"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function ContactIcon() {
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    const trigger = document.querySelector('.contact__ttl a');
    const iconLayer = document.querySelector('.contact__icon');

    if (!trigger || !iconLayer) return;

    let intervalId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    // マウス位置を追跡
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // アイコン生成関数
    const spawnIcon = () => {
      const icon = document.createElement('div');
      icon.classList.add('mail-icon');
      icon.innerHTML = '📩';

      icon.style.left = `${mouseX}px`;
      icon.style.top = `${mouseY}px`;

      iconLayer.appendChild(icon);

      gsap.to(icon, {
        duration: 1,
        ease: "power1.out",
        motionPath: {
          path: [
            { x: 0, y: 0 },// 開始点
            { x: 200, y: 40 },// 少し右
            { x: 230, y: 100 }// 最終点（右下）
          ],
          curviness: 2,
          autoRotate: false
        },
        opacity: 0,
        onComplete: () => icon.remove()
      });
    };

    trigger.addEventListener('mousemove', handleMouseMove);

    trigger.addEventListener('mouseenter', () => {
      intervalId = window.setInterval(spawnIcon, 700);
    });

    trigger.addEventListener('mouseleave', () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    });

    // クリーンアップ
    return () => {
      trigger.removeEventListener('mousemove', handleMouseMove);
      trigger.removeEventListener('mouseenter', () => { });
      trigger.removeEventListener('mouseleave', () => { });
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h2 className="contact__ttl">
        <a href="/contact" data-transition>Contact</a>
      </h2>
      <div className="contact__icon"></div>
    </>
  );
}
