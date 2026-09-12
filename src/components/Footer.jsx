import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#171717] text-white"
    >
      {/* Top Red Strip */}
      <div className="h-1 w-full bg-[#e51b23]" />

      <div className="footer-content mx-auto max-w-7xl px-6 pb-8 pt-20 sm:px-10 lg:px-16">
        {/* Main Footer */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#e51b23] bg-white">
                <img
                  src="/logo.png"
                  alt="Kothari Masale"
                  className="h-11 w-11 object-contain"
                />
              </div>

              <div>
                <p className="text-xl font-black tracking-[0.12em]">KOTHARI</p>

                <p className="mt-1 text-[9px] font-bold tracking-[0.3em] text-[#e51b23]">
                  MASALE
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/50">
              Bringing authentic Indian flavours to everyday kitchens through
              carefully crafted spices and masalas.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="/#home"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#e51b23]"
              >
                Home
              </Link>

              <Link
                to="/#products"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#e51b23]"
              >
                Products
              </Link>

              <Link
                to="/#quality"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#e51b23]"
              >
                Quality
              </Link>

              <Link
                to="/#about"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#e51b23]"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
              Products
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="/products#everyday"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#e51b23]"
              >
                Everyday Masalas
              </Link>

              <Link
                to="/products#curry-gravy"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#e51b23]"
              >
                Curry & Gravy Masalas
              </Link>

              <Link
                to="/products#special"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#e51b23]"
              >
                Special Recipe Masalas
              </Link>

              <Link
                to="/products#chaat"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#e51b23]"
              >
                Chaat & Refreshment
              </Link>

              <Link
                to="/products#tea"
                className="w-fit text-sm text-white/70 transition-colors hover:text-[#e51b23]"
              >
                Tea & Beverage
              </Link>

              <Link
                to="/products"
                className="w-fit text-sm font-semibold text-white transition-colors hover:text-[#e51b23]"
              >
                All Products →
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                  Email
                </p>

                <a
                  href="mailto:info@kotharimasale.com"
                  className="mt-1 block text-sm text-white/70 transition-colors hover:text-[#e51b23]"
                >
                  kotharimasale691@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                  Phone
                </p>

                <a
                  href="tel:+910000000000"
                  className="mt-1 block text-sm text-white/70 transition-colors hover:text-[#e51b23]"
                >
                  +91 9950899859
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                  Location
                </p>

                <p className="mt-1 text-sm leading-6 text-white/70">India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 pt-7 text-[11px] text-white/30 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kothari Masale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
