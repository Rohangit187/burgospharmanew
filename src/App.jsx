import { Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import AboutUsPage from "./AboutUsPage";
import ProductPage from "./ProductPage";
import ContactFormpage from "./ContactFormpage";
import FloatingWhatsApp from "./FloatingWhatsApp";
import FloatingCall from "./FloatingContact";

const App = () => {
  return (
    <div>
      {/* Website Routes */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Homepage />} />

        {/* About Us Page */}
        <Route path="/about" element={<AboutUsPage />} />

        {/* Products Page */}
        <Route path="/products" element={<ProductPage />} />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactFormpage />} />
      </Routes>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Floating Call Button */}
      <FloatingCall />
    </div>
  );
};

export default App;