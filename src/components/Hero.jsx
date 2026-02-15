import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative top-10 w-full min-h-screen flex items-center text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/aboutBanner.png')",
        }}
      />

      {/* White Overlay */}
      <div className="absolute inset-0  from-black/60 via-black/70 to-black/60" />


      {/* Content */}
      <div className="relative z-10 max-w-full   bg-black/50 rounded-2xl mx-auto mb-10 py-10 px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl ">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
             Natural & Gentle Healing
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-100">
            Healing Your  &apos;s{" "}
            <span className="text-white"> Body From</span>
            <span className="text-yellow-500"> Within</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-100 text-base sm:text-lg max-w-6xl leading-relaxed">
            Experience holistic wellness through personalized homeopathic treatments that address the root cause of your health concerns.
             We lead with heart, care, and commitment to natural healing.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">

            <Link
  to="/contact"
  className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition flex items-center gap-2 inline-flex"
>
  Book appointment →
</Link>
             <Link
  to="/about" className="border border-orange-300 text-gray-100 px-6 py-3 rounded-full font-medium transition">
              Learn More
            </Link>
          </div>

          {/* Stats */}
         <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto text-center">

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">20+</h3> 
              <p className="text-sm text-gray-100">Years of Clinical Excellence</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-400">100000+</h3> 
              <p className="text-sm text-gray-100">Happy & Healthy Patients</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-400">20+</h3>
              <p className="text-sm text-gray-100">Years of Experience in Government Clinics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
