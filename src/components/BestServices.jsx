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
    title: "Diseases of the Skin",
    desc: "Comprehensive diagnosis and treatment for acute and chronic skin conditions.",
    icon: FaUserMd,
  },
  {
    title: "Hair Fall / Hair Loss",
    desc: "Personalized therapy to control hair thinning and promote regrowth",
    icon: FaBalanceScale,
  },
  {
    title: "Skin Tags / Warts Removal",
    desc: "Safe and effective removal of unwanted skin growths.",
    icon: FaChartLine,
  },
  {
    title: "Scars / Keloid Treatment",
    desc: "Specialized care to reduce scars and keloid formation.",
    icon: FaUserInjured,
  },
  {
    title: "Eczema / Allergies",
    desc: "Effective treatment to relieve itching, inflammation, and skin irritation",
    icon: FaUserInjured,
  },
  {
    title: "Acne & Acne Scars",
    desc: "Advanced treatment to control acne and reduce permanent scarring.",
    icon: FaWheelchair,
  },
  {
    title: "Hair & Nail Disorders",
    desc: "Expert care for hair problems and nail-related diseases.",
    icon: FaAllergies,
  },
  {
    title: "Melasma Treatment",
    desc: "Targeted solutions for pigmentation and uneven skin tone",
    icon: FaProcedures,
  },
  {
    title: "Other Dermatological Services",
    desc: "Consultation and treatment for various additional skin concerns..",
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
