import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-black">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Company Logo & Description */}
          <div>
            <div className="mb-6 w-full max-w-[220px]">
              <img
                src="/Logo1.jpg"
                alt="Burgos Pharma"
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-sm leading-7 text-gray-700">
              Burgos Pharma is a trusted pharmaceutical company offering a wide range of 
              quality products, including tablets, capsules, syrups, injectables, dry powders, 
              and contrast media. We are committed to maintaining high standards of quality, efficacy,
               and timely supply, delivering pharmaceutical
               products that meet the evolving needs of healthcare professionals and patients.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">
              Products
            </h4>

            <ul className="space-y-3 text-sm text-gray-700">
              <li>Tablets</li>
              <li>Capsules</li>
              <li>Syrups</li>
              <li>Injectables</li>
              <li>Dry Powders</li>
              <li>Contrast Media</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">
              Contact Details
            </h4>

            <ul className="space-y-5 text-sm text-gray-700">

              {/* Address */}
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-yellow-500 mt-1 shrink-0" />

                <span>
                  Registered Address: C-66, Valmiki Marg, Hanuman Nagar,
                  Jaipur, Rajasthan 302021
                </span>
              </li>

              {/* Phone */}
              <li className="flex gap-3 items-start">
                <FaPhoneAlt className="text-yellow-500 mt-1 shrink-0" />

                <a
                  href="tel:+919521263636"
                  className="hover:text-yellow-600 transition"
                >
                 +91 9521033636
                </a>
              </li>

              {/* Email */}
              <li className="flex gap-3 items-start">
                <FaEnvelope className="text-yellow-500 mt-1 shrink-0" />

                <a
                  href="mailto:Burgospharma15@gmail.com"
                  className="hover:text-yellow-600 transition break-all"
                >
                  Burgospharma15@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <FaEnvelope className="text-yellow-500 mt-1 shrink-0" />

                <a
                  href="mailto:Burgospharma15@gmail.com"
                  className="hover:text-yellow-600 transition break-all"
                >
                  pushpendra@burgospharma.com
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-yellow-200 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Burgos Pharma. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
