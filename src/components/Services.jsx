import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Banknote, FileCode, ShieldCheck, BarChart3, Key, Laptop } from "lucide-react"

const Services = () => {
  const [ setActiveService] = useState(null)

  const services = [
    {
      icon: <Banknote className="w-12 h-12 text-[#303a73]" />, 
      title: "Medical Billing", 
      description: "Streamline your revenue cycle with our efficient and accurate billing services.", 
      color: "from-emerald-400 to-teal-300"
    },
    {
      icon: <FileCode className="w-12 h-12 text-[#303a73]" />, 
      title: "Medical Coding", 
      description: "Ensure compliance and accuracy in claims with our precise coding solutions.", 
      color: "from-sky-400 to-blue-300"
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-[#303a73]" />, 
      title: "AR & Denial Management", 
      description: "Optimize cash flow with our proactive approach to reducing denials.", 
      color: "from-amber-400 to-yellow-300"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-[#303a73]" />, 
      title: "Audit Services", 
      description: "Maintain accuracy and compliance with our comprehensive audit solutions.", 
      color: "from-rose-400 to-pink-300"
    },
    {
      icon: <Key className="w-12 h-12 text-[#303a73]" />, 
      title: "Credentialing", 
      description: "Streamline your provider and payer credentialing processes seamlessly.", 
      color: "from-violet-400 to-purple-300"
    },
    {
      icon: <Laptop className="w-12 h-12 text-[#303a73]" />, 
      title: "Healthcare IT", 
      description: "Leverage cutting-edge IT solutions tailored for the healthcare industry.", 
      color: "from-indigo-400 to-blue-300"
    }
  ]

  const CardComponent = (service) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        className="relative w-full h-72 rounded-2xl p-6 cursor-grab"
      >
        <motion.div
          className={`absolute inset-0 bg-white rounded-2xl shadow-lg`}
         
        />
        <div className="relative h-full flex flex-col justify-between z-10">
          <div>
            <div className="mb-4 filter drop-shadow-md">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-[#303a73] drop-shadow-md">{service.title}</h3>
            <p className="text-[#303a73] text-opacity-90 drop-shadow-sm">{service.description}</p>
          </div>
          <motion.button
        
            className="self-start px-4 py-2 bg-[#303a73] white-20 rounded-full text-white font-semibold  transition-colors flex items-center gap-2 shadow-md"
            onClick={() => setActiveService(service.title)}
          >
            Learn More
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-[#303a73] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-[#56bafc] text-center mb-12 drop-shadow-lg"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <CardComponent key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services