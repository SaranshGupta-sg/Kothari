import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-left", {
        x: -70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-right", {
        x: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".about-number", {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".about-number",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fff8ed] px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT — Visual */}
          <div className="about-left relative">
            <div className="relative min-h-[500px] overflow-hidden rounded-[40px] bg-[#e51b23]">
              {/* Large decorative circle */}
              <div className="absolute -left-24 -top-24 h-[330px] w-[330px] rounded-full border border-white/20" />

              <div className="absolute -bottom-28 -right-28 h-[360px] w-[360px] rounded-full border border-white/20" />

              {/* Small circles */}
              <div className="absolute right-10 top-10 h-4 w-4 rounded-full bg-white/60" />
              <div className="absolute bottom-20 left-10 h-3 w-3 rounded-full bg-white/40" />

              {/* Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/60">
                  The Kothari Story
                </p>

                <Link
                  to="/"
                  className="flex items-center rounded-4xl bg-white px-3 py-2"
                >
                  <img
                    src="/logo.png"
                    alt="Kothari Masale"
                    className="h-44 w-auto object-contain"
                  />
                </Link>

                <div className="mx-auto mt-5 h-px w-20 bg-white/50" />

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                  Kothari Masale
                </p>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 right-8 rounded-2xl bg-white px-5 py-4 shadow-xl"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Our Philosophy
                </p>

                <p className="mt-1 text-sm font-black text-[#171717]">
                  Pure. Simple. Authentic.
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="about-right">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#e51b23]">
              About Kothari
            </p>

            <h2 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-[#171717] sm:text-6xl">
              Bringing the
              <span className="block text-[#e51b23]">taste of India.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Kothari Masale is dedicated to bringing authentic Indian flavours
              to everyday kitchens through carefully crafted spices and masalas.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              From everyday powdered spices to flavourful blended masalas, our
              range is created with a simple idea — make every meal more
              delicious.
            </p>

            {/* Numbers / Philosophy */}
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="about-number text-4xl font-black text-[#e51b23]">
                  KKG
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  Kothari Masale
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="about-number text-4xl font-black text-[#171717]">
                  Pure
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  Taste & Quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
