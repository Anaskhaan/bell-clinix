// import { useState } from "react";
// import { Plus, Minus } from "lucide-react";

// export default function FAQs() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [

//   ];

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="mx-auto p-6 sm:p-12 lg:p-24 bg-[#303a73] text-white">
//       <div className="mb-6">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
//           Frequently Asked
//           <span className="text-[#56bafc] ml-2">Questions</span>
//         </h2>
//       </div>
//       <div className="space-y-4">
//         {faqs.map((faq, index) => (
//           <div
//             className="accordion rounded-lg shadow-md bg-[#1f274f]"
//             key={index}
//           >
//             <button
//               type="button"
//               className="w-full text-sm sm:text-base outline-none text-left font-semibold py-4 px-3 sm:py-6 sm:px-4 flex items-center text-white rounded-t-lg hover:text-[#56bafc] transition-all duration-300"
//               onClick={() => toggleAccordion(index)}
//               aria-expanded={openIndex === index}
//             >
//               <span className="mr-4">{faq.question}</span>
//               {openIndex === index ? (
//                 <Minus className="w-5 h-5 ml-auto shrink-0 text-[#56bafc] transition-all duration-300" />
//               ) : (
//                 <Plus className="w-5 h-5 ml-auto shrink-0 text-[#56bafc] transition-all duration-300" />
//               )}
//             </button>
//             <div
//               className={`transition-all duration-500 ease-in-out ${
//                 openIndex === index
//                   ? "max-h-[1000px] pb-4 sm:pb-6 overflow-visible"
//                   : "max-h-0 invisible overflow-hidden"
//               }`}
//             >
//               <p className="text-xs sm:text-sm text-gray-300 px-4 sm:px-6 pb-4 sm:pb-6">
//                 {faq.answer}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is medical billing, and why is it important?",
    answer:
      "Medical billing is the process of submitting and following up on claims with health insurance companies to receive payment for services rendered by healthcare providers. It ensures accurate reimbursement, reduces errors, and helps healthcare facilities maintain financial stability.",
  },
  {
    question: "What is medical coding, and how does it work?",
    answer:
      "Medical coding involves translating healthcare diagnoses, procedures, and medical services into standardized codes. These codes are essential for insurance claims processing and ensure accurate billing and compliance with industry regulations.",
  },
  {
    question: "How can outsourcing medical billing benefit my practice?",
    answer:
      "Outsourcing medical billing allows healthcare providers to focus on patient care while reducing administrative burdens. It improves claim accuracy, ensures compliance, accelerates reimbursements, and minimizes denials, leading to increased revenue.",
  },
  {
    question: "What are claim denials, and how can they be prevented?",
    answer:
      "Claim denials occur when an insurance company refuses to pay for a submitted claim due to errors, missing information, or policy restrictions. They can be prevented by ensuring accurate coding, verifying patient insurance, and submitting complete documentation.",
  },
  {
    question:
      "What is revenue cycle management (RCM), and why is it essential?",
    answer:
      "Revenue Cycle Management (RCM) is the financial process that healthcare facilities use to track patient care from appointment scheduling to final payments. Effective RCM reduces revenue leakage, enhances cash flow, and improves financial performance.",
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
          <p className="text-[#56bafc] text-lg">
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
                    <p className="px-4 pb-6 text-white/80 leading-relaxed">
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
