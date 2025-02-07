import { useEffect, useState } from "react";
import { CheckCircle, CreditCard, Smile, Star } from "lucide-react";
import { motion } from "framer-motion";

const Stats = () => {
  const statData = [
    {
      icon: CheckCircle,
      title: "Claim Approval",
      targetValue: 97,
      description:
        "Streamlined and efficient claim approval process ensuring quick resolutions and transparency for your convenience.",
    },
    {
      icon: CreditCard,
      title: "Fast Reimbursements",
      targetValue: 96,
      description:
        "Quick and hassle-free reimbursements, ensuring you receive your payments without delay.",
    },
    {
      icon: Smile,
      title: "Payer-Provider-Patient Satisfaction",
      targetValue: 99,
      description:
        "Enhancing satisfaction for payers, providers, and patients through seamless communication, transparency, and efficient service.",
    },
    {
      icon: Star,
      title: "Overall Score",
      targetValue: 98,
      description:
        "An aggregate rating that reflects the overall performance and quality of service based on key metrics and feedback.",
    },
  ];

  return (
    <div className="py-16 px-3 bg-white bg-opacity-10">
      <h1 className="text-center text-black lg:text-5xl text-3xl font-bold mb-10">
        Our Key Metrics
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl items-center mx-auto sm:px-4">
        {statData.map(
          ({ icon: Icon, title, targetValue, description }, index) => {
            const [value, setValue] = useState(0);

            useEffect(() => {
              let startValue = 0;
              const increment = targetValue / 100;
              const timer = setInterval(() => {
                startValue += increment;
                if (startValue >= targetValue) {
                  setValue(targetValue);
                  clearInterval(timer);
                } else {
                  setValue(Math.round(startValue));
                }
              }, 30);
              return () => clearInterval(timer);
            }, [targetValue]);

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-xl mx-auto border border-gray-200 max-w-md sm:w-full w-full"
              >
                <Icon size={40} className="text-[#56bafc] mb-4" />
                <h2 className="text-[#303a73] text-5xl font-bold mb-2">
                  {value}%
                </h2>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Stats;
