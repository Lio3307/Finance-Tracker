import Header from "../components/layouts/Header";
import HeroSection from "../components/layouts/HeroSection";
import AboutUs from "../components/layouts/AboutUs";
import Features from "../components/layouts/Features";
import Testimonial from "../components/layouts/Testimonial";
import Faq from "../components/layouts/Faq";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Features />
      <Testimonial/>
      <Faq/>
    </>
  );
};

export default Home;
