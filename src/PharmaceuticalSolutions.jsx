import React from "react";
import {
  FaPills,
  FaCapsules,
  FaFlask,
  FaSyringe,
  FaVial,
  FaXRay,
} from "react-icons/fa";

const PharmaceuticalSolutions = () => {
  const products = [
    {
      title: "Tablets",
      description:
        "Quality pharmaceutical tablets designed for reliable and effective healthcare solutions.",
      icon: <FaPills />,
    },
    {
      title: "Capsules",
      description:
        "Reliable capsule formulations developed to support diverse healthcare requirements.",
      icon: <FaCapsules />,
    },
    {
      title: "Syrups",
      description:
        "Patient-friendly liquid formulations offering convenient pharmaceutical solutions.",
      icon: <FaFlask />,
    },
    {
      title: "Injectables",
      description:
        "High-quality injectable solutions manufactured with a strong focus on safety and consistency.",
      icon: <FaSyringe />,
    },
    {
      title: "Dry Powder",
      description:
        "Specialized dry powder pharmaceutical formulations designed for dependable healthcare use.",
      icon: <FaVial />,
    },
    {
      title: "Contrast Media",
      description:
        "Specialized contrast media solutions supporting diagnostic imaging and healthcare professionals.",
      icon: <FaXRay />,
    },
  ];

  return (
    <section className="w-full bg-[#F7FAFC] py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-[#08A94F] mb-3">
            Our Healthcare Solutions
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16458F] leading-tight">
            Pharmaceutical Solutions You Can Trust
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-7">
            Burgos Pharma offers a diverse range of pharmaceutical
            formulations developed to support healthcare needs with a focus on
            quality, reliability, and consistency.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#EAF7F0] text-[#08A94F] text-2xl mb-5 group-hover:bg-[#16458F] group-hover:text-white transition-all duration-300">
                {product.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#16458F] mb-3">
                {product.title}
              </h3>

              <p className="text-gray-600 leading-6 text-sm sm:text-base">
                {product.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PharmaceuticalSolutions;