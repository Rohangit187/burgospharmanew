const AboutUs = () => {
  return (
    <section className="relative py-10 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug text-center">
             Advanced Skin Care, 
              
              <span className="text-blue-500" >  with a Personal Touch</span>
            </h2>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left: Image Composition */}
          <div className="relative">
            <img
              src="/about-school.jpg"
              alt="Happy students"
              className="rounded-3xl shadow-lg"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-6 bg-white p-6 rounded-2xl shadow-xl w-64 hidden sm:block">
              <h4 className="text-2xl font-bold text-yellow-500">20+ </h4>
              <p className="text-sm text-gray-600 mt-1">
                Years of Clinical Excellences
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div>

            <p className="text-gray-600 leading-relaxed mt-5">
              Our clinic is led by Dr. Neha Choudhary, a qualified 
              and experienced dermatologist specializing in skin, hair, nail, and venereal diseases. 
              She completed her MBBS from PGIMS, Rohtak and earned her MD in Dermatology  from SMS Medical College, Jaipur.
               With Couple Of  years of experience as a Senior Resident at MMIMSR Mullana, Ambala, she has managed a wide range of dermatological conditions including acne, psoriasis, eczema, pigmentation, hair loss, skin infections, and leprosy. Combining strong academic training with practical expertise, Dr. Neha provides personalized, 
              evidence-based treatments focused on long-term skin health and patient satisfaction
            </p>

            {/* <p className="mt-4 text-gray-600 leading-relaxed">
              We combine strong academics with emotional intelligence, ensuring
              children don’t just learn subjects — they learn confidence,
              empathy, and independence.
            </p> */}

            {/* Values */}
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Qualified Expertise",
                  desc: "Led by an MD Dermatologist with advanced academic training and SMS hospital experience.",
                },
                {
                  title: "Comprehensive Skin Care",
                  desc: "Complete treatment for skin, hair, nail, and venereal diseases under one roof.",
                },
                {
                  title: "Personalized Treatment Approach",
                  desc: "Customized, evidence-based care focused on root cause and long-term results.",
                },
                {
                  title: "Safe & Hygienic Environment",
                  desc: "High standards of cleanliness, patient privacy, and ethical medical practice",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
