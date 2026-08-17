import React from "react";
import PharmaceuticalProducts from "./PharmaceuticalProducts";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductPage = () => {
  return (
    <div>
        <Navbar />
      <PharmaceuticalProducts />
      <Footer />
    </div>
  );
};

export default ProductPage;