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
        "service_87rnaee",
        "template_wlvcxj3",
        formRef.current,
        "SHpTzGLdBar_vOjio"
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
          Choosing the right treatment is an important decision. Our team provides
          honest guidance and clear information to help you make confident choices.
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24">

        {/* ROW 1: Info + Form */}
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-gray-200 shadow-sm">

          {/* LEFT CONTENT */}
          <div className="bg-black p-10 lg:p-14 text-white">
            <h2 className="text-3xl font-semibold">We’re Here to Guide You</h2>

            <p className="mt-4 text-gray-300 max-w-lg">
              Choosing the right treatment is an important decision. Our team provides
              honest guidance and clear information to help you make confident choices.
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
            <h2 className="text-2xl font-semibold text-black">Send Us a Message</h2>

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
                <p className="text-sm mt-2 text-green-600">{success}</p>
              )}
            </form>
          </div>
        </div>

        {/* ROW 2: Contact Details + Single Map */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* CONTACT DETAILS */}
          <div>
            <h2 className="text-2xl font-semibold text-black">Visit or Reach Us</h2>

            <div className="mt-8 space-y-5 text-gray-700">

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                <p>
                  Dr Neha Choudhary- skin and hair clinic <br />
                   Kalyan Hospital, Akshay Patra Chouraha, B-3, 
                   Mahal Yojana, Mahal Scheme, Jagatpura, Jaipur, Rajasthan 302017
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-yellow-500 mt-1" />
                <p>+91 7988632262</p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-yellow-500 mt-1" />
                <p>Drnehaskinclinic199@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-yellow-500 mt-1" />
                <p>Mon – Sat: 4:00 PM – 8:00 PM</p>
              </div>

            </div>
          </div>

          {/* SINGLE MAP */}
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden border shadow-sm">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.1621130440694!2d75.8558647!3d26.802966299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9e10e224faf%3A0x6a71359220bfed87!2sDr%20Neha%20Choudhary-%20skin%20and%20hair%20clinic!5e0!3m2!1sen!2sin!4v1772547160631!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactPage;