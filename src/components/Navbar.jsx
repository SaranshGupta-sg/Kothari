import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Quality", path: "/quality" },
    { name: "Recipes", path: "/recipes" },
  ];

  const productLinks = [
    { name: "All Products", path: "/products" },
    { name: "Blended Masalas", path: "/products/blended-masalas" },
    { name: "Powdered Spices", path: "/products/powdered-spices" },
    { name: "Hing", path: "/products/hing" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
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
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img
            src="/logo.png"
            alt="Kothari Masale"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative py-2 text-[14px] font-semibold tracking-wide transition-colors duration-300 ${
                isActive ? "text-[#e51b23]" : "text-[#222] hover:text-[#e51b23]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#e51b23] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 py-2 text-[14px] font-semibold tracking-wide text-[#222] transition-colors duration-300 hover:text-[#e51b23]"
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
            </button>

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

          {/* Other Links */}
          {navLinks.slice(1).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-[14px] font-semibold tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-[#e51b23]"
                    : "text-[#222] hover:text-[#e51b23]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#e51b23] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#e51b23] px-6 py-3 text-[13px] font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9151c] hover:shadow-[0_10px_25px_rgba(229,27,35,0.25)] lg:flex"
        >
          Contact Us
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14m-6-6 6 6-6 6"
            />
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#e51b23] lg:hidden"
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-full bg-white"
            />

            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-full bg-white"
            />

            <motion.span
              animate={
                isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              className="block h-[2px] w-full bg-white"
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
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
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-black/5 py-4 text-lg font-semibold ${
                    isActive ? "text-[#e51b23]" : "text-[#222]"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Mobile Products */}
              <div className="border-b border-black/5">
                <button
                  type="button"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold text-[#222]"
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
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

              {/* Remaining Links */}
              {navLinks.slice(1).map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `border-b border-black/5 py-4 text-lg font-semibold ${
                      isActive ? "text-[#e51b23]" : "text-[#222]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile Contact */}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-6 flex items-center justify-center rounded-full bg-[#e51b23] px-6 py-4 text-sm font-bold text-white"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
