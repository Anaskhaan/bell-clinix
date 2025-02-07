import { useEffect, useState } from "react";

import emailjs from "emailjs-com";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

const ContactForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Oops, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full h-auto bg-[#111827] mt-4 p-10">
          <h1 className="text-white text-5xl text-center p-6">Contact Us</h1>
          <p className="flex justify-center items-center text-white text-xl gap-2">
            Home <ArrowRight /> Contact us
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="container mx-auto px-4 py-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 mb-12">
            <div className="flex-1 flex flex-col gap-6">
              {/* Map */}

              <div className="w-full h-96 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3079517080656!2d37.61844661574943!3d55.75476998055727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sRed%20Square!5e0!3m2!1sen!2sus!4v1644342256872!5m2!1sen!2us"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps"
                  className="w-full h-full rounded-lg "
                ></iframe>
              </div>

              {/* Contact Details */}

              <div className="p-6 relative">
                <ul className="space-y-4 text-[#333] ">
                  <li className="flex items-center gap-4">
                    <i className="fas fa-map-marker-alt text-[#0056D2]"></i>
                    <MapPin />
                    2301 EMANCIPATION HWY STE 101, FREDERICKSBURG, VA 22401 US
                  </li>
                  <li className="flex items-center gap-4">
                    <i className="fas fa-phone text-[#0056D2]"></i>
                    <Phone />
                    +4475653087497
                  </li>
                  <li className="flex items-center gap-4">
                    <i className="fas fa-envelope text-[#0056D2]"></i>
                    <Mail />
                    info@BellClinix.com
                  </li>
                </ul>
              </div>
            </div>

            {/*  Form */}
            <div className="rounded-xl bg-white p-6 shadow-xl lg:p-8 border border-gray-200">
              <h2 className="text-xl font-semibold text-[#303a73] mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {Object.keys(formData).map((field) => (
                  <div key={field} className="space-y-2">
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700 capitalize"
                    >
                      {field}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Enter your ${field}`}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-[#56bafc] focus:outline-none focus:ring-1 focus:ring-[#56bafc]"
                    />
                  </div>
                ))}
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="ml-auto rounded-md bg-[#303a73] px-6 py-2 text-white transition-colors hover:bg-[#56bafc]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              {status && (
                <p className="mt-4 text-[#303a73] text-center">{status}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
