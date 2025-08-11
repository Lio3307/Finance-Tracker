import Header from "../components/layouts/Header";
import HeroSection from "../components/layouts/HeroSection";
import AboutUs from "../components/layouts/AboutUs";
import Features from "../components/layouts/Features";
import Testimonial from "../components/layouts/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Features />
      <Testimonial/>
    </>
  );
};

export default Home;
