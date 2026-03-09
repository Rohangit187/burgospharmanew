import {
  FaSearchPlus,
  FaFlask,
  FaLeaf,
  FaShieldAlt,
  FaClinicMedical,
  FaHandsHelping,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const activities = [
  {
    title: "Advanced Skin Diagnosis",
    desc: "Thorough clinical evaluation to accurately diagnose skin, hair, and nail conditions for effective treatment.",
    icon: <FaSearchPlus />,
    Image: "/about-school.jpg",
  },
  {
    title: "Evidence-Based Dermatology",
    desc: "Scientific, research-backed treatments designed to deliver safe and proven results.",
    icon: <FaFlask />,
    Image: "/about-school.jpg",
  },
  {
    title: "Comprehensive Skin Wellness",
    desc: "Holistic approach addressing underlying causes to promote long-term skin health and balance.",
    icon: <FaLeaf />,
    Image: "/about-school.jpg",
  },
  {
    title: "Hair & Scalp Restoration",
    desc: "Targeted solutions to strengthen hair, improve scalp health, and control hair fall.",
    icon: <FaShieldAlt />,
    Image: "/about-school.jpg",
  },
  {
    title: "Modern Dermatology Care",
    desc: "Integration of advanced medical knowledge with updated diagnostic and treatment techniques.",
    icon: <FaClinicMedical />,
    Image: "/about-school.jpg",
  },
  {
    title: "Preventive Skin Care",
    desc: "Guidance and treatment plans focused on maintaining healthy skin and preventing future concerns.",
    icon: <FaHandsHelping />,
    Image: "/about-school.jpg",
  },
];

const CurriculumActivities = () => {
  return (
    <section className="relative py-10 bg-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-40 -left-40 w-96 h-96 bg-black rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <span className="inline-block bg-yellow-100 text-black px-4 py-1 rounded-full text-xl font-medium mb-4">
            Explore All Services
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
            Beyond Symptom Relief, – 
            <span className="text-yellow-500">Toward Complete Skin Wellness </span>
          </h2>

          <p className="mt-6 text-gray-700">
            Our approach combines advanced medical science with personalized care — 
            helping patients achieve healthy skin, renewed confidence, and overall well-being.
          </p>
        </div>

        {/* Activities */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((item, index) => (
            <Link
              to="/full-curriculum"
              key={index}
              className="group relative h-[260px] rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-2"
            >
              <img
                src={item.Image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/30 group-hover:ring-yellow-400/60 transition" />

              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="w-12 h-12 mb-4 rounded-xl bg-yellow-400 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm text-white/90">{item.desc}</p>

                
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
       
      </div>
    </section>
  );
};

export default CurriculumActivities;
