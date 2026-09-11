import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import ProductsPreview from "../components/ProductsPreview";
import QualitySection from "../components/QualitySection";
import AboutPreview from "../components/AboutPreview";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      return;
    }

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
    }, 150);

    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <main>
      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* Products Preview */}
      <section id="products">
        <ProductsPreview />
      </section>

      {/* Quality */}
      <section id="quality">
        <QualitySection />
      </section>

      {/* About */}
      <section id="about">
        <AboutPreview />
      </section>
    </main>
  );
};

export default Home;
