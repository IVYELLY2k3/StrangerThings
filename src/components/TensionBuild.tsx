import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Typing speed
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-block"
    >
      <span className="font-mono text-xl md:text-3xl lg:text-4xl text-red-600 tracking-wider">
        {displayedText}
      </span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-3 h-6 bg-red-600 ml-1 align-middle"
      />
    </motion.div>
  );
};

export default function TensionBuild() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-black relative overflow-hidden">
      {/* CRT Scanline effect overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,0,0,0.02),rgba(255,0,0,0.06))] bg-[length:100%_4px,3px_100%]" />

      <div className="max-w-4xl w-full space-y-6 z-20">
        <div className="space-y-4 flex flex-col items-start px-2">
          <TypewriterText text="> SYSTEM ALERT: LOW SURVIVAL RATE" delay={0.5} />
          <TypewriterText text="> DECRYPTING CLUES..." delay={2.5} />
          <TypewriterText text="> TEAM SYNC: REQUIRED" delay={4.5} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 6.5, duration: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t-2 border-red-900/50 mt-8 w-full px-2"
        >
          <p className="font-mono text-red-500 text-base md:text-xl tracking-widest mb-2">
            WARNING:
          </p>
          <p className="font-mono text-lg md:text-3xl text-gray-300 leading-normal uppercase">
            You don't need to watch Stranger Things.<br />
            <span className="text-red-500 font-bold block mt-2">You just need a team you trust.</span>
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 8, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-red-500 text-xs md:text-sm tracking-widest font-mono"
        >
          SCROLL TO CONTINUE
        </motion.div>
      </motion.div>
    </div>
  );
}
