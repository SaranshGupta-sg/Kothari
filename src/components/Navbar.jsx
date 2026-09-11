import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();

  // ================= SCROLL NAVBAR =================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================= ACTIVE HOME SECTIONS =================

  useEffect(() => {
    // Sirf Home page par section tracking karni hai
    if (location.pathname !== "/") {
      return;
    }

    const qualitySection = document.getElementById("quality");
    const aboutSection = document.getElementById("about");

    if (!qualitySection || !aboutSection) {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      const qualityTop = qualitySection.offsetTop;
      const aboutTop = aboutSection.offsetTop;

      // About section
      if (scrollPosition >= aboutTop) {
        setActiveSection("about");
      }

      // Quality section
      else if (scrollPosition >= qualityTop) {
        setActiveSection("quality");
      }

      // Home / Hero / Products Preview
      else {
        setActiveSection("home");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);


  const productLinks = [
    { name: "All Products", path: "/products" },
    { name: "Blended Masalas", path: "/products/blended-masalas" },
    { name: "Powdered Spices", path: "/products/powdered-spices" },
    { name: "Hing", path: "/products/hing" },
  ];

  // ================= CLOSE MENU =================

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  // ================= SCROLL TO SECTION =================

  const scrollToSection = (id) => {
    // Agar already Home page par hain
    if (location.pathname === "/") {
      const section = document.getElementById(id);

      if (section) {
        setActiveSection(id);

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      closeMenu();
      return;
    }

    // Agar kisi aur page par hain
    window.location.href = `/#${id}`;
  };

  // ================= HOME =================

  const handleHomeClick = () => {
    closeMenu();

    if (location.pathname === "/") {
      setActiveSection("home");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-[#fffaf2]/95 shadow-[0_4px_25px_rgba(0,0,0,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[82px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:px-12">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          onClick={handleHomeClick}
          className="flex items-center"
        >
          <img
            src="/logo.png"
            alt="Kothari Masale"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">

          {/* ================= HOME ================= */}

          <NavLink
            to="/"
            onClick={handleHomeClick}
            className={() =>
              `relative py-2 text-[14px] font-semibold tracking-wide transition-colors duration-300 ${
                location.pathname === "/" && activeSection === "home"
                  ? "text-[#e51b23]"
                  : "text-[#222] hover:text-[#e51b23]"
              }`
            }
          >
            Home

            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#e51b23] transition-all duration-300 ${
                location.pathname === "/" && activeSection === "home"
                  ? "w-full"
                  : "w-0"
              }`}
            />
          </NavLink>

          {/* ================= PRODUCTS ================= */}

          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <NavLink
              to="/products"
              className={() =>
                `relative flex items-center gap-1 py-2 text-[14px] font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
                  location.pathname.startsWith("/products")
                    ? "text-[#e51b23]"
                    : "text-[#222] hover:text-[#e51b23]"
                }`
              }
            >
              Products

              <svg
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19 9-7 7-7-7"
                />
              </svg>

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#e51b23] transition-all duration-300 ${
                  location.pathname.startsWith("/products")
                    ? "w-full"
                    : "w-0"
                }`}
              />
            </NavLink>

            {/* Products Dropdown */}

            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full mt-4 w-[250px] -translate-x-1/2 overflow-hidden rounded-2xl border border-black/5 bg-[#fffaf2] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                >
                  {productLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-[#333] transition-all duration-200 hover:bg-[#e51b23] hover:pl-5 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ================= QUALITY ================= */}

          <button
            type="button"
            onClick={() => scrollToSection("quality")}
            className={`relative py-2 text-[14px] font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
              location.pathname === "/" && activeSection === "quality"
                ? "text-[#e51b23]"
                : "text-[#222] hover:text-[#e51b23]"
            }`}
          >
            Quality

            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#e51b23] transition-all duration-300 ${
                location.pathname === "/" && activeSection === "quality"
                  ? "w-full"
                  : "w-0"
              }`}
            />
          </button>

          {/* ================= ABOUT US ================= */}

          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className={`relative py-2 text-[14px] font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
              location.pathname === "/" && activeSection === "about"
                ? "text-[#e51b23]"
                : "text-[#222] hover:text-[#e51b23]"
            }`}
          >
            About Us

            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#e51b23] transition-all duration-300 ${
                location.pathname === "/" && activeSection === "about"
                  ? "w-full"
                  : "w-0"
              }`}
            />
          </button>

        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#e51b23] lg:hidden"
        >
          <div className="flex w-5 flex-col gap-[5px]">

            <motion.span
              animate={
                isMenuOpen
                  ? { rotate: 45, y: 7 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-[2px] w-full bg-white"
            />

            <motion.span
              animate={
                isMenuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              className="block h-[2px] w-full bg-white"
            />

            <motion.span
              animate={
                isMenuOpen
                  ? { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-[2px] w-full bg-white"
            />

          </div>
        </button>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/5 bg-[#fffaf2] lg:hidden"
          >
            <nav className="mx-auto flex max-w-[1440px] flex-col px-6 py-6 sm:px-8">

              {/* ================= MOBILE HOME ================= */}

              <NavLink
                to="/"
                onClick={handleHomeClick}
                className={() =>
                  `border-b border-black/5 py-4 text-lg font-semibold ${
                    location.pathname === "/" &&
                    activeSection === "home"
                      ? "text-[#e51b23]"
                      : "text-[#222]"
                  }`
                }
              >
                Home
              </NavLink>

              {/* ================= MOBILE PRODUCTS ================= */}

              <div className="border-b border-black/5">

                <button
                  type="button"
                  onClick={() =>
                    setIsProductsOpen(!isProductsOpen)
                  }
                  className={`flex w-full items-center justify-between py-4 text-left text-lg font-semibold ${
                    location.pathname.startsWith("/products")
                      ? "text-[#e51b23]"
                      : "text-[#222]"
                  }`}
                >
                  Products

                  <svg
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="overflow-hidden pb-3"
                    >
                      {productLinks.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={closeMenu}
                          className="block py-2 pl-4 text-sm font-medium text-[#666] transition-colors hover:text-[#e51b23]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* ================= MOBILE QUALITY ================= */}

              <button
                type="button"
                onClick={() => {
                  setActiveSection("quality");
                  scrollToSection("quality");
                }}
                className={`relative border-b border-black/5 py-4 text-left text-lg font-semibold ${
                  location.pathname === "/" &&
                  activeSection === "quality"
                    ? "text-[#e51b23]"
                    : "text-[#222]"
                }`}
              >
                Quality
              </button>

              {/* ================= MOBILE ABOUT ================= */}

              <button
                type="button"
                onClick={() => {
                  setActiveSection("about");
                  scrollToSection("about");
                }}
                className={`relative py-4 text-left text-lg font-semibold ${
                  location.pathname === "/" &&
                  activeSection === "about"
                    ? "text-[#e51b23]"
                    : "text-[#222]"
                }`}
              >
                About Us
              </button>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;