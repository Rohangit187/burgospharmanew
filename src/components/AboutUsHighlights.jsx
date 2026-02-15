const AboutUsUniqueness = () => {
  const points = [
    "Certified & Experienced Homeopathic Practitioners",
    "Advanced Diagnostic Assessment",
    "Personalized Treatment Plans",
    "Caring & Supportive Staff",
    "Strong Values & Patient-First Culture",
    "Well-Equipped Pharmacy",
  ];

  return (
    <section className="w-full bg-[#FFF9E8] py-12">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold b text-gray-900 leading-tight mb-6">
            Healthcare That Builds <br />Confidence & Wellness
          </h2>

          <p className="text-gray-600 max-w-xl mb-10">
            At Absolute Homeopathy, we believe healthcare is deeply personal. 
             Every patient comes with unique health concerns, and our role is to understand the 
             whole person and provide gentle, effective homeopathic care
          </p>

          <div className="space-y-6">
            {points.map((text, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="mt-2 w-3 h-3 rounded-full bg-yellow-400 shrink-0"></span>
                <p className="text-gray-800 font-medium leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE – TALL */}
        <div className="relative">
          {/* Background Accent */}
          <div className="absolute top-10 -right-10 w-full h-full bg-yellow-300/30 rounded-[3rem]"></div>

          {/* Tall Image */}
          <img
            src="/lab-activities.png"
            alt="Our School"
            className="relative h-[520px] lg:h-[620px] w-full object-cover rounded-[3rem] shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUsUniqueness;
