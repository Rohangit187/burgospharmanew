import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-black">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 text-xl font-semibold text-black">
              <div className="w-10 h-10 rounded-full bg-yellow-50s text-black flex items-center justify-center">
                
              </div>
              Absolute Homeopathy
            </div>

            <p className="mt-4 text-sm leading-relaxed text-black">
              At Absolute Homeopathy, we see healing as a personal journey.
               Each patient’s health story is different, and we take the time to understand the 
               individual as a whole—delivering safe, 
              gentle, and effective homeopathic treatment tailored to their needs.”.
            </p>

            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wide mb-5">
              CLinic Facilities
            </h4>
            <ul className="space-y-3 text-sm text-black">
              <li>Online Consultation</li>
              <li>Advanced Diagnostic</li>
              <li>Well-Equipped Pharmacy</li>
              <li>Digital Health Records</li>
              <li>Hygienic & Calm Environment</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wide mb-5">
              Treatment
            </h4>
            <ul className="space-y-3 text-sm text-black">
              <li className="hover:text-yellow-400 cursor-pointer">Piles</li>
              <li className="hover:text-yellow-400 cursor-pointer">Thyroid Disorders</li>
              <li className="hover:text-yellow-400 cursor-pointer">Kidney Stones</li>
              <li className="hover:text-yellow-400 cursor-pointer">Asthma</li>
              <li className="hover:text-yellow-400 cursor-pointer">Irregular Periods</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wide mb-5">
              Get in Touch
            </h4>

            <ul className="space-y-4 text-sm text-black">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                URBANA JEWELS JAIPUR, TA 416, Muhana Mandi Rd, Jaipur, Keshyawala, Rajasthan 302029
              </li>
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                 Hamidpur road, near Patwar ghar, Meero Ka Mohla, Jharoda, Behror, Rajasthan 301701              </li>
              <li className="flex gap-3">
                <FaPhoneAlt className="text-yellow-400" />
                +91 9672170090
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="text-yellow-400" />
                absolutehomeopathy00@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Absolute Homeopathy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
