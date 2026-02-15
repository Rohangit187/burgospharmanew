import { FaStar } from "react-icons/fa";

const achievements = [
  {
    title: "National Scientific Paper Presentation",
    desc: "Delivered a scientific presentation at the 23rd All India Homeopathic Scientific Seminar, organized by the Homeopathic Medical Association of India, showcasing academic excellence and clinical expertis.",
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
    <section className="relative py-8 bg-neutral-950 text-white overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[2px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />
      <div className="absolute bottom-20 right-0 w-3xl h-1/2 bg-yellow-300/30 rounded-full blur-3xl" />
      <div className="absolute top-20 left-0 w-3xl h-1/2 bg-yellow-300/30 rounded-full blur-3xl" />
      {/* Accent line */}
      <div className="absolute top-24 left-0 right-0 h-[1px] bg-white/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xl tracking-[0.3em] uppercase text-yellow-400">
            Recognition
          </span>
          <h2 className="mt-4 text-5xl font-extrabold">
            Moments That
            <span className="text-yellow-400"> Defined Us</span>
          </h2>
        </div>

        {/* Runway */}
        <div className="space-y-12">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Strip */}
              <div className="relative w-full lg:w-1/2 h-96 overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-110 object-fill grayscale hover:grayscale-0 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Content */}
              <div className="max-w-lg">
                <div className="flex items-center gap-3 text-yellow-400">
                  <FaStar />
                  <span className="text-xl font-semibold">{item.year}</span>
                </div>

                <h3 className="mt-4 text-3xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-10 h-[2px] w-20 bg-yellow-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsRunway;
