import Header from "../components/layouts/Home/Header";
import HeroSection from "../components/layouts/Home/HeroSection";
import AboutUs from "../components/layouts/Home/AboutUs";
import Features from "../components/layouts/Home/Features";
import Testimonial from "../components/layouts/Home/Testimonial";
import Faq from "../components/layouts/Home/Faq";
import Footer from "../components/layouts/Home/Footer";
import CTA from "../components/layouts/Home/CTA";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Features />
      <Testimonial/>
      <Faq/>
      <CTA/>
      <Footer/>
    </>
  );
};

export default Home;
