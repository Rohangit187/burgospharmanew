import {
  FaUserMd,
  FaBalanceScale,
  FaChartLine,
  FaUserInjured,
  FaWheelchair,
  FaAllergies,
  FaProcedures,
  FaBaby,
  FaLungs,
  FaFemale,
  FaTint,
  FaBurn,
  FaVirus,
} from "react-icons/fa";

const services = [
  {
    title: "Specialisation in Allergies",
    desc: "asthma/ Allergic rhinitis, urticaria/ gluten intolerance.",
    icon: FaUserMd,
  },
  {
    title: "skin allergies & skin disorders",
    desc: "gentle homeopathic treatment that addresses the root cause to provide safe, natural, and long-lasting relief from itching, rashes, eczema, psoriasis, and other skin conditions",
    icon: FaBalanceScale,
  },
  {
    title: "Specialisation in thyorid gland diseases",
    desc: "Expert homeopathic care focused on balancing thyroid function naturally, helping manage conditions like hypothyroidism and hyperthyroidism with safe, long-term relief.",
    icon: FaChartLine,
  },
  {
    title: "All chronic diseases ",
    desc: "Diabetes /Hypertension/ Migraines, Renal & Gall stones, Neurological Disorders.",
    icon: FaUserInjured,
  },
  {
    title: "Digestive disorders ",
    desc: "Specialisation in all Gastric complaints, including constipation & PILES",
    icon: FaUserInjured,
  },
  {
    title: "Joints & Spinal complaints",
    desc: "Gout, Rheutmatic and osteoarthritis.",
    icon: FaWheelchair,
  },
  {
    title: "Comprehensive Paediatric Care for Congenital, Developmental & Behavioural Disorders",
    desc: "All types of Paediatric disorders including Congenital, developmental and behavioural disorders.",
    icon: FaAllergies,
  },
  {
    title: "Women’s Health – Specialisation in PCOS, Infertility & Menstrual Disorders",
    desc: "Personalized homeopathic care focused on restoring hormonal balance naturally, supporting regular cycles, improving fertility, and managing PCOS and other menstrual concerns with safe and holistic treatment.",
    icon: FaProcedures,
  },
  {
    title: "Psychiatric Disorders Care",
    desc: "Effective and compassionate homeopathic support combined with personalized counselling sessions tailored to individual needs, promoting emotional balance, mental well-being, and long-term recovery.",
    icon: FaAllergies,
  },
 
];

const BestServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20 mx-auto text-center">
          <h2 className="text-4xl font-bold text-black leading-tight">
            More Than Facilities,
            <span className="text-yellow-500"> We Build Futures</span>
          </h2>

          <p className="mt-6 text-gray-700">
            Our services are thoughtfully designed to support academic growth,
            emotional well-being, and lifelong confidence.
          </p>
        </div>

        {/* Services Flow */}
        <div className="space-y-16">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  isReverse ? "md:flex-row-reverse" : ""
                } items-start md:items-center gap-10`}
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-yellow-400 text-black text-2xl shadow-md">
                  <Icon />
                </div>

                {/* Content */}
                <div className="max-w-xl">
                  <h3 className="text-2xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Connector Line */}
                <div className="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestServices;
