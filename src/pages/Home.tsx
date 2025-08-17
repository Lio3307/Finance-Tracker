import { lazy, Suspense } from "react";

const Header = lazy(() => import("../components/layouts/Home/Header"));
const HeroSection = lazy(
  () => import("../components/layouts/Home/HeroSection")
);
const AboutUs = lazy(() => import("../components/layouts/Home/AboutUs"));
const Features = lazy(() => import("../components/layouts/Home/Features"));
const Testimonial = lazy(
  () => import("../components/layouts/Home/Testimonial")
);
const Faq = lazy(() => import("../components/layouts/Home/Faq"));
const Footer = lazy(() => import("../components/layouts/Home/Footer"));
const CTA = lazy(() => import("../components/layouts/Home/CTA"));
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const Home = () => {
  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, async (user) => {
      if (user) {
        window.location.href = "/dashboard/home";
      } else {
        return;
      }
    });

    return () => unsubs();
  }, []);
  return (
    <>
      <Suspense
        fallback={
          <div className="flex mt-[14rem] justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        }
      >
        <Header />
        <HeroSection />
        <AboutUs />
        <Features />
        <Testimonial />
        <Faq />
        <CTA />
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
