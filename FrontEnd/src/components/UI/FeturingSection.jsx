import {Hospital, Handshake, Send} from "lucide-react";
const FeturingSection = () => {
  const features = [
    {
      icon: <Send />,
      title: "Quick Reporting",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: <Handshake />,
      title: "Volunteer Netwok",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: <Hospital />,
      title: "Professional Care",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
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
        <div className="mt-12">
          <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
            {features.map((item, idx) => (
              <li
                key={idx}
                className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
              >
                <div className="w-12 h-12 border text-teal-600 rounded-full flex items-center justify-center">
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
