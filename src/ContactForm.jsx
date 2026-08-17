import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCommentAlt,
  FaPaperPlane,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your enquiry has been submitted.");

    console.log("Contact Form Data:", formData);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="w-full bg-gray-50 py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            Heading
        ========================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">

          <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-[#08A94F] mb-3">
            Get In Touch
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#16458F]">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-7">
            Have an enquiry or need more information about our pharmaceutical
            products? Get in touch with our team.
          </p>

        </div>

        {/* =========================
            Contact Form
        ========================== */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-10">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* =========================
                Name
            ========================== */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Name
              </label>

              <div className="relative">

                <FaUser
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#16458F]
                  "
                />

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                  className="
                    w-full
                    pl-11
                    pr-4
                    py-3.5
                    rounded-lg
                    border
                    border-gray-300
                    outline-none
                    text-gray-800
                    placeholder-gray-400
                    focus:border-[#16458F]
                    focus:ring-2
                    focus:ring-[#16458F]/10
                    transition
                  "
                />

              </div>
            </div>

            {/* =========================
                Mobile Number
            ========================== */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Mobile Number
              </label>

              <div className="relative">

                <FaPhone
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#16458F]
                  "
                />

                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                  maxLength="10"
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  autoComplete="tel"
                  className="
                    w-full
                    pl-11
                    pr-4
                    py-3.5
                    rounded-lg
                    border
                    border-gray-300
                    outline-none
                    text-gray-800
                    placeholder-gray-400
                    focus:border-[#16458F]
                    focus:ring-2
                    focus:ring-[#16458F]/10
                    transition
                  "
                />

              </div>
            </div>

            {/* =========================
                Email
            ========================== */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email ID
              </label>

              <div className="relative">

                <FaEnvelope
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#16458F]
                  "
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  autoComplete="email"
                  className="
                    w-full
                    pl-11
                    pr-4
                    py-3.5
                    rounded-lg
                    border
                    border-gray-300
                    outline-none
                    text-gray-800
                    placeholder-gray-400
                    focus:border-[#16458F]
                    focus:ring-2
                    focus:ring-[#16458F]/10
                    transition
                  "
                />

              </div>
            </div>

            {/* =========================
                Message / Enquiry Details
            ========================== */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Message / Enquiry Details
              </label>

              <div className="relative">

                <FaCommentAlt
                  className="
                    absolute
                    left-4
                    top-4
                    text-[#16458F]
                  "
                />

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please enter your enquiry or any information you would like to share..."
                  required
                  rows="5"
                  className="
                    w-full
                    pl-11
                    pr-4
                    py-3.5
                    rounded-lg
                    border
                    border-gray-300
                    outline-none
                    text-gray-800
                    placeholder-gray-400
                    resize-none
                    focus:border-[#16458F]
                    focus:ring-2
                    focus:ring-[#16458F]/10
                    transition
                  "
                />

              </div>
            </div>

            {/* =========================
                Submit Button
            ========================== */}
            <button
              type="submit"
              className="
                w-full
                flex
                items-center
                justify-center
                gap-2
                px-6
                py-3.5
                rounded-lg
                bg-[#16458F]
                text-white
                font-semibold
                hover:bg-[#08A94F]
                transition-all
                duration-300
                shadow-md
                hover:shadow-lg
              "
            >
              <FaPaperPlane />
              Submit Enquiry
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;