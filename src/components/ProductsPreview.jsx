import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductsPreview = () => {
  const sectionRef = useRef(null);

  const products = [
    {
      name: "Garam Masala",
      category: "Everyday Masalas",
      image: "/products/garam.png",
    },
    {
      name: "Pav Bhaji Masala",
      category: "Special Recipe Masalas",
      image: "/products/Pav_Bhaji.jpeg",
    },
    {
      name: "Pani Puri Masala",
      category: "Chaat & Refreshment",
      image: "/products/Pani-puri.png",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".preview-heading", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".preview-card", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".preview-grid",
          start: "top 82%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fff8ed] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="preview-heading mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#e51b23]">
              Our Collection
            </p>

            <h2 className="text-4xl font-black tracking-tight text-[#171717] sm:text-5xl md:text-6xl">
              Flavour in
              <span className="text-[#e51b23]"> every pack.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Discover Kothari's range of authentic spices and masalas, crafted
              to bring delicious flavours to every kitchen.
            </p>
          </div>

          {/* View All */}
          <Link
            to="/products"
            className="group flex w-fit items-center gap-3 rounded-full border border-[#171717] px-6 py-3 text-sm font-bold text-[#171717] transition-all duration-300 hover:bg-[#e51b23] hover:border-[#e51b23] hover:text-white"
          >
            View All Products
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Product Cards */}
        <div className="preview-grid grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.name}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.35 }}
              className="preview-card group overflow-hidden rounded-[28px] bg-white shadow-sm"
            >
              {/* Image */}
              <div className="relative flex h-[400px] items-center justify-center overflow-hidden bg-[#f6efe4]">
                {/* Background circle */}
                <div className="absolute h-[260px] w-[260px] rounded-full bg-[#e51b23]/10 transition-transform duration-700 group-hover:scale-110" />

                {/* Decorative dots */}
                <div className="absolute right-6 top-6 grid grid-cols-3 gap-1.5 opacity-30">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span
                      key={index}
                      className="h-1.5 w-1.5 rounded-full bg-[#e51b23]"
                    />
                  ))}
                </div>

                <motion.img
                  src={product.image}
                  alt={`Kothari ${product.name}`}
                  className="relative z-10 h-[340px] w-auto object-contain drop-shadow-[0_20px_18px_rgba(0,0,0,0.2)]"
                  whileHover={{
                    scale: 1.06,
                    rotate: -2,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Card Content */}
              <div className="flex items-center justify-between p-6">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e51b23]">
                    {product.category}
                  </p>

                  <h3 className="text-xl font-black text-[#171717]">
                    {product.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gray-300" />

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            Pure • Hygienic • Tasty
          </span>

          <span className="h-px w-12 bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
