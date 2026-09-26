import { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let animationFrame;

    const particles = [];

    const PARTICLE_COUNT = 90;

    /* =========================
       RESIZE
    ========================= */

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    /* =========================
       CREATE PARTICLES
    ========================= */

    const createParticles = () => {
      particles.length = 0;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,

          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,

          baseSize:
            Math.random() * 2.5 + 1,

          size:
            Math.random() * 2.5 + 1,

          pulse:
            Math.random() * Math.PI * 2,

          pulseSpeed:
            Math.random() * 0.025 + 0.008,

          opacity:
            Math.random() * 0.45 + 0.2,

          /* Different particles move differently */
          drift:
            Math.random() * 0.6 + 0.2,
        });
      }
    };

    createParticles();

    /* =========================
       ANIMATION
    ========================= */

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.01;

      particles.forEach((particle) => {

        /* -------------------------
           Movement
        ------------------------- */

        particle.x += particle.vx;
        particle.y += particle.vy;

        /*
          Slight organic movement
        */

        particle.x +=
          Math.sin(
            time * particle.drift +
            particle.pulse
          ) * 0.12;

        particle.y +=
          Math.cos(
            time * particle.drift +
            particle.pulse
          ) * 0.12;

        /* -------------------------
           Screen wrapping
        ------------------------- */

        if (particle.x < -20) {
          particle.x = width + 20;
        }

        if (particle.x > width + 20) {
          particle.x = -20;
        }

        if (particle.y < -20) {
          particle.y = height + 20;
        }

        if (particle.y > height + 20) {
          particle.y = -20;
        }

        /* -------------------------
           Size animation
        ------------------------- */

        particle.pulse += particle.pulseSpeed;

        const pulseValue =
          (Math.sin(particle.pulse) + 1) / 2;

        /*
          Dots naturally move between
          small → medium → large
        */

        particle.size =
          particle.baseSize +
          pulseValue * 5;

        /* -------------------------
           Brightness
        ------------------------- */

        const alpha =
          particle.opacity +
          pulseValue * 0.35;

        /* -------------------------
           Draw dot
        ------------------------- */

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(225, 20, 35, ${alpha})`;

        /*
          Only larger dots receive glow
        */

        if (particle.size > 4) {
          ctx.shadowBlur =
            particle.size * 3;

          ctx.shadowColor =
            "rgba(225, 20, 35, 0.45)";
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();

        ctx.shadowBlur = 0;
      });

      animationFrame =
        requestAnimationFrame(animate);
    };

    animate();

    /* =========================
       CLEANUP
    ========================= */

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="animated-background"
    />
  );
}

export default AnimatedBackground;