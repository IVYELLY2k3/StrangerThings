import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.a
          href="https://forms.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 40px rgba(255, 26, 26, 0.6), 0 0 80px rgba(255, 26, 26, 0.4)',
                '0 0 60px rgba(255, 26, 26, 0.8), 0 0 120px rgba(255, 26, 26, 0.6)',
                '0 0 40px rgba(255, 26, 26, 0.6), 0 0 80px rgba(255, 26, 26, 0.4)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-red-600 px-12 py-6 md:px-16 md:py-8 rounded-sm relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            />

            <span
              className="text-2xl md:text-4xl font-bold text-white tracking-widest relative z-10"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}
            >
              ENTER THE GAME
            </span>
          </motion.div>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-red-400 text-sm md:text-base tracking-widest mt-8 font-light"
        >
          Limited slots available.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-gray-500 text-xs md:text-sm"
        >
          <p>The game begins soon.</p>
          <p className="mt-2">Are you ready?</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 70%)'
        }}
      />
    </div>
  );
}
