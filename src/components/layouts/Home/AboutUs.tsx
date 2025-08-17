import { Link } from "react-router-dom";
import { motion } from "motion/react";
import useIsMobile from "../../../hooks/useIsMobile";

const AboutUs = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <section className="text-gray-400 bg-transparent relative z-30 body-font">
        <div className="container mx-auto flex px-5 py-[8rem] md:flex-row flex-col items-center">
          {/* Container Gambar */}
          <motion.div
            initial={{
              opacity: 0,
              x: isMobile ? 0 : -50,
              y: isMobile ? 50 : 0,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            // Tambahkan kelas flexbox untuk menengahkan konten di mobile
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 flex justify-center"
          >
            <div className="md:mb-0 mb-10">
              <img
                className="object-cover object-center rounded w-full"
                alt="hero"
                src="https://dummyimage.com/720x600"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Teks */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                Manage Your Finance <br className="hidden lg:inline-block" />
                Smarter and Faster
              </h1>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: isMobile ? 0 : 50,
                y: isMobile ? 50 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="mb-8 leading-relaxed">
                Track expenses, set budgets, and get real-time insights to stay
                on top of your financial goals.
              </p>
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link
                  to={"/auth/signUp"}
                  className="inline-flex text-black hover:text-white hover:cursor-pointer outline-2 outline-sky-500 bg-transparent border-0 py-2 px-[2.7rem] focus:outline-none hover:bg-sky-500 rounded text-lg"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
