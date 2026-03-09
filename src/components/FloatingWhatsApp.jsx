import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "7988632262";
  const message =
    "Hello Dr. Neha Choudhary’s Clinic Team, I would like to consult with you regarding my skin concerns and understand the right treatment options available.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RVK Software on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
       sm:w-15 sm:h-15
        w-12 h-12
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        hover:bg-green-600
        transition
        animate-bounce
      "
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
};

export default FloatingWhatsApp;
