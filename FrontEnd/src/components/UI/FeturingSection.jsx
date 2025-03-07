import {Hospital, Handshake, Send} from "lucide-react";
const FeturingSection = () => {
  const features = [
    {
      icon: <Send />,
      title: "Quick Reporting",
      desc: "Simple incident reporting system with real-time updates and location tracking",
    },
    {
      icon: <Handshake />,
      title: "Volunteer Netwok",
      desc: "Join our network of 1000+ volunteers working together to make a difference",
    },
    {
      icon: <Hospital />,
      title: "Professional Care",
      desc: "Partnered with leading veterinary clinics and animal welfare organizations",
    },
  ];
  return (
    <section className="py-14 bg-gray-50 ">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 ">
        <div className="max-w-screen space-y-3 text-center px-10">
          <h3 className="text-teal-600 font-semibold">Our Values</h3>
          <p className="text-teal-600 text-3xl font-extrabold sm:text-4xl pt-4">
            What We Offer?
          </p>
          <p>
            From instant reporting to professional care, we ensure every animal
            gets the help they need.
          </p>
        </div>
        <div className="mt-25">
          <ul className="grid gap-x-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 max-[640px]:gap-y-12 ">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="
               lg:py-12 lg:px-5 border-4 border-teal-600 rounded-2xl max-[650px]:gap-y-12 hover:shadow-2xl sm:px-8 sm:py-12 max-[650px]:py-12 max-[650px]:px-8  "
              >
                <div className="w-12 h-12 border-3 text-teal-600 rounded-full flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-bold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeturingSection;
