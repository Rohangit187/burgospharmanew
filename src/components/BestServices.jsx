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
    title: "Comprehensive care for all allergies, pediatric conditions, and psychiatric disorders",
    desc: "We identify the root cause of piles by understanding bowel habits, pain, bleeding patterns, and lifestyle factors to ensure effective and long-term care.",
    icon: FaUserMd,
  },
  {
    title: "Psychiatric care with personalized, compassionate counseling wherever needed",
    desc: "We provide comprehensive psychiatric care tailored to individual needs. Personalized and compassionate counseling is offered wherever required to support emotional well-being and recovery",
    icon: FaBalanceScale,
  },
  {
    title: "Diabetes",
    desc: "We assess blood sugar levels, lifestyle, family history, and metabolic health to manage diabetes safely and naturally",
    icon: FaChartLine,
  },
  {
    title: "Arthritis",
    desc: "Joint pain and stiffness are evaluated through movement analysis, medical history, and lifestyle assessment to improve mobility.",
    icon: FaUserInjured,
  },
  {
    title: "Disc Degeneration",
    desc: "Back and neck problems are diagnosed by analyzing pain patterns, posture, nerve symptoms, and spinal reports.",
    icon: FaWheelchair,
  },
  {
    title: "Psoriasis",
    desc: "Skin condition is assessed by examining flare-ups, triggers, immunity, and recurrence to treat from within.",
    icon: FaAllergies,
  },
  {
    title: "Kidney Stones",
    desc: "Diagnosis focuses on pain symptoms, scan reports, diet, and hydration habits to prevent recurrence.",
    icon: FaProcedures,
  },
  {
    title: "Piles",
    desc: "We identify allergy triggers and immune sensitivity to reduce frequency and intensity of symptoms.",
    icon: FaAllergies,
  },
  {
    title: "Infertility",
    desc: "Reproductive health is evaluated through hormonal balance, cycle patterns, reports, and lifestyle factors.",
    icon: FaBaby,
  },
  {
    title: "Asthma",
    desc: "Breathing issues are assessed by understanding triggers, immunity, and attack frequency for long-term control",
    icon: FaLungs,
  },
  {
    title: "Irregular Periods",
    desc: "Menstrual health is diagnosed by evaluating cycle regularity, hormones, stress, and overall wellness.",
    icon: FaFemale,
  },
  {
    title: "UTI",
    desc: "Urinary symptoms are analyzed along with reports and recurrence history for complete relief.",
    icon: FaTint,
  },
  {
    title: "Ulcer",
    desc: "Digestive health is assessed by studying pain, acidity, food habits, and stress levels.",
    icon: FaBurn,
  },
  {
    title: "Hepatitis",
    desc: "Liver health is evaluated through symptom analysis, medical reports, and immunity assessment.",
    icon: FaVirus,
  },
  {
    title: "Thyroid Disorder",
    desc: "Thyroid issues are diagnosed by evaluating symptoms, hormone balance, stress levels, and available reports for a personalized approach.",
    icon: FaVirus,
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
