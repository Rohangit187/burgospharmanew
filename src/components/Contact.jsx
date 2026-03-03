import {
  FaPhoneAlt,
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactPage = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_mhz7q05",
        "template_5c1f8wc",
        formRef.current,
        "hbsc8xofhde0108PO"
      )
      .then(() => {
        setSuccess("Message Sent Successfully ✅");
        formRef.current.reset();
        setLoading(false);
      })
      .catch(() => {
        setSuccess("Something went wrong ❌");
        setLoading(false);
      });
  };

  return (
    <section className="bg-white">
      {/* HEADER */}
      <div className="mt-12 py-12 text-center">
        <h1 className="text-4xl font-bold text-black">Contact Us</h1>
        <p className="mt-4 max-w-xl mx-auto text-gray-700">
          Choosing the right treatment is an important decision.
          Our team provides honest guidance and clear information
          to help you make confident choices.
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">

        {/* ROW 1 */}
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-gray-200 shadow-sm">

          {/* LEFT CONTENT */}
          <div className="bg-black p-10 lg:p-14 text-white">
            <h2 className="text-3xl font-semibold">
              We’re Here to Guide You
            </h2>

            <p className="mt-4 text-gray-300 max-w-lg">
              Choosing the right treatment is an important decision.
              Our team provides honest guidance and clear information
              to help you make confident choices.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Response within 24 hours",
                "Treatment & consultation support",
                "Clinic visit assistance",
                "Patient-first communication",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-center">
                  <FaCheckCircle className="text-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white p-10 lg:p-14">
            <h2 className="text-2xl font-semibold text-black">
              Send Us a Message
            </h2>

            <p className="mt-2 text-gray-600 text-sm max-w-md">
              Share your details and our team will contact you shortly.
            </p>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-8 space-y-6 max-w-md"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
                className="w-full border-b border-gray-300 py-3 focus:border-yellow-500 focus:outline-none"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="w-full border-b border-gray-300 py-3 focus:border-yellow-500 focus:outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border-b border-gray-300 py-3 focus:border-yellow-500 focus:outline-none"
              />

              <textarea
                name="message"
                rows="3"
                placeholder="Your Message"
                required
                className="w-full border-b border-gray-300 py-3 focus:border-yellow-500 focus:outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-md text-sm font-medium hover:bg-yellow-500 transition"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>

              {success && (
                <p className="text-sm mt-2 text-green-600">
                  {success}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* ROW 2 — MAP + CONTACT DETAILS */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* CONTACT DETAILS */}
          <div>
            <h2 className="text-2xl font-semibold text-black">
              Visit or Reach Us
            </h2>

            <div className="mt-8 space-y-5 text-gray-700">

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                <p>
                  Absolute Homeopathy <br />
                  URBANA JEWELS JAIPUR, TA 416, Muhana Mandi Rd,
                  Jaipur, Keshyawala, Rajasthan 302029
                </p>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                <p>
                  Behror Clinic <br />
                  Hamidpur Road, near Patwar Ghar,
                  Meero Ka Mohla, Jharoda,
                  Behror, Rajasthan 301701
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-yellow-500 mt-1" />
                <p>+91 9672170090</p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-yellow-500 mt-1" />
                <p>absolutehomeopathy00@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-yellow-500 mt-1" />
                <p>Mon – Sat: 4:00 PM – 8:00 PM</p>
              </div>

            </div>
          </div>

          {/* MAPS */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Jaipur Map */}
            <div className="w-full h-[250px] rounded-2xl overflow-hidden border shadow-sm">
              <iframe
                title="Jaipur Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.473098491432!2d75.75351429999999!3d26.7930607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dcb8a98623bdf%3A0xf6ca88793963cfe1!2sABSOLUTE%20HOMEOPATHY%20by%20Dr.NEHA%20GUPTA%20SENIOR%20HOMEOPATHIC%20PHYSICIAN!5e0!3m2!1sen!2sin!4v1770965700675!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Behror Map */}
            <div className="w-full h-[250px] rounded-2xl overflow-hidden border shadow-sm">
              <iframe
                title="Behror Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.3318072537104!2d76.27958149999999!3d27.891789299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d53cac52caa39%3A0x33009a4da1bc70bd!2sDr%20Neha%20Gupta%20senior%20Homeopathy%20physician!5e0!3m2!1sen!2sin!4v1772533934598!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;