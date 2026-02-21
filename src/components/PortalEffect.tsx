import { motion } from 'framer-motion';
import { useState } from 'react';

interface PortalEffectProps {
  onEnter: () => void;
}

export default function PortalEffect({ onEnter }: PortalEffectProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handlePortalClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center"
        animate={isClicked ? { scale: [1, 1.2, 3], opacity: [0.8, 1, 0] } : {}}
        onAnimationComplete={isClicked ? undefined : undefined}
      >
        <motion.div
          className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-red-600 cursor-pointer relative group"
          style={{
            boxShadow: '0 0 100px rgba(255, 26, 26, 0.8), inset 0 0 100px rgba(255, 26, 26, 0.4)'
          }}
          animate={isClicked ? { scale: 1.1 } : { scale: [0.95, 1.05, 1] }}
          transition={isClicked ? { duration: 0.3 } : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
          onClick={handlePortalClick}
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: [0, 1.2, 0.8], opacity: [0, 1, 0.5] }}
        transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center"
        animate={isClicked ? { scale: [0.8, 0.9, 2], opacity: [0.5, 0.7, 0] } : {}}
      >
        <motion.div
          className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-red-500 pointer-events-none"
          style={{
            boxShadow: '0 0 80px rgba(255, 26, 26, 0.6), inset 0 0 80px rgba(255, 26, 26, 0.3)'
          }}
          animate={isClicked ? {} : { rotate: [0, 360] }}
          transition={isClicked ? {} : { duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Central Dot */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-4 h-4 bg-red-800 rounded-full cursor-pointer shadow-[0_0_20px_rgba(153,27,27,0.8)]"
          onClick={handlePortalClick}
          whileHover={{ scale: 1.5, boxShadow: "0 0 30px rgba(220, 38, 38, 1)" }}
          animate={isClicked ? { scale: [1, 20], opacity: [1, 0] } : { scale: [1, 1.2, 1] }}
          transition={isClicked ? { duration: 0.5 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isClicked ? { opacity: 0 } : { opacity: [0, 1] }}
        transition={{ delay: 3.5, duration: 1.5 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-red-500 text-sm md:text-base tracking-widest font-light">
          CLICK INSIDE THE PORTAL
        </p>
      </motion.div>

      {isClicked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-red-600 z-50 pointer-events-none"
        />
      )}
    </div>
  );
}
