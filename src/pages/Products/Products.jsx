import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.substring(1);

    const timer = setTimeout(() => {
      const section = document.getElementById(id);

      if (!section) return;

      const navbarHeight = 90;

      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [location.hash]);

  // =====================================================
  // PRODUCTS DATA
  // =====================================================

  const categories = [
    {
      id: "everyday",
      label: "Everyday Flavours",
      title: "Everyday Masalas",
      description:
        "The essential Kothari blends made to bring authentic flavour to everyday Indian cooking.",
      dark: false,

      products: [
        {
          name: "Garam Masala",
          image: "/products/garam.png",
          description: "Aromatic blend for rich and authentic Indian flavours.",
          size: "50gm • 100gm",
          mrp: 90,
          saleRate: 70,
        },
        {
          name: "Kitchen King Masala",
          image: "/products/King.png",
          description:
            "A versatile blend for delicious everyday vegetable dishes.",
          size: "50gm • 100gm",
          mrp: 85,
          saleRate: 65,
        },
        {
          name: "Chana Masala",
          image: "/products/Chana.png",
          description:
            "A bold and flavourful blend for perfectly spiced chana.",
          size: "50gm • 100gm",
          mrp: 75,
          saleRate: 55,
        },
        {
          name: "Sambhar Masala",
          image: "/products/Sambhar.png",
          description: "Authentic South Indian flavour for delicious sambhar.",
          size: "100gm",
          mrp: 75,
          saleRate: 55,
        },
        {
          name: "Raita Masala",
          image: "/products/Raita.png",
          description: "A refreshing spice blend to add flavour to your raita.",
          size: "50gm • 100gm",
          mrp: 75,
          saleRate: 55,
        },
        {
          name: "Chicken Masala",
          image: "/products/Chicken.png",
          description:
            "A carefully balanced blend for rich and aromatic chicken dishes.",
          size: "50gm • 100gm",
          mrp: 90,
          saleRate: 70,
        },
        {
          name: "Meat Masala",
          image: "/products/Meat.png",
          description: "Rich spices crafted for flavourful meat preparations.",
          size: "50gm • 100gm",
          mrp: 90,
          saleRate: 70,
        },
      ],
    },

    {
      id: "curry-gravy",
      label: "Rich & Flavourful",
      title: "Curry & Gravy Masalas",
      description:
        "Rich blends created to give your curries and gravies a delicious aroma, colour and depth of flavour.",
      dark: true,

      products: [
        {
          name: "Hotel Gravy Masala",
          image: "/products/Gravy.png",
          description:
            "A rich masala blend for restaurant-style gravies at home.",
          size: "100gm",
          mrp: 75,
          saleRate: 55,
        },
        {
          name: "Gravi Masala",
          image: "/products/Gravi_masala.jpeg",
          description:
            "A flavourful blend for delicious everyday curry preparations.",
          size: "100gm",
          mrp: 85,
          saleRate: 65,
        },
        {
          name: "Rajma Masala",
          image: "/products/Rajma_Masala.jpeg",
          description: "Perfectly balanced spices for comforting rajma curry.",
          size: "100gm",
          mrp: 85,
          saleRate: 65,
        },
        {
          name: "Dal Tadka",
          image: "/products/Dal_tadka.jpeg",
          description: "Aromatic spices for a delicious traditional dal tadka.",
          size: "100gm",
          mrp: 90,
          saleRate: 70,
        },
        {
          name: "Dal Makhani",
          image: "/products/Daal_Makhani.jpeg",
          description: "A rich blend for creamy and flavourful dal makhani.",
          size: "100gm",
          mrp: 85,
          saleRate: 65,
        },
      ],
    },

    {
      id: "special",
      label: "Made For Your Favourites",
      title: "Special Recipe Masalas",
      description:
        "Specially crafted blends for some of India's favourite snacks and meals.",
      dark: false,

      products: [
        {
          name: "Pav Bhaji Masala",
          image: "/products/Pav_Bhaji.jpeg",
          description:
            "The perfect spice blend for delicious Mumbai-style pav bhaji.",
          size: "50gm • 100gm",
          mrp: 85,
          saleRate: 65,
        },
        {
          name: "Pulao Masala",
          image: "/products/Pulao.png",
          description: "Aromatic spices for fragrant and flavourful pulao.",
          size: "100gm",
          mrp: 75,
          saleRate: 55,
        },
        {
          name: "Poha Masala",
          image: "/products/Poha.png",
          description:
            "A simple blend that adds an extra burst of flavour to poha.",
          size: "50gm • 100gm",
          mrp: 75,
          saleRate: 55,
        },
        {
          name: "Pasta Masala",
          image: "/products/Pasta.png",
          description:
            "A tasty Indian-inspired blend for your favourite pasta.",
          size: "50gm • 100gm",
          mrp: 90,
          saleRate: 70,
        },
        {
          name: "Chowmein Masala",
          image: "/products/Chowmein.png",
          description: "A flavour-packed blend for delicious spicy chowmein.",
          size: "100gm",
          mrp: 90,
          saleRate: 70,
        },
      ],
    },

    {
      id: "chaat",
      label: "Street-Style Flavours",
      title: "Chaat & Refreshment",
      description:
        "Tangy, spicy and refreshing flavours inspired by India's favourite street-food classics.",
      size: "50gm • 100gm",
      dark: true,

      products: [
        {
          name: "Pani Puri Masala",
          image: "/products/Pani-puri.png",
          description:
            "The perfect tangy and spicy flavour for every pani puri.",
          size: "100gm",
          mrp: 75,
          saleRate: 55,
        },
        {
          name: "Podina Chatni",
          image: "/products/Podina_Chatni.jpeg",
          description:
            "Refreshing mint flavour to complement your favourite snacks.",
          size: "100gm",
          mrp: 75,
          saleRate: 55,
        },
      ],
    },

    {
      id: "tea",
      label: "Aromatic & Refreshing",
      title: "Tea & Beverage",
      description:
        "Aromatic flavours made to turn your everyday cup of tea into something special.",
      dark: false,

      products: [
        {
          name: "Tea Masala",
          image: "/products/Tea.png",
          description:
            "An aromatic blend for a warm, refreshing and flavourful cup of tea.",
          size: "100gm",
          mrp: 85,
          saleRate: 65,
        },
      ],
    },
  ];

  const hingProducts = [
    {
      name: "Kabuli Hing Powder",
      image: "/products/Kabuli_Hing_Powder_Green.jpeg",
      size: "20gm",
      description:
        "Premium Kabuli Hing for a rich aroma and authentic flavour.",
    },
    {
      name: "Sabut Afgani Hing",
      image: "/products/Afgani_Hing.jpeg",
      size: "10gm",
      description: "Authentic Afgani Hing with a strong and aromatic flavour.",
    },
    {
      name: "Kabuli Hing Powder",
      image: "/products/Kabuli_Hing_Powder.jpeg",
      size: "40gm",
      description:
        "Pure Kabuli Hing that adds a delicious aroma to every dish.",
    },
  ];

  const additionalSpices = [
    {
      name: "Dhaniya Powder",
      image: "/products/Dhaniya_Powder.jpeg",
      size: "100gm • 200gm • 500gm • 1kg",
    },
    {
      name: "Haldi Powder",
      image: "/products/Haldi_Powder.jpeg",
      size: "100gm • 200gm • 500gm • 1kg",
    },
    {
      name: "Laal mirch powder",
      image: "/products/Laal_mirch_powder.jpeg",
      size: "100gm • 200gm • 500gm • 1kg",
    },
    {
      name: "Soth Powder",
      image: "/products/Sond_Powder.jpeg",
      size: "Available Packing",
    },
    {
      name: "Pudina Sukha",
      image: "/products/Pudina_Sukha.jpeg",
      size: "Available Packing",
    },
    {
      name: "Amchoor Powder",
      image: "/products/Amchoor_Powder.jpeg",
      size: "Available Packing",
    },
    {
      name: "Jeeravan Masala",
      image: "/products/Jeeravan_Masala.jpeg",
      size: "Available Packing",
    },
  ];

  // =====================================================
  // GSAP ANIMATIONS
  // =====================================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      // -------------------------------
      // Hero Animation
      // -------------------------------

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
        )
        .from(
          ".category-pills",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3",
        );

      // -------------------------------
      // Product Cards
      // -------------------------------

      gsap.utils.toArray(".products-section").forEach((section) => {
        const cards = section.querySelectorAll(".product-card");
        const heading = section.querySelector(".section-heading");

        if (heading) {
          gsap.from(heading, {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          });
        }

        if (cards.length) {
          gsap.from(cards, {
            y: 80,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
            },
          });
        }
      });

      // -------------------------------
      // Floating Decorations
      // -------------------------------

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

      gsap.to(".floating-spice-three", {
        y: -15,
        rotation: 10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // =====================================================
  // JSX
  // =====================================================

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#fff8ed]"
      style={{ scrollBehavior: "auto" }}
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden px-6 pb-20 pt-36 sm:px-10">
        {/* Decorative circles */}

        <div className="absolute -right-44 -top-44 h-[520px] w-[520px] rounded-full bg-[#e51b23]/10" />

        <div className="absolute -bottom-60 -left-48 h-[550px] w-[550px] rounded-full bg-[#f4b400]/10" />

        {/* Floating spices */}

        <div className="floating-spice-one absolute left-[8%] top-[30%] hidden text-5xl md:block">
          🌶️
        </div>

        <div className="floating-spice-two absolute right-[10%] top-[25%] hidden text-4xl md:block">
          🌿
        </div>

        <div className="floating-spice-three absolute bottom-[18%] left-[18%] hidden text-3xl lg:block">
          ✨
        </div>

        {/* Hero Content */}

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="products-label mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#e51b23]">
            Kothari Masale
          </p>

          <h1 className="products-title text-5xl font-black leading-[0.92] tracking-tight text-[#171717] sm:text-6xl md:text-8xl">
            Our
            <span className="text-[#e51b23]"> Spices.</span>
          </h1>

          <p className="products-description mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover the authentic taste of Kothari Masale — carefully crafted
            spices and masalas made to bring delicious flavours to every meal.
          </p>

          {/* Category Navigation */}

          <div className="category-pills mt-10 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-xs font-bold text-[#333] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e51b23] hover:bg-[#e51b23] hover:text-white"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY SECTIONS
      ====================================================== */}

      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className={`products-section relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 ${
            category.dark ? "bg-[#171717] text-white" : "bg-[#fff8ed]"
          }`}
        >
          {/* Decorative circle */}

          <div
            className={`absolute -right-32 top-20 h-[300px] w-[300px] rounded-full border ${
              category.dark ? "border-white/5" : "border-[#e51b23]/10"
            }`}
          />

          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Section Heading */}

            <div className="section-heading mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p
                  className={`mb-3 text-xs font-bold uppercase tracking-[0.3em] ${
                    category.dark ? "text-[#e51b23]" : "text-[#e51b23]"
                  }`}
                >
                  {category.label}
                </p>

                <h2
                  className={`text-4xl font-black tracking-tight sm:text-5xl md:text-6xl ${
                    category.dark ? "text-white" : "text-[#171717]"
                  }`}
                >
                  {category.title}
                </h2>

                <p
                  className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${
                    category.dark ? "text-white/60" : "text-gray-600"
                  }`}
                >
                  {category.description}
                </p>
              </div>
            </div>

            {/* Product Grid */}

            <div
              className={`grid gap-7 ${
                category.products.length <= 2
                  ? "md:grid-cols-2 lg:max-w-3xl"
                  : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {category.products.map((product, index) => (
                <motion.div
                  key={product.name}
                  whileHover={{
                    y: -10,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className={`product-card group relative overflow-hidden rounded-[28px] border shadow-sm ${
                    category.dark
                      ? "border-white/10 bg-white/[0.06]"
                      : "border-black/5 bg-white"
                  }`}
                >
                  {/* Image Area */}

                  <div
                    className={`relative flex h-[430px] items-end justify-center overflow-hidden p-8 ${
                      category.dark ? "bg-[#202020]" : "bg-[#f7f1e7]"
                    }`}
                  >
                    {/* Background Circle */}

                    <div
                      className={`absolute left-1/2 top-1/2 h-[275px] w-[275px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-700 group-hover:scale-110 ${
                        category.dark ? "bg-[#e51b23]/15" : "bg-[#e51b23]/10"
                      }`}
                    />

                    {/* Decorative dots */}

                    <div
                      className={`absolute right-6 top-6 grid grid-cols-3 gap-1.5 ${
                        category.dark ? "opacity-20" : "opacity-30"
                      }`}
                    >
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
                      className="relative z-10 h-[360px] w-auto max-w-[90%] object-contain drop-shadow-[0_20px_18px_rgba(0,0,0,0.20)]"
                      whileHover={{
                        scale: 1.06,
                        rotate: index % 2 === 0 ? -2 : 2,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    />
                  </div>

                  {/* Product Information */}

                  {/* Product Info */}
                  <div className="p-7">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className={`text-2xl font-black ${
                            category.dark ? "text-white" : "text-[#171717]"
                          }`}
                        >
                          {product.name}
                        </h3>

                        {/* Product Size */}
                        <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#e51b23]">
                          {product.size}
                        </p>
                      </div>
                    </div>

                    <p
                      className={`text-sm leading-6 ${
                        category.dark ? "text-white/50" : "text-gray-500"
                      }`}
                    >
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* =====================================================
    HING COLLECTION - HIGHLIGHTED
====================================================== */}

      <section id="hing" className="relative overflow-hidden bg-[#171717] px-6 py-28 text-white sm:px-10 lg:px-16">
        {/* Decorative circles */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#e51b23]/20" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border border-white/5" />

        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="section-heading mb-14">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#e51b23]">
              Our Special Collection
            </p>

            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <h2 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
                  Pure <span className="text-[#e51b23]">Hing.</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Discover our premium range of Hing, carefully selected to
                  bring rich aroma and authentic flavour to your everyday
                  cooking.
                </p>
              </div>

              <div className="rounded-full border border-[#e51b23]/40 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e51b23]">
                Premium Quality
              </div>
            </div>
          </div>

          {/* Hing Products */}
          <div className="products-grid grid gap-7 md:grid-cols-3">
            {hingProducts.map((product, index) => (
              <motion.div
                key={product.name}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="product-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
              >
                {/* Image Area */}
                <div className="relative flex h-[430px] items-end justify-center overflow-hidden bg-[#f7f1e7] p-8">
                  {/* Red Circle */}
                  <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e51b23]/10 transition-transform duration-700 group-hover:scale-110" />

                  {/* Decorative dots */}
                  <div className="absolute right-6 top-6 grid grid-cols-3 gap-1.5 opacity-30">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-1 w-1 rounded-full bg-[#e51b23]"
                      />
                    ))}
                  </div>

                  {/* Premium Badge */}
                  <div className="absolute left-5 top-5 z-20 rounded-full bg-[#e51b23] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                    Premium Hing
                  </div>

                  {/* Product Image */}
                  <motion.img
                    src={product.image}
                    alt={`Kothari ${product.name}`}
                    className="relative z-10 h-[360px] w-auto object-contain drop-shadow-[0_20px_18px_rgba(0,0,0,0.25)]"
                    whileHover={{
                      scale: 1.06,
                      rotate: index % 2 === 0 ? -2 : 2,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="p-7">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-white">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#e51b23]">
                        {product.size}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-6 text-white/50">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
    ADDITIONAL POWDERED & GROUND SPICES
====================================================== */}

      <section id="more" className="relative px-6 py-28 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="section-heading mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#e51b23]">
                Pure Ground Spices
              </p>

              <h2 className="text-4xl font-black tracking-tight text-[#171717] sm:text-5xl md:text-6xl">
                More From <span className="text-[#e51b23]">Kothari.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                Everyday spices and special blends made to bring authentic
                colour, aroma and flavour to your kitchen.
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="products-grid grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {additionalSpices.map((product, index) => (
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
                {/* Image */}
                <div className="relative flex h-[350px] items-end justify-center overflow-hidden bg-[#f7f1e7] p-7">
                  {/* Background Circle */}
                  <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e51b23]/10 transition-transform duration-700 group-hover:scale-110" />

                  {/* Decorative dots */}
                  <div className="absolute right-5 top-5 grid grid-cols-3 gap-1.5 opacity-30">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-1 w-1 rounded-full bg-[#e51b23]"
                      />
                    ))}
                  </div>

                  {/* Image */}
                  <motion.img
                    src={product.image}
                    alt={`Kothari ${product.name}`}
                    className="relative z-10 h-[290px] w-auto object-contain drop-shadow-[0_18px_15px_rgba(0,0,0,0.18)]"
                    whileHover={{
                      scale: 1.06,
                      rotate: index % 2 === 0 ? -2 : 2,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-black text-[#171717]">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#e51b23]">
                        {product.size}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#e51b23] px-6 py-24 text-white sm:px-10">
        {/* Decorative Circles */}

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
        </div>
      </section>
    </main>
  );
};

export default Products;
