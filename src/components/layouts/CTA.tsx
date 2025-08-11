const CTA = () => {
  return (
    <>
      <section className="relative z-30 bg-transparent text-slate-700 body-font py-[4rem]">
        <div className="container px-6 py-24 mx-auto">
          <div className="backdrop-blur-xl bg-transparent border border-white/20 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center shadow-2xl">
            <div className="flex-grow text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
                Elevate Your Business to the Next Level
              </h1>
              <p className="text-gray-700 text-lg max-w-xl">
                Unlock powerful tools and premium insights designed to help you
                grow faster, smarter, and more efficiently. Start your 14-day
                free trial today—no credit card required.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-indigo-600 hover:to-blue-700">
                <span>Get Started</span>
                <svg
                  className="w-6 h-6 ml-3"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
