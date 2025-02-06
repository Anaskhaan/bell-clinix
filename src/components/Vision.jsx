import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

const Vision = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="bg-[#f5f8fc] min-h-screen flex items-center justify-center"
    >
      <div className="bg-[#303a73] text-white p-10 rounded-2xl shadow-2xl w-11/12 max-w-4xl text-center">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-bold mb-6 flex items-center justify-center"
        >
          <Eye className="inline-block mr-2 text-[#56bafc] animate-bounce" size={32} />
          Our Vision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="text-lg leading-relaxed text-[#56bafc] mb-8"
        >
          BellClinix&apos;s think tanks foresee being the leading force in transforming healthcare revenue management. We envision a future where healthcare providers seamlessly navigate the complexities of billing, achieving financial prosperity while delivering exceptional patient care. Through our innovative solutions, relentless dedication, and unwavering commitment to excellence, we aspire to set new standards in efficiency, accuracy, and compliance within the medical billing industry. Our ultimate goal is to empower healthcare organizations to thrive financially, enabling them to focus entirely on enhancing patient outcomes and driving innovation in healthcare delivery.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <Target className="text-[#56bafc] mx-auto animate-pulse" size={48} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Vision;
