"use client";

import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import * as THREE from "three";

export default function HoverDistortWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvasContainer = canvasRef.current;
    if (!wrapper || !canvasContainer) return;

    const images = wrapper.querySelectorAll("img");
    let loadedCount = 0;

    if (images.length === 0) {
      capture();
    } else {
      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
          if (loadedCount === images.length) capture();
        } else {
          img.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) capture();
          };
        }
      });
    }

    function capture() {
      html2canvas(wrapper, {
        useCORS: true,
        width: wrapper.offsetWidth,
        height: wrapper.offsetHeight,
      }).then((canvasImage) => {
        const texture = new THREE.CanvasTexture(canvasImage);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(canvasImage.width, canvasImage.height);
        canvasContainer.appendChild(renderer.domElement);

        const uniforms = {
          u_time: { value: 0 },
          u_hover: { value: 0 },
          u_texture: { value: texture },
        };

        const material = new THREE.ShaderMaterial({
          uniforms,
          vertexShader: `
            varying vec2 v_uv;
            void main() {
              v_uv = uv;
              gl_Position = vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float u_time;
            uniform float u_hover;
            uniform sampler2D u_texture;
            varying vec2 v_uv;

            void main() {
              vec2 uv = v_uv;
              if (u_hover > 0.5) {
                uv.y += sin(uv.x * 20.0 + u_time * 4.0) * 0.02;
                uv.x += cos(uv.y * 20.0 + u_time * 4.0) * 0.02;
              }
              gl_FragColor = texture2D(u_texture, uv);
            }
          `,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        wrapper.addEventListener("mouseenter", () => {
          material.uniforms.u_hover.value = 1;
        });

        wrapper.addEventListener("mouseleave", () => {
          material.uniforms.u_hover.value = 0;
        });

        const animate = (time: number) => {
          material.uniforms.u_time.value = time * 0.001;
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };
        animate(0);
      });
    }
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div ref={wrapperRef} style={{ opacity: 0, position: "absolute", pointerEvents: "none" }}>
        {children}
      </div>
      <div ref={canvasRef} />
    </div>
  );
}
