import Hero from "../components/Hero";
import ProductsPreview from "../components/ProductsPreview";
import QualitySection from "../components/QualitySection";
import AboutPreview from "../components/AboutPreview";

const Home = () => {
  return (
    <main>
      <Hero />

      <ProductsPreview />

      <QualitySection />

      <AboutPreview />

      {/* Next section */}
    </main>
  );
};

export default Home;