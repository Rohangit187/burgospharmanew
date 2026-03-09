import {
  FaBook,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaSchool,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";

const EducationHighlights = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Texture blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — CONTENT */}
          <div>
            <span className="inline-block text-sm font-medium text-yellow-600 mb-4">
              Our Dermatology Philosophy
            </span>

            <h2 className="text-4xl font-bold text-black leading-tight">
             Expert Care Based 
              <span className="block text-yellow-500">
                on Accurate Diagnosis
              </span>
            </h2>

            <p className="mt-6 text-gray-700 max-w-xl leading-relaxed">
            We combine advanced dermatology with personalized care to create a 
            treatment environment 
            where patients achieve healthy skin, lasting results, and renewed confidence
            </p>

            <div className="mt-10 space-y-4 text-gray-800">
              <Feature icon={<FaBook />} text="Accurate Diagnosis-Based Treatment" />
              <Feature icon={<FaLaptopCode />} text="Safe & Effective Dermatological Treatments" />
              <Feature icon={<FaGlobe />} text="Modern Approach to Skin Wellness" />
            </div>
          </div>

          {/* RIGHT — CIRCULAR IMAGE + CONTENT */}
          <div className="relative flex flex-col items-center text-center">

            {/* Circular Image */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img
                src="/Profile.jpeg"
                alt="Learning Environment"
                className="w-full h-full object-cover"
              />
            </div>

            

            {/* Supporting Text */}
            <p className="mt-10 text-gray-700 max-w-md">
             Safe & Effective Skin Care for Your Family. Experience personalized
              dermatology treatments for healthy skin, hair, and overall skin wellness.
            </p>

            
          </div>

        </div>
      </div>
    </section>
  );
};

/* Feature row */
const Feature = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
};

/* Floating icon bubble */
const IconBubble = ({ icon }) => {
  return (
    <div className="w-12 h-12 rounded-full bg-yellow-400 text-black shadow-lg flex items-center justify-center text-lg">
      {icon}
    </div>
  );
};

export default EducationHighlights;
