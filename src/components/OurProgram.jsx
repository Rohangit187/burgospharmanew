import { FaLeaf, FaPuzzlePiece, FaBaby, FaFemale, FaHeartbeat } from "react-icons/fa";

const programs = [
  {
    title: "Chronic Disease Management (Root-cause Healing)",
    desc: "Effective treatment for Asthma, Arthritis, Migraines, and more.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Skin & Hair Care (Chemical-free Treatment)",
    desc: "Natural solutions for Acne, Eczema, Psoriasis, and Hair fall.",
    icon: <FaLeaf />,
  },
  {
    title: "Child Health / Pediatrics (Immunity Boost)",
    desc: "Safe, sweet remedies to boost your child's immunity.",
    icon: <FaBaby />,
  },
  {
    title: "Women's Wellness (PCOD, Thyroid Care)",
    desc: "Holistic support for Stress, Anxiety, and Sleep disorders..",
    icon: <FaFemale />,
  },
];

const Programs = () => {
  return (
    <section className="relative py-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gray-100" />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-5xl text-black">
          <span className="inline-block bg-white/60 px-4 py-1 text-black rounded-full text-xl font-bold mb-4">
            OUR SPECIALTIES
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
             Treatment Paths Designed For            
            <span className="text-yellow-400 font-bold"> Every Patient </span>
          </h2>

          <p className="mt-6 text-black leading-relaxed">
           Each treatment at Absoulte Homeopathy is thoughtfully designed to meet patients where
            they are — physically, emotionally, and holistically.
          </p>
        </div>

        {/* Program Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-200 to-orange-400 flex items-center justify-center text-white text-xl mb-6 group-hover:scale-110 transition">
                {program.icon}
              </div>

              <h4 className="text-lg font-semibold text-gray-900">
                {program.title}
              </h4>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {program.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-orange-100 transition">
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
