import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "919521263636";

  const message =
    "Hello Burgos Pharma, I’m interested in your pharmaceutical products and would like to know more about your products, availability, and services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Burgos Pharma on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-12 h-12
        sm:w-15 sm:h-15
        rounded-full
        bg-[#214D96]
        shadow-lg
        hover:bg-[#173B75]
        transition-all
        duration-300
        animate-bounce
      "
    >
      <FaWhatsapp className="text-3xl sm:text-4xl text-[#00AE4F]" />
    </a>
  );
};

export default FloatingWhatsApp;