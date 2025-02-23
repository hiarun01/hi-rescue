const HeroSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[70vh] lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Every Action Matter
            <strong className="font-extrabold text-teal-600 sm:block">
              A Street Animal Needs You
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Every street animal deserves love and care. Join us in giving them a
            second chance. your action today can save a life.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-sm bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="#"
            >
              Report
            </a>

            <a
              className="block w-full rounded-sm px-12 py-3 text-sm font-medium text-teal-500 shadow-sm hover:text-teal-600 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="#"
            >
              Join
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
