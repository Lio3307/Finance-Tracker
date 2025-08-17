import { motion } from "motion/react";

const Features = () => {
  return (
    <div className="bg-transparent relative z-30">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
                WHY CHOOSE US
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Powerful Finance Tracking Features
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
                Tools and insights designed to help you take control of your
                money and reach your financial goals.
              </p>
            </motion.div>
          </div>

            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{
              duration: 0.3,
              ease:"easeIn",
              delay: 0.3,
            }}
            >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Instant Expense Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Log your expenses and incomes in seconds, keeping your records
                always up to date.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Bank-Level Security
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your financial data is encrypted and securely stored, ensuring
                complete privacy.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Simple & Clear Dashboard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Easily navigate your income, expenses, and savings with our
                user-friendly interface.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                24/7 Financial Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get help anytime from our expert support team for your finance
                tracking needs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Regular Feature Upgrades
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Stay ahead with new tools and reports added every two weeks.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reliable Data Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access your financial data anytime with 99.9% uptime guaranteed.
              </p>
            </div>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
