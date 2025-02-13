import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [showSplit, setShowSplit] = useState(false);

  // Trigger the split effect after the line sweep
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplit(true);
    }, 1000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left split panel */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 bg-[#303a73] w-1/2 origin-right"
        initial={{ scaleX: 1 }}
        animate={showSplit ? { scaleX: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }}
      />

      {/* Right split panel */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 bg-[#303a73] w-1/2 origin-left"
        initial={{ scaleX: 1 }}
        animate={showSplit ? { scaleX: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }}
      />

      {/* Horizontal sweeping line */}
      <motion.div
        className="absolute left-0 right-0 h-1 bg-[#56bafc]"
        initial={{ top: "-10%", opacity: 1 }}
        animate={{ top: "110%", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.2, 0.8, 1],
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
