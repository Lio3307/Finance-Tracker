const Testimonial = () => {
  return (
    <>
      <section className="relative z-30 max-w-5xl mx-auto w-full px-10 bg-transparent text-black py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5 mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Testimonials
          </h2>
          <p className="text-lg font-medium text-slate-700/70">
            Discover how our service can benefit you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">
          <div className="border border-neutral-200/50 p-7 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 col-span-1 lg:col-span-2 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-4">
              <h3 className="font-bold text-xl text-gray-900">
                Brilliant house to rent
              </h3>
              <p className="font-medium text-slate-600 leading-relaxed">
                All eFounders teams have moved to Cycle for all things product
                management and it is truly a game-changer.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/54.jpg"
                alt="Jane Cooper"
                className="h-10 w-10 rounded-full object-cover"
              />
              <p className="pt-2 text-sm font-semibold text-gray-900">
                Jane Cooper
              </p>
              <p className="text-sm font-medium text-slate-600">
                CEO at ABC Corporation
              </p>
            </div>
          </div>

          <div className="border border-neutral-200/50 p-7 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 col-span-1 lg:col-span-3 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-4">
              <h3 className="font-bold text-xl text-gray-900">
                Efficient customer support
              </h3>
              <p className="font-medium text-slate-600 leading-relaxed">
                The customer support team at our service is incredibly
                responsive and helpful. They went above and beyond to assist me
                with my issue.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/30.jpg"
                alt="Emily Smith"
                className="h-10 w-10 rounded-full object-cover"
              />
              <p className="pt-2 text-sm font-semibold text-gray-900">
                Emily Smith
              </p>
              <p className="text-sm font-medium text-slate-600">
                Marketing Manager at ABC Company
              </p>
            </div>
          </div>

          <div className="border border-neutral-200/50 p-7 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 col-span-1 lg:col-span-3 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-4">
              <h3 className="font-bold text-xl text-gray-900">
                Seamless integration process
              </h3>
              <p className="font-medium text-slate-600 leading-relaxed">
                Integrating our systems with our service was smooth and
                hassle-free. The support team guided us through every step of
                the process.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/women/90.jpg"
                alt="Sarah Brown"
                className="h-10 w-10 rounded-full object-cover"
              />
              <p className="pt-2 text-sm font-semibold text-gray-900">
                Sarah Brown
              </p>
              <p className="text-sm font-medium text-slate-600">
                CTO at XYZ Corporation
              </p>
            </div>
          </div>

          <div className="border border-neutral-200/50 p-7 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 col-span-1 lg:col-span-2 flex flex-col gap-y-10 justify-between">
            <div className="flex flex-col gap-y-4">
              <h3 className="font-bold text-xl text-gray-900">
                Reliable service uptime
              </h3>
              <p className="font-medium text-slate-600 leading-relaxed">
                Our service has consistently maintained high uptime, ensuring
                that our operations run smoothly without any disruptions.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="https://randomuser.me/api/portraits/men/90.jpg"
                alt="James White"
                className="h-10 w-10 rounded-full object-cover"
              />
              <p className="pt-2 text-sm font-semibold text-gray-900">
                James White
              </p>
              <p className="text-sm font-medium text-slate-600">
                COO at XYZ Corporation
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 overflow-hidden blur-3xl">
          <div className="w-[72rem] h-[50rem] mx-auto bg-gradient-to-tr from-pink-300 via-indigo-300 to-purple-300 opacity-30 rounded-full"></div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
