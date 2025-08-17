import { Link } from "react-router-dom";
import { motion } from "motion/react";

const CTA = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
          delay: 0.3,
        }}
      >
        <section className="relative z-30 bg-transparent text-slate-700 body-font py-[4rem]">
          <div className="container px-6 py-24 mx-auto">
            <div className="backdrop-blur-xl bg-transparent border border-white/20 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center shadow-2xl">
              <div className="flex-grow text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
                  Take Control of Your Finances Today
                </h1>
                <p className="text-gray-700 text-lg max-w-xl">
                  Track your income, expenses, and savings with ease. Our
                  finance tracker helps you stay on budget, reach your goals,
                  and build a healthier financial future.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  to={"/auth/signUp"}
                  className="relative hover:cursor-pointer inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-indigo-600 hover:to-blue-700"
                >
                  <span>Get Started</span>
                  <svg
                    className="w-6 h-6 ml-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default CTA;
