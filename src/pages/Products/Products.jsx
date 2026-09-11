import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const pageRef = useRef(null);

  const products = [
    {
      name: "Garam Masala",
      category: "Blended Masalas",
      image: "/products/garam-masala.png",
      description: "Aromatic blend for rich and authentic Indian flavours.",
    },
    {
      name: "Pani Puri Masala",
      category: "Blended Masalas",
      image: "/products/pani-puri.png",
      description: "The perfect tangy and spicy flavour for every pani puri.",
    },
    {
      name: "Raita Masala",
      category: "Blended Masalas",
      image: "/products/raita.png",
      description: "A delicious spice blend to add freshness to your raita.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      heroTimeline
        .from(".products-label", {
          y: 30,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".products-title",
          {
            y: 80,
            opacity: 0,
            duration: 1,
          },
          "-=0.3",
        )
        .from(
          ".products-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        );

      // Product cards reveal
      gsap.from(".product-card", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".products-grid",
          start: "top 80%",
        },
      });

      // Section headings
      gsap.utils.toArray(".section-heading").forEach((heading) => {
        gsap.from(heading, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
          },
        });
      });

      // Floating decorative elements
      gsap.to(".floating-spice-one", {
        y: -20,
        rotation: 8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-spice-two", {
        y: 18,
        rotation: -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen overflow-hidden bg-[#fff8ed]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-[70vh] items-center justify-center px-6 pb-20 pt-36">
        {/* Decorative circles */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#e51b23]/10" />

        <div className="absolute -bottom-52 -left-40 h-[500px] w-[500px] rounded-full bg-[#f4b400]/10" />

        {/* Floating decorative spice */}
        <div className="floating-spice-one absolute left-[8%] top-[30%] hidden text-5xl md:block">
          🌶️
        </div>

        <div className="floating-spice-two absolute right-[10%] top-[25%] hidden text-4xl md:block">
          🌿
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="products-label mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#e51b23]">
            Kothari Masale
          </p>

          <h1 className="products-title text-5xl font-black leading-[0.95] tracking-tight text-[#171717] sm:text-6xl md:text-8xl">
            Our
            <span className="text-[#e51b23]"> Spices.</span>
          </h1>

          <p className="products-description mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover the authentic taste of Kothari Masale — carefully crafted
            spices and masalas made to bring delicious flavours to every meal.
          </p>
        </div>
      </section>

      {/* =====================================================
          BLENDED MASALAS
      ====================================================== */}

      <section className="relative px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="section-heading mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#e51b23]">
                Explore Our Range
              </p>

              <h2 className="text-4xl font-black tracking-tight text-[#171717] sm:text-5xl md:text-6xl">
                Blended Masalas
              </h2>
            </div>

            <Link
              to="/products/blended-masalas"
              className="group flex w-fit items-center gap-2 text-sm font-bold text-[#171717]"
            >
              View all
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Product Grid */}
          <div className="products-grid grid gap-7 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="product-card group relative overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm"
              >
                {/* Image Area */}
                <div className="relative flex h-[430px] items-end justify-center overflow-hidden bg-[#f7f1e7] p-8">
                  {/* Background circle */}
                  <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e51b23]/10 transition-transform duration-700 group-hover:scale-110" />

                  {/* Decorative dots */}
                  <div className="absolute right-6 top-6 grid grid-cols-3 gap-1.5 opacity-30">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-1 w-1 rounded-full bg-[#e51b23]"
                      />
                    ))}
                  </div>

                  {/* Product Image */}
                  <motion.img
                    src={product.image}
                    alt={`Kothari ${product.name}`}
                    className="relative z-10 h-[360px] w-auto object-contain drop-shadow-[0_20px_18px_rgba(0,0,0,0.20)]"
                    whileHover={{
                      scale: 1.06,
                      rotate: index % 2 === 0 ? -2 : 2,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  />

                  {/* Category badge */}
                  <div className="absolute left-5 top-5 z-20 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#e51b23] shadow-sm backdrop-blur-sm">
                    {product.category}
                  </div>
                </div>

                {/* Product Information */}
                <div className="p-7">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black text-[#171717]">
                      {product.name}
                    </h3>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#171717] text-lg text-white transition-all duration-300 group-hover:bg-[#e51b23]">
                      ↗
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-gray-500">
                    {product.description}
                  </p>

                  <div className="mt-6 h-[1px] w-full bg-gray-100" />

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Kothari
                    </span>

                    <span className="text-xs font-bold text-[#e51b23]">
                      Pure • Hygienic • Tasty
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          POWDERED SPICES
      ====================================================== */}

      <section className="relative bg-[#171717] px-6 py-28 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#e51b23]">
              Pure Ground Spices
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Powdered Spices
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Everyday essentials made to add authentic colour, aroma and
              flavour to your cooking.
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["Haldi", "Mirchi", "Dhaniya"].map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  scale: 1.02,
                }}
                className="group flex min-h-[180px] items-end justify-between rounded-3xl border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:bg-[#e51b23]"
              >
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white/70">
                    100gm • 200gm • 500gm • 1kg
                  </p>

                  <h3 className="text-3xl font-black">{item}</h3>
                </div>

                <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/products/powdered-spices"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#171717] transition-transform duration-300 hover:-translate-y-1"
            >
              Explore Powdered Spices
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          HING
      ====================================================== */}

      <section className="px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#e51b23]">
                Everyday Essential
              </p>

              <h2 className="text-5xl font-black leading-none tracking-tight text-[#171717] sm:text-6xl">
                The perfect
                <span className="block text-[#e51b23]">pinch of Hing.</span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
                A little hing can transform the aroma and taste of your
                favourite dishes.
              </p>

              <Link
                to="/products/hing"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#e51b23] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9151c]"
              >
                Explore Hing
                <span>→</span>
              </Link>
            </div>

            {/* Hing visual */}
            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-[35px] bg-[#f7f1e7]">
              <div className="absolute h-[260px] w-[260px] rounded-full bg-[#e51b23]" />

              <div className="relative z-10 text-center">
                <div className="text-7xl">🌿</div>

                <p className="mt-5 text-5xl font-black text-[#171717]">HING</p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-[#e51b23]">
                  10gm • 20gm • 40gm • 100gm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#e51b23] px-6 py-24 text-white sm:px-10">
        <div className="absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full border border-white/20" />

        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full border border-white/10" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-white/60">
            Taste the Difference
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Bring Kothari
            <br />
            to your kitchen.
          </h2>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#e51b23] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            View All Products
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Products;
