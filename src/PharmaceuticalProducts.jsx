import React from "react";
import {
  FaPills,
  FaCapsules,
  FaFlask,
  FaSyringe,
  FaVial,
  FaXRay,
  FaDownload,
} from "react-icons/fa";

const PharmaceuticalProducts = ({
  showTitle = true,
  productsToShow = null,
}) => {
  const products = [
    {
      id: 1,
      title: "Tablets",
      icon: <FaPills />,
      image: "/Tablets.png",
      description:
        "Quality pharmaceutical tablets developed to provide reliable and consistent healthcare solutions.",
      pdf: "/pdf/BURGOS FINAL-01.pdf",
    },
    {
      id: 2,
      title: "Capsules",
      icon: <FaCapsules />,
      image: "/Capsule.png",
      description:
        "Reliable capsule formulations designed to meet diverse pharmaceutical and healthcare requirements.",
      pdf: "/pdf/capsules.pdf",
    },
    {
      id: 3,
      title: "Syrups",
      icon: <FaFlask />,
      image: "/Syrup.png",
      description:
        "Patient-friendly liquid pharmaceutical formulations designed for convenient healthcare applications.",
      pdf: "/pdf/syrups.pdf",
    },
    {
      id: 4,
      title: "Injectables",
      icon: <FaSyringe />,
      image: "/Injectable.png",
      description:
        "High-quality injectable pharmaceutical solutions developed with a focus on safety and consistency.",
      pdf: "/pdf/injectables.pdf",
    },
    {
      id: 5,
      title: "Dry Powder",
      icon: <FaVial />,
      image: "/Drypowder.png",
      description:
        "Specialized dry powder formulations designed to support different pharmaceutical healthcare needs.",
      pdf: "/pdf/dry-powder.pdf",
    },
    {
      id: 6,
      title: "Contrast Media",
      icon: <FaXRay />,
      image: "/Contrastmedia.png",
      description:
        "Specialized contrast media solutions supporting diagnostic imaging and modern healthcare requirements.",
      pdf: "/pdf/contrast-media.pdf",
    },
  ];

  const displayedProducts = productsToShow
    ? products.slice(0, productsToShow)
    : products;

  return (
    <section
      className="
        w-full
        bg-white
        pt-36
        sm:pt-40
        lg:pt-44
        pb-14
        sm:pb-16
        lg:pb-20
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16">

            <p
              className="
                text-sm
                sm:text-base
                font-semibold
                uppercase
                tracking-widest
                text-[#08A94F]
                mb-4
              "
            >
              Our Pharmaceutical Solutions
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-[#16458F]
                leading-tight
              "
            >
              Pharmaceutical Products
            </h2>

            <p
              className="
                mt-5
                text-gray-600
                text-base
                sm:text-lg
                leading-7
              "
            >
              Explore our range of pharmaceutical products developed to
              support healthcare professionals and patients with reliable,
              quality-focused solutions.
            </p>

          </div>
        )}

        {/* Product Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-7
          "
        >
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                border
                border-gray-200
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* Product Image */}
              <div
                className="
                  relative
                  w-full
                  h-56
                  sm:h-64
                  bg-gray-100
                  overflow-hidden
                "
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                {/* Product Icon */}
                <div
                  className="
                    absolute
                    top-4
                    left-4
                    w-12
                    h-12
                    rounded-xl
                    bg-white
                    shadow-md
                    flex
                    items-center
                    justify-center
                    text-[#08A94F]
                    text-xl
                  "
                >
                  {product.icon}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#16458F]
                    mb-3
                  "
                >
                  {product.title}
                </h3>

                <p
                  className="
                    text-gray-600
                    text-sm
                    sm:text-base
                    leading-6
                    mb-6
                  "
                >
                  {product.description}
                </p>

                {/* Download Button */}
                <a
                  href={product.pdf}
                  download
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    px-5
                    py-3
                    rounded-lg
                    bg-[#16458F]
                    text-white
                    font-semibold
                    hover:bg-[#08A94F]
                    transition-colors
                    duration-300
                  "
                >
                  <FaDownload />
                  Download PDF
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PharmaceuticalProducts;