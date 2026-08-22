import React from "react";
import {
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const CompanyContactInfo = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">

          <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-[#08A94F] mb-3">
            Contact Information
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16458F]">
            Get In Touch With Us
          </h2>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-7">
            Connect with Burgos Pharma for pharmaceutical enquiries,
            product information, and business requirements.
          </p>

        </div>

        {/* Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Company Name */}
          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-6
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                w-14
                h-14
                mx-auto
                mb-5
                rounded-full
                bg-[#16458F]/10
                flex
                items-center
                justify-center
                text-[#16458F]
                text-xl
              "
            >
              <FaBuilding />
            </div>

            <h3 className="text-lg font-bold text-[#16458F] mb-2">
              Company Name
            </h3>

            <p className="text-gray-600">
              Burgos Pharma
            </p>
          </div>

          {/* Mobile Number */}
          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-6
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                w-14
                h-14
                mx-auto
                mb-5
                rounded-full
                bg-[#08A94F]/10
                flex
                items-center
                justify-center
                text-[#08A94F]
                text-xl
              "
            >
              <FaPhone />
            </div>

            <h3 className="text-lg font-bold text-[#16458F] mb-2">
              Mobile Number
            </h3>

            <a
              href="tel:+91 9521033636"
              className="text-gray-600 hover:text-[#08A94F] transition-colors"
            >
              +91 9521033636
            </a>
          </div>

          {/* Email */}
          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-6
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                w-14
                h-14
                mx-auto
                mb-5
                rounded-full
                bg-[#16458F]/10
                flex
                items-center
                justify-center
                text-[#16458F]
                text-xl
              "
            >
              <FaEnvelope />
            </div>

            <h3 className="text-lg font-bold text-[#16458F] mb-2">
              Email Address
            </h3>

            <a
              href="mailto:Burgospharma15@gmail.com"
              className="
                text-gray-600
                hover:text-[#08A94F]
                transition-colors
                break-all
              "
            >
              Burgospharma15@gmail.com
            </a>
          </div>

          {/* Registered Address */}
          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-6
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className="
                w-14
                h-14
                mx-auto
                mb-5
                rounded-full
                bg-[#08A94F]/10
                flex
                items-center
                justify-center
                text-[#08A94F]
                text-xl
              "
            >
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-lg font-bold text-[#16458F] mb-2">
              Registered Address
            </h3>

            <p className="text-gray-600 leading-6">
              C-66, Valmiki Marg,
              <br />
              Hanuman Nagar,
              <br />
              Jaipur - 302021
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyContactInfo;
