import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const productRef = useRef(null);
  const spice1Ref = useRef(null);
  const spice2Ref = useRef(null);
  const spice3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-small-text", {
        y: 30,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          titleRef.current.querySelectorAll(".hero-word"),
          {
            y: 100,
            opacity: 0,
            rotateX: -80,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.3",
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          ".hero-buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          productRef.current,
          {
            scale: 0.7,
            opacity: 0,
            y: 80,
            rotate: 8,
            duration: 1.2,
          },
          "-=0.8",
        );

      // Floating spices
      gsap.to(spice1Ref.current, {
        y: -18,
        rotation: 8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(spice2Ref.current, {
        y: 20,
        rotation: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(spice3Ref.current, {
        y: -15,
        rotation: 12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll parallax
      // Scroll parallax
// Desktop/tablet par hi chalega
const mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  gsap.to(productRef.current, {
    ease: "none",
    scrollTrigger: {
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#fff8ed]"
    >
      {/* Background decorative circle */}
      <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#e51b23]/10" />

      <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#f4b400]/10" />

      {/* Decorative dots */}
      <div className="absolute left-[8%] top-[25%] grid grid-cols-4 gap-2 opacity-30">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#e51b23]" />
        ))}
      </div>

      <div className="absolute bottom-[20%] right-[8%] grid grid-cols-4 gap-2 opacity-20">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#171717]" />
        ))}
      </div>

      {/* Floating spice elements */}
      <div
        ref={spice1Ref}
        className="absolute left-[8%] top-[45%] hidden text-5xl md:block"
      >
        🌶️
      </div>

      <div
        ref={spice2Ref}
        className="absolute right-[42%] top-[18%] hidden text-4xl md:block"
      >
        🌿
      </div>

      <div
        ref={spice3Ref}
        className="absolute bottom-[18%] right-[10%] hidden text-5xl md:block"
      >
        🌶️
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 pb-16 pt-32 md:grid-cols-2 md:px-10 lg:px-16">
        {/* Left Content */}
        <div className="max-w-2xl">
          <p className="hero-small-text mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#e51b23]">
            Kothari Masale
          </p>

          <h1
            ref={titleRef}
            className="overflow-visible text-5xl font-black leading-[1] tracking-tight text-[#171717] sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            <span className="hero-word inline-block">Pure.</span>
            <br />

            <span className="hero-word inline-block text-[#e51b23]">
              Hygienic.
            </span>
            <br />

            <span className="hero-word inline-block">Tasty.</span>
          </h1>

          <p className="hero-description mt-9 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
            Bringing authentic Indian flavours to every kitchen with carefully
            crafted spices and masalas.
          </p>

          {/* Buttons */}
          <div className="hero-buttons mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="/products"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="rounded-full bg-[#e51b23] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition-colors hover:bg-[#c9151c]"
            >
              Explore Products
            </motion.a>
          </div>
        </div>

        {/* Right Product */}
        <div className="relative flex items-center justify-center">
          {/* Product background circle */}
          <div className="absolute h-[330px] w-[330px] rounded-full bg-[#e51b23] sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]" />

          {/* Inner circle */}
          <div className="absolute h-[270px] w-[270px] rounded-full border border-white/30 sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]" />

          {/* Product */}
          <motion.div
            ref={productRef}
            whileHover={{
              scale: 1.04,
              rotate: -2,
            }}
            transition={{
              duration: 0.4,
            }}
            className="relative z-10"
          >
            {/* img */}
            {/* Product Showcase */}
            <div className="relative flex h-[360px] w-full items-center justify-center sm:h-[430px] lg:h-[500px]">
              {/* Background Circle */}
              <div
                className="absolute h-[300px] w-[300px] rounded-full bg-[#e51b23] sm:h-[380px] sm:w-[380px] lg:h-[430px] lg:w-[430px]"
              />

              {/* Left Product */}
              <motion.img
                src="/products/Raita.png"
                alt="Kothari Raita"
                className="relative z-10 w-40 md:w-48 object-contain -rotate-6 mr-[-35px] mb-8"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -10, rotate: -3 }}
              />

              {/* Middle Product - BIGGER */}
              <motion.img
                src="/products/garam.png"
                alt="Kothari Garam Masala"
                className="relative z-20 w-64 md:w-72 object-contain"
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                whileHover={{ y: -15, scale: 1.03 }}
              />

              {/* Right Product */}
              <motion.img
                src="/products/Pani-puri.png"
                alt="Kothari Pani-puri"
                className="relative z-10 w-40 md:w-48 object-contain rotate-6 ml-[-35px] mb-8"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -10, rotate: 3 }}
              />
            </div>
          </motion.div>

          {/* Small floating badge */}
          <div className="absolute bottom-8 left-0 z-20 rounded-2xl bg-white px-5 py-3 shadow-xl sm:bottom-12 sm:left-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Authentic
            </p>
            <p className="text-sm font-black text-[#171717]">Indian Spices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
