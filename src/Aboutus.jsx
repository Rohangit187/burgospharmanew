const Aboutus = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side - Company Image */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/Burgos-Office.png"
                alt="Burgos Pharma"
                className="w-full h-[280px] sm:h-[380px] lg:h-[500px] object-fill"
              />
            </div>
          </div>

          {/* Right Side - Company Overview */}
          <div className="w-full">
            <p className="text-sm sm:text-base font-semibold text-[#C62828] uppercase tracking-wider mb-3">
              About Burgos Pharma
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Trusted Pharmaceutical Solutions for Better Healthcare
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 mb-5">
              Burgos Pharma is committed to providing quality pharmaceutical
              solutions that support better healthcare and patient well-being.
              We focus on delivering reliable pharmaceutical products while
              maintaining high standards of quality, safety, and consistency.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-7 mb-7">
              Our product portfolio covers a wide range of pharmaceutical
              formulations designed to meet diverse healthcare requirements.
              We continuously work towards building trust through quality
              products and dependable pharmaceutical solutions.
            </p>

            {/* Product Categories */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
                Our Pharmaceutical Products
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Tablet",
                  "Capsule",
                  "Syrup",
                  "Injectables",
                  "Dry Powder",
                  "Contrast Media",
                ].map((product) => (
                  <div
                    key={product}
                    className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#C62828]"></span>
                    <span className="text-sm sm:text-base font-medium text-gray-700">
                      {product}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aboutus;