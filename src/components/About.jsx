const AboutUs = () => {
  return (
    <section className="relative py-10 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug text-center">
              More Than a Clinic, 
              
              <span className="text-blue-500" > A Place to Heal</span>
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
             The Evolution of Healing

The Spirituality of Science

Healing is most powerful where science meets inner wisdom. Just as spirituality moves beyond rigid belief systems to seek deeper truth, homeopathy goes beyond symptom suppression to understand the body as an intelligent, self-regulating system.

Modern medicine often focuses on silencing symptoms rather than listening to them. We believe symptoms are signals, not enemies—messages that reveal deeper imbalances within the body.

Homeopathy represents the evolution of medicine. It works with the body’s natural intelligence, restoring balance at the root instead of suppressing expression.

Our approach honors the integrity of the human system—physical, emotional, and energetic—offering healing that is conscious, compassionate, and complete
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
                  title: "Patient-Centered Care",
                  desc: "Every decision starts with what's best for the patient..",
                },
                {
                  title: "Expert Homeopaths",
                  desc: "Doctors who listen, guide, and genuinely understand..",
                },
                {
                  title: "Safe & Natural (No Side-effects)",
                  desc: "100% natural medicines with zero side effects..",
                },
                {
                  title: "Holistic Root-Cause Approachy",
                  desc: "Treating the root cause, not just symptoms.",
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
