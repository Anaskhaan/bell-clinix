import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What services does BellClinix Provide?",
    answer:
      "We offer comprehensive services in medical billing, medical coding, AR and denial management, audits, credentialing, and healthcare IT solutions to optimize revenue cycle management (RCM).",
  },
  {
    question: "What type of healthcare providers do you serve?",
    answer:
      "We work with clinics/medical centers, hospitals, private practices, and healthcare organizations across the United States",
  },
  {
    question: " How does BellClinix improve cash flow for providers?",
    answer:
      "By streamlining billing operations, reducing claim rejections, and accelerating payment cycles, we help healthcare providers maximize revenue",
  },
  {
    question:
      "What makes Bell Clinics different from other medical billing companies?",
    answer:
      "We combine advanced technology, professional mastery, and a client-focused approach to deliver seamless billing, and RCM solutions tailored to each provider's needs.",
  },
  {
    question: " How can I get started with BellClinix?",
    answer:
      "Simply contact us through our website or phone and our team will make the step-up process smooth and simple for you.",
  },
  {
    question: "How do you ensure HIPAA compliance in medical billing?",
    answer:
      "We follow strict HIPAA guidelines to safeguard patient information. Our processes include secure data transmission, encrypted storage, and access controls to prevent unauthorized access and maintain compliance with healthcare regulations.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#303a73] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="bg-[#303a73]/50 rounded-xl shadow-xl backdrop-blur-sm border border-[#56bafc]/20">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#56bafc]/20">
              <button
                onClick={() => handleToggle(index)}
                className="w-full py-6 px-4 flex justify-between items-center text-left hover:bg-[#303a73]/10 transition-colors duration-200 group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-white group-hover:text-[#56bafc] transition-colors duration-200">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-[#56bafc] flex-shrink-0 ml-4"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-6 text-white/80 leading-relaxed text-md">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
