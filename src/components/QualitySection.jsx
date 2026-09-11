import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QualitySection = () => {
  const sectionRef = useRef(null);

  const qualityPoints = [
    {
      number: "01",
      title: "Pure Ingredients",
      text: "Carefully selected spices for authentic taste and aroma.",
    },
    {
      number: "02",
      title: "Hygienic Processing",
      text: "Made with attention to cleanliness and product hygiene.",
    },
    {
      number: "03",
      title: "Authentic Flavour",
      text: "Traditional Indian flavours crafted for everyday cooking.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".quality-content", {
        x: -70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".quality-visual", {
        x: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".quality-point", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".quality-points",
          start: "top 82%",
        },
      });

      gsap.to(".quality-circle", {
        y: -15,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Main Quality Block */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="quality-content">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#e51b23]">
              Our Promise
            </p>

            <h2 className="max-w-xl text-5xl font-black leading-[0.95] tracking-tight text-[#171717] sm:text-6xl">
              Quality you can
              <span className="block text-[#e51b23]">taste.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              At Kothari, we believe great food begins with great spices. Every
              blend is made with care to bring authentic Indian taste to your
              everyday meals.
            </p>

            {/* Quality Points */}
            <div className="quality-points mt-10 space-y-5">
              {qualityPoints.map((point) => (
                <div
                  key={point.number}
                  className="quality-point group flex gap-5 border-b border-gray-100 pb-5"
                >
                  {/* Number */}
                  <span className="pt-1 text-xs font-bold tracking-widest text-[#e51b23]">
                    {point.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-black text-[#171717]">
                      {point.title}
                    </h3>

                    <p className="mt-1 max-w-md text-sm leading-6 text-gray-500">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="quality-visual relative">
            <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[40px] bg-[#fff8ed]">
              {/* Large red circle */}
              <div className="quality-circle absolute h-[360px] w-[360px] rounded-full bg-[#e51b23] sm:h-[420px] sm:w-[420px]" />

              {/* Inner circle */}
              <div className="absolute h-[290px] w-[290px] rounded-full border border-white/30 sm:h-[340px] sm:w-[340px]" />

              {/* Decorative leaves */}
              <div className="absolute left-8 top-10 text-4xl">🌿</div>

              <div className="absolute bottom-10 right-8 text-3xl">🌶️</div>

              {/* Center content */}
              <div className="relative z-10 text-center text-white">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/70">
                  Kothari Masale
                </p>

                <h3 className="mt-5 text-6xl font-black leading-none sm:text-7xl">
                  PURE.
                </h3>

                <h3 className="text-6xl font-black leading-none sm:text-7xl">
                  HYGIENIC.
                </h3>

                <h3 className="text-6xl font-black leading-none sm:text-7xl">
                  TASTY.
                </h3>

                <div className="mx-auto mt-7 h-px w-20 bg-white/50" />

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  Made for Indian kitchens
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
