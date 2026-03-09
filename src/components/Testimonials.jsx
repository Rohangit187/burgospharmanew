const testimonials = [
  {
    name: "Ritu Sharma",
    Patient: "Psoriasis Treatment",
    quote:
      "I was struggling with psoriasis for years, but after proper diagnosis and treatment at this clinic, my condition has significantly improved. The doctor explained everything clearly and provided a long-term management plan.",
  },
  {
    name: "Ankit Verma",
    Patient: "Acne & Acne Scars",
    quote:
      "My acne and scars reduced noticeably within a few months of treatment. The personalized care and guidance truly made a difference.",
  },
  {
    name: "Shreya Agarwal",
    Patient: "Hair Fall Treatment",
    quote:
      "I was facing severe hair fall, but with the doctor’s expert treatment, my hair growth has improved and hair loss is now under control",
  },
  {
    name: "Sunil Sharma",
    Patient: "Skin Infection Treatment",
    quote:
      "I received quick and effective treatment for my fungal infection. The results were visible within weeks",
  },
];

const TestimonialsInfinite = () => {
  return (
    <section className="relative py-12 bg-[#0F0F0F] overflow-hidden">
      {/* soft light texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#FACC15,_transparent_55%)]" />
      <div className="absolute bottom-20 right-0 w-3xl h-1/2 bg-yellow-300/30 rounded-full blur-3xl" />
      <div className="absolute top-20 left-0 w-3xl h-1/2 bg-yellow-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT — Static Content */}
        <div className="text-white">
          <span className="text-xl bg-gray-200 px-4 py-1 rounded-full uppercase  tracking-tighter text-black">
            PATIENT VOICES
          </span>

          <h2 className="mt-6 text-4xl xl:text-5xl font-extrabold leading-tight">
            Healing 
            <br />
            That Stays for Life
          </h2>

          <p className="mt-10 text-lg leading-relaxed text-white/80 max-w-md">
            What parents say reflects the values we live every day —
            care, clarity, and commitment to every child.
          </p>
        </div>

        {/* RIGHT — Infinite Scrolling Reviews */}
        <div className="relative h-[420px] overflow-hidden bg-gray-300 rounded-3xl shadow-xl">
          
          {/* Fade masks */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-200 to-transparent z-10" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-200 to-transparent z-10" />

          {/* Scrolling container */}
          <div className="absolute inset-0 px-10 py-8 animate-vertical-scroll">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="mb-12">
                <p className="text-gray-800 text-lg leading-relaxed">
                  “{item.quote}”
                </p>

                <div className="mt-4">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
                <div className="mt-4 w-38 h-[1px] bg-black rounded-full" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsInfinite;
