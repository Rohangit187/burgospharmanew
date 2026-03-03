import { FaStar } from "react-icons/fa";

const achievements = [
  {
    title: "National Scientific Paper Presentation",
    desc: "Delivered a scientific presentation at the 23rd All India Homeopathic Scientific Seminar, organized by the Homeopathic Medical Association of India, showcasing academic excellence and clinical expertise.",
    year: "2024",
    image: "/award1.jpeg",
  },
  {
    title: "Certificate of Recognition",
    desc: "Awarded for outstanding paper presentation and valuable contribution to the field of Homeopathy at a national-level scientific seminar held in Jaipur, Rajasthan.",
    year: "2024",
    image: "/award2.jpeg",
  },
];

const AchievementsRunway = () => {
  return (
    <section className="relative py-16 bg-neutral-950 text-white overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
      <div className="absolute top-24 left-0 right-0 h-[1px] bg-white/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-yellow-400">
            Recognition
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Moments That
            <span className="text-yellow-400"> Defined Us</span>
          </h2>
        </div>

        {/* Achievement List */}
        <div className="space-y-20">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full lg:w-1/2 h-80 md:h-96 overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Content Section */}
              <div className="max-w-xl">
                <div className="flex items-center gap-3 text-yellow-400">
                  <FaStar className="text-lg" />
                  <span className="text-lg font-semibold">
                    {item.year}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl md:text-3xl font-bold leading-snug">
                  {item.title}
                </h3>

                <p className="mt-6 text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-8 h-[2px] w-20 bg-yellow-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsRunway;