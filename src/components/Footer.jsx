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
              <div className="w-10 h-10 rounded-full bg-yellow-50 text-black flex items-center justify-center">
                {/* You can place logo here */}
              </div>
              Absolute Homeopathy
            </div>

            <p className="mt-4 text-sm leading-relaxed text-black">
              At Absolute Homeopathy, we see healing as a personal journey.
              Each patient’s health story is different, and we take the time to understand the 
              individual as a whole—delivering safe, gentle, and effective homeopathic 
              treatment tailored to their needs.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/share/1TwFAJfjKu/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://www.instagram.com/nehagupta8883?igsh=bTVtNGhpNGFuNGZr&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="https://www.instagram.com/nehagupta8883?igsh=bTVtNGhpNGFuNGZr&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Clinic Facilities */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wide mb-5">
              Clinic Facilities
            </h4>
            <ul className="space-y-3 text-sm text-black">
              <li>Online Consultation</li>
              <li>Advanced Diagnostic</li>
              <li>Well-Equipped Pharmacy</li>
              <li>Digital Health Records</li>
              <li>Hygienic & Calm Environment</li>
            </ul>
          </div>

          {/* Treatment */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wide mb-5">
              Treatment
            </h4>
            <ul className="space-y-3 text-sm text-black">
              <li className="hover:text-yellow-400 cursor-pointer">All types of Allergies </li>
              <li className="hover:text-yellow-400 cursor-pointer">Joints disorders</li>
              <li className="hover:text-yellow-400 cursor-pointer">Paediatric diseases</li>
              <li className="hover:text-yellow-400 cursor-pointer">PCOS, menstrual problems</li>
              <li className="hover:text-yellow-400 cursor-pointer">⁠Thyroid, Diabetes, HTN</li>
            <li className="hover:text-yellow-400 cursor-pointer">PILES, KIDNEY & GALL STONES</li>

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
                Hamidpur Road, near Patwar Ghar, Meero Ka Mohla, Jharoda, Behror, Rajasthan 301701
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="text-yellow-400" />
                <a href="tel:+919672170090" className="hover:text-yellow-400">
                  +91 9672170090
                </a>
              </li>

              <li className="flex gap-3">
                <FaEnvelope className="text-yellow-400" />
                <a
                  href="mailto:absolutehomeopathy00@gmail.com"
                  className="hover:text-yellow-400"
                >
                  absolutehomeopathy00@gmail.com
                </a>
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