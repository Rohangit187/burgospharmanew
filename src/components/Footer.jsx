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
             Dr Neha Choudhary- skin and hair clinic

            </div>

            <p className="mt-4 text-sm leading-relaxed text-black">
              Dr. Neha Choudhary’s Clinic is a renowned dermatological 
              clinic in Jagatpura, Jaipur, that specializes in providing treatment for skin, 
              hair, nail, and venereal diseases. By providing advanced medical facilities and 
              treatment plans, the clinic specializes in providing safe and effective results 
              in the following areas:acne, psoriasis, eczema, pigmentation, hair loss, and skin infections.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://maps.app.goo.gl/du3sd9Fjsj4ruUrg6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://maps.app.goo.gl/du3sd9Fjsj4ruUrg6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="https://maps.app.goo.gl/du3sd9Fjsj4ruUrg6"
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
              <li>Well-Equipped Dermatology Consultation Room</li>
              <li>Sterile & Hygienic Treatment Area</li>
              <li>Comfortable Patient Waiting Area</li>
              <li>Digital Record Maintenance</li>
              <li>Easy Appointment Scheduling</li>
              <li>Hygienic & Calm Environment</li>
            </ul>
          </div>

          {/* Treatment */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wide mb-5">
              Treatment
            </h4>
            <ul className="space-y-3 text-sm text-black">
              <li className="hover:text-yellow-400 cursor-pointer">Acne & Acne Scar Treatment </li>
              <li className="hover:text-yellow-400 cursor-pointer">Psoriasis Treatment</li>
              <li className="hover:text-yellow-400 cursor-pointer">Eczema & Allergy Management</li>
              <li className="hover:text-yellow-400 cursor-pointer">Hair Fall & Hair Loss Treatments</li>
              <li className="hover:text-yellow-400 cursor-pointer">General Dermatology Consultation</li>
            <li className="hover:text-yellow-400 cursor-pointer">Skin Tag & Wart Removal</li>

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
                Kalyan Hospital, Akshay Patra Chouraha, B-3, Mahal Yojana, Mahal Scheme, Jagatpura, Jaipur, Rajasthan 302017
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="text-yellow-400" />
                <a href="tel:+919672170090" className="hover:text-yellow-400">
                  +91 7988632262
                </a>
              </li>

              <li className="flex gap-3">
                <FaEnvelope className="text-yellow-400" />
                <a
                  href="mailto:absolutehomeopathy00@gmail.com"
                  className="hover:text-yellow-400"
                >
                  Drnehaskinclinic199@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Dr Neha Choudhary- skin and hair clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;