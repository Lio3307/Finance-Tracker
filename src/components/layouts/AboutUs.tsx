const AboutUs = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 py-24">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Transform Ideas Into Reality
            </h1>
            <p className="text-lg text-gray-600">
              Collaborate with our expert team to craft digital products that
              delight and inspire your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="bg-indigo-600 text-white px-5 py-3 rounded-md shadow hover:bg-indigo-500"
              >
                Get Started
              </a>
              <a
                href="#"
                className="border border-gray-300 px-5 py-3 rounded-md hover:bg-gray-50"
              >
                Our Work
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              src="https://dummyimage.com/500x350"
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
