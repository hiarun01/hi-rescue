const AchivmentSection = () => {
  const stats = [
    {
      data: "800+",
      title: "Animals Rescued",
    },
    {
      data: "24/7",
      title: "Emergency Support",
    },
    {
      data: "50+",
      title: "Partner NGOs",
    },
  ];
  return (
    <section className="py-14 bg-gray-50 ">
      <div className="max-w-screen-xl mx-auto px-4  text-gray-600 md:px-8 h-[50vh]">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-teal-600 text-3xl font-extrabold sm:text-4xl mb-5">
            Our Achivment
          </h3>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis sollicitudin quam ut tincidunt.
          </p>
        </div>
        <div className="mt-20">
          <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap ">
            {stats.map((item, idx) => (
              <li key={idx} className="text-center px-12 md:px-16">
                <h4 className="text-4xl text-teal-600 font-extrabold">
                  {item.data}
                </h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AchivmentSection;
