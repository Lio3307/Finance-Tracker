import { motion } from "motion/react";

const Testimonial = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
          delay: 0.3,
        }}
      >
        <section className="relative z-30 max-w-5xl mx-auto w-full px-10 bg-transparent text-black py-20">
          <div className="flex items-center justify-center flex-col gap-y-2 py-5 mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Testimonials
            </h2>
            <p className="text-lg font-medium text-slate-700/70">
              Discover how our finance tracker helps users manage money smarter
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">
            <div className="border border-neutral-200/50 p-7 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 col-span-1 lg:col-span-2 flex flex-col gap-y-10 justify-between">
              <div className="flex flex-col gap-y-4">
                <h3 className="font-bold text-xl text-gray-900">
                  Clear savings goals
                </h3>
                <p className="font-medium text-slate-600 leading-relaxed">
                  The tracker makes it easy to set and monitor my savings
                  targets. I can finally see my progress toward buying a new
                  home.
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="https://randomuser.me/api/portraits/women/54.jpg"
                  alt="Jane Cooper"
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <p className="pt-2 text-sm font-semibold text-gray-900">
                  Jane Cooper
                </p>
                <p className="text-sm font-medium text-slate-600">
                  User of Finance Tracker
                </p>
              </div>
            </div>

            <div className="border border-neutral-200/50 p-7 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 col-span-1 lg:col-span-3 flex flex-col gap-y-10 justify-between">
              <div className="flex flex-col gap-y-4">
                <h3 className="font-bold text-xl text-gray-900">
                  Stress-free expense tracking
                </h3>
                <p className="font-medium text-slate-600 leading-relaxed">
                  I no longer worry about where my money goes each month. The
                  tracker automatically organizes my spending into categories.
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="https://randomuser.me/api/portraits/women/30.jpg"
                  alt="Emily Smith"
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <p className="pt-2 text-sm font-semibold text-gray-900">
                  Emily Smith
                </p>
                <p className="text-sm font-medium text-slate-600">
                  Freelance Designer
                </p>
              </div>
            </div>

            <div className="border border-neutral-200/50 p-7 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 col-span-1 lg:col-span-3 flex flex-col gap-y-10 justify-between">
              <div className="flex flex-col gap-y-4">
                <h3 className="font-bold text-xl text-gray-900">
                  Smarter budgeting
                </h3>
                <p className="font-medium text-slate-600 leading-relaxed">
                  Creating budgets used to be overwhelming. Now the tracker
                  gives me a clear monthly plan and alerts when I overspend.
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="https://randomuser.me/api/portraits/women/90.jpg"
                  alt="Sarah Brown"
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <p className="pt-2 text-sm font-semibold text-gray-900">
                  Sarah Brown
                </p>
                <p className="text-sm font-medium text-slate-600">
                  Startup Founder
                </p>
              </div>
            </div>

            <div className="border border-neutral-200/50 p-7 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 col-span-1 lg:col-span-2 flex flex-col gap-y-10 justify-between">
              <div className="flex flex-col gap-y-4">
                <h3 className="font-bold text-xl text-gray-900">
                  Consistent financial growth
                </h3>
                <p className="font-medium text-slate-600 leading-relaxed">
                  Thanks to the tracker, I’ve built the habit of saving
                  regularly. My emergency fund has grown steadily for the first
                  time.
                </p>
              </div>
              <div className="flex flex-col">
                <img
                  src="https://randomuser.me/api/portraits/men/90.jpg"
                  alt="James White"
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <p className="pt-2 text-sm font-semibold text-gray-900">
                  James White
                </p>
                <p className="text-sm font-medium text-slate-600">
                  Small Business Owner
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 overflow-hidden blur-3xl">
            <div className="w-[72rem] h-[50rem] mx-auto bg-gradient-to-tr from-pink-300 via-indigo-300 to-purple-300 opacity-30 rounded-full"></div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Testimonial;
