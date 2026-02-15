import { motion } from 'framer-motion';

export default function OpeningScene() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, times: [0, 0.3, 0.7, 1] }}
        className="text-red-500 text-sm md:text-base tracking-[0.3em] font-mono absolute top-1/3"
      >
        SIGNAL DETECTED...
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 2, ease: "easeOut" }}
        className="text-center relative"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-red-600 mb-6 relative"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            textShadow: '0 0 20px rgba(255, 26, 26, 0.8), 0 0 40px rgba(255, 26, 26, 0.6), 0 0 60px rgba(255, 26, 26, 0.4)',
            letterSpacing: '0.05em'
          }}
          animate={{
            textShadow: [
              '0 0 20px rgba(255, 26, 26, 0.8), 0 0 40px rgba(255, 26, 26, 0.6)',
              '0 0 30px rgba(255, 26, 26, 1), 0 0 60px rgba(255, 26, 26, 0.8)',
              '0 0 20px rgba(255, 26, 26, 0.8), 0 0 40px rgba(255, 26, 26, 0.6)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          STRANGER THINGS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1.5 }}
          className="text-xl md:text-2xl text-gray-300 tracking-widest font-light"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A GAME IS COMING.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1] }}
        transition={{ delay: 6, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-red-500 text-sm tracking-widest"
        >
          SCROLL TO ENTER
        </motion.div>
      </motion.div>
    </div>
  );
}
