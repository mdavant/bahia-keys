import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function Motion() {
  const { pathname } = useLocation();
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (document.querySelector(".hero")) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-line > span", {
          yPercent: 100,
          duration: 1.05,
          stagger: 0.08,
          clearProps: "transform",
        })
          .from(
            ".hero-image",
            {
              clipPath: "inset(6% 6% 6% 6% round 180px 180px 16px 16px)",
              scale: 1.04,
              duration: 1.3,
              clearProps: "all",
            },
            0,
          )
          .from(
            ".hero-copy > p, .hero-actions",
            {
              opacity: 0,
              y: 14,
              stagger: 0.08,
              duration: 0.7,
              clearProps: "all",
            },
            0.35,
          );
      }
      if (document.querySelector(".page-intro h1"))
        gsap.from(".page-intro h1", {
          opacity: 0,
          y: 16,
          duration: 0.65,
          clearProps: "all",
        });
      const photo = document.querySelector(".experience-photo img");
      if (photo)
        gsap.fromTo(
          photo,
          { yPercent: -5, scale: 1.12 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: ".experience",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      const key = document.querySelector(".sculpture");
      if (key)
        gsap.fromTo(
          key,
          { rotateY: -24, rotateZ: -24 },
          {
            rotateY: 28,
            rotateZ: 8,
            ease: "none",
            scrollTrigger: {
              trigger: ".experience",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
    });
    mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine) and (min-width: 901px)", () => {
      const frame = document.querySelector<HTMLElement>(".hero-visual");
      const image = frame?.querySelector("img");
      if (!frame || !image) return;
      const x = gsap.quickTo(image, "x", { duration: 0.5, ease: "power3.out" });
      const y = gsap.quickTo(image, "y", { duration: 0.5, ease: "power3.out" });
      const move = (event: PointerEvent) => {
        const rect = frame.getBoundingClientRect();
        x(((event.clientX - rect.left) / rect.width - 0.5) * 8);
        y(((event.clientY - rect.top) / rect.height - 0.5) * 8);
      };
      const reset = () => { x(0); y(0); };
      frame.addEventListener("pointermove", move);
      frame.addEventListener("pointerleave", reset);
      return () => {
        frame.removeEventListener("pointermove", move);
        frame.removeEventListener("pointerleave", reset);
      };
    });
    return () => mm.revert();
  }, [pathname]);
  return null;
}
export function KeySculpture() {
  return (
    <div className="key-stage" aria-hidden="true">
      <div className="sculpture">
        <div className="key-ring" />
        <div className="key-shaft" />
        <div className="key-tooth tooth-one" />
        <div className="key-tooth tooth-two" />
      </div>
    </div>
  );
}
