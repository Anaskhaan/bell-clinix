import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Dr. Khattak",
    position: "Lead Clinical Advisor",
    image: "/dryousaf.webp",
    description:
      "Dr. Khattak brings extensive expertise in clinical advisory, ensuring best practices and quality healthcare solutions.",
  },
  {
    name: "Dr. Khan",
    position: "International Clinical Advisor",
    image: "/dr20naveed.webp",
    description:
      "Dr. Khan provides international clinical insights, enhancing patient care with innovative strategies.",
  },
  {
    name: "M Fahad",
    position: "Chief Organizer",
    image: "fahad.webp",
    description:
      "Fahad is responsible for overseeing organizational operations and ensuring seamless workflow.",
  },
  {
    name: "Tariq Mehmood",
    position: "HR & Finance",
    image: "/tariq.webp",
    description:
      "Tariq manages human resources and financial strategies, fostering a productive work environment.",
  },
  {
    name: "Raoof Khan",
    position: "Marketing Director",
    image: "https://via.placeholder.com/150",
    description:
      "Raoof leads the marketing team, driving growth through strategic branding and outreach.",
  },
  {
    name: "M Sohaib",
    position: "Managing Director",
    image: "/sohaib.webp",
    description:
      "Sohaib ensures the company’s vision is executed effectively, leading teams towards success.",
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleMembers = [
    teamMembers[startIndex],
    teamMembers[(startIndex + 1) % teamMembers.length],
    teamMembers[(startIndex + 2) % teamMembers.length],
  ];

  return (
    <div>
      <section>
        <div className="flex justify-center items-center">
          <div className="w-full h-auto bg-black py-24 px-2">
            {/* Title Section */}
            <div>
              <h1 className="text-white lg:text-5xl text-xl text-center p-6">
                About Us
              </h1>
            </div>

            {/* Quote Section */}
            <div className="text-center">
              <span className="text-gray-400 p-6 font-extrabold italic block">
                &quot;We have two ears and one mouth so that we can listen twice
                as much as we speak.&quot;
              </span>
              <p className="text-gray-400 font-bold transform lg:translate-x-72">
                Epictetus
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ecf5ff] flex justify-center items-center py-16 px-6">
          <div className="max-w-4xl text-left">
            <h2 className="text-2xl md:text-5xl w-2/1 lg:w-2/3 xl:w-2/3 2xl:w-2/3 font-bold text-gray-900 mb-4">
              Medical Billing & Revenue Cycle Experts
            </h2>
            <p className="lg:text-lg xl:text-lg text-md text-gray-700 text-left">
              BellClinix&apos;s expertise lies in medical billing, coding, and
              RCM services which provide complete financial solutions to
              healthcare professionals throughout the United States. We are
              determined to support medical centers, hospitals, private
              practices, and healthcare organizations to optimize their billing
              operations, reduce claim denials, and accelerate reimbursements
              for improved cash flow. BellClinix deals with empowering
              healthcare providers with innovative, reliable, and transparent
              digital billing solutions. With a dedicated team and a
              patient-centered approach, we concentrate on financial success,
              facilitating healthcare professionals to provide their services
              without the stress of revenue management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Meet Our Team</h2>
          <p className="mb-12 text-gray-400">
            A group of skilled professionals dedicated to excellence.
          </p>
          {/* Added grid for responsive display */}
          <div className="flex justify-center space-x-4 overflow-hidden">
            <motion.div
              className="flex space-x-4 transition-transform ease-in-out"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1 }}
            >
              {visibleMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-2xl px-4 py-6 shadow-lg hover:shadow-xl transition duration-300 relative group w-80"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-400 mb-4"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.position}</p>
                  <p className="mt-2 text-gray-300 text-sm">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#56bafc] text-white text-center">
        <div className="container mx-auto">
          <h2 className="lg:text-5xl text-xl  font-bold mb-4">
            Ready to Optimize Your Revenue Cycle?
          </h2>
          <p className="text-md mb-6">
            Let our expert team help you streamline your medical billing and
            coding process.
          </p>
          <button className="bg-white text-black px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            <Link to="/contact">Get Started Today</Link>
          </button>
        </div>
      </section>
    </div>
  );
}
