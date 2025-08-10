const HeroSection = () => {
  return (
    <>
      <section className="bg-white">
        <div className="relative isolate px-6  lg:px-8">
          <div className="mx-auto max-w-2xl py-20  text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build your digital presence with confidence
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We create stunning websites and applications that help your
              business grow faster and smarter.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500"
              >
                Get Started
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
