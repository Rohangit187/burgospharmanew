import { FaPhoneAlt } from "react-icons/fa";

const FloatingCall = () => {
  return (
    <a
      href="tel:919521263636"
      aria-label="Call Burgos Pharma"
      className="
        fixed bottom-23 right-6 z-50
        flex items-center justify-center
        w-12 h-12
        sm:w-15 sm:h-15
        rounded-full
        bg-[#25D366]
        shadow-lg
        hover:bg-[#20BA5A]
        transition-all
        duration-300
        animate-bounce
      "
    >
      <FaPhoneAlt className="text-xl sm:text-2xl text-white" />
    </a>
  );
};

export default FloatingCall;
