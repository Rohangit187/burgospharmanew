import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer';
import BannerImage from './BannerImage'
import PharmaceuticalSolutions from './PharmaceuticalSolutions'

function Homepage() {
  return (
    <div>
      <Navbar />
            <BannerImage />

        <PharmaceuticalSolutions />
      <Footer />

      <main>
        {/* Homepage content goes here */}
      </main>
    </div>
  );
}

export default Homepage;
