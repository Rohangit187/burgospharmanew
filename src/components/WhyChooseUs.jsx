import {
  FaPhoneAlt,
  FaMicroscope,
 FaCapsules,
  FaNotesMedical,
 FaLeaf,
} from "react-icons/fa";

const facilities = [
  {
    title: "Online Consultation (Call Facility)",
    desc: "You can consult online through our secure online system",
    icon: FaPhoneAlt,
  },
  {
    title: "Advanced Diagnostic Labs",
    desc: "Modern diagnostic equipment for accurate assessment and treatment..",
    icon: FaMicroscope,
  },
  {
    title: "Well-Equipped Pharmacy",
    desc: "In-house pharmacy with authentic, high-quality homeopathic medicines.",
    icon:FaCapsules,
  },
  {
    title: "Digital Health Records (Safe Medical History)",
    desc: "Patient health records of past in proper online system",
    icon: FaNotesMedical,
  },
  {
    title: "Hygienic & Calm Environment",
    desc: "Sterilized instruments, clean environments, and trained staff.",
    icon:FaLeaf,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-14 bg-[#FFFEF9] overflow-hidden">
        
      {/* Soft accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[2px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block bg-yellow-100 text-black px-4 py-1 rounded-full text-xl font-medium">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-black">
             Facilities That 
            <span className="text-yellow-500"> Support Complete Healing</span>
          </h2>

          <p className="mt-6 text-gray-700">
            Our clinic is thoughtfully equipped to support accurate diagnosis, 
            effective treatment, and overall patient well-being.
          </p>
        </div>

          {/* Central guide line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200" />
        {/* Horizontal Facilities Flow */}
        <div className="relative">

          <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-5">
            {facilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative text-center">
                  {/* Icon Node */}
                  <div className="mx-auto w-16 h-16 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-lg">
                    <Icon size={22} />
                  </div>

                  {/* Content */}
                  <h4 className="mt-6 text-lg font-semibold text-black">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center max-w-xl mx-auto text-gray-700 text-sm">
         Each treatment at Absolute Homeopathy is thoughtfully designed to
          meet patients where they are — physically, emotionally, and holistically.
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
